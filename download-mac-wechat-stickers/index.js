const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const axios = require('axios');
const os = require('os');
const util = require('util');

// 使用promisify转换callback风格函数为Promise
const execPromise = util.promisify(exec);
const mkdirPromise = util.promisify(fs.mkdir);
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

// 配置路径
const username = os.userInfo().username;
const basePath = `/Users/${username}/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9`;
const outputDir = path.join(os.homedir(), 'Downloads', 'WeChatStickers');

async function findRandomFolder() {
  try {
    const files = fs.readdirSync(basePath);
    // 筛选可能的随机文件夹（通常是32位16进制字符）
    const possibleFolders = files.filter(file => /^[a-f0-9]{32}$/.test(file));
    
    if (possibleFolders.length === 0) {
      throw new Error('找不到符合条件的随机文件夹');
    }
    
    console.log(`找到 ${possibleFolders.length} 个可能的随机文件夹，正在检查 fav.archive 文件...`);
    
    // 检查每个文件夹是否包含 fav.archive 文件
    for (const folder of possibleFolders) {
      // 修改这里：检查 Stickers 目录下是否直接有 fav.archive 文件
      const favArchivePath = path.join(basePath, folder, 'Stickers/fav.archive');
      if (fs.existsSync(favArchivePath)) {
        console.log(`找到包含 fav.archive 文件的文件夹: ${folder}`);
        return { folder, favArchivePath };
      }
      
      // 也检查 Persistence 目录
      const persistencePath = path.join(basePath, folder, 'Stickers/fav.archive');
      if (fs.existsSync(persistencePath)) {
        console.log(`找到包含 fav.archive 文件的文件夹(Persistence): ${folder}`);
        return { folder, favArchivePath: persistencePath };
      }
    }
    
    throw new Error('所有随机文件夹中都找不到 fav.archive 文件');
  } catch (error) {
    console.error('查找随机文件夹出错:', error.message);
    throw error;
  }
}

async function processFavArchive(favArchivePath) {
  try {
    const favArchivePlistPath = `${favArchivePath}.plist`;
    
    // 检查文件是否存在
    if (!fs.existsSync(favArchivePath)) {
      throw new Error(`fav.archive文件不存在: ${favArchivePath}`);
    }
    
    // 复制文件
    fs.copyFileSync(favArchivePath, favArchivePlistPath);
    
    // 转换为XML
    await execPromise(`plutil -convert xml1 "${favArchivePlistPath}"`);
    
    // 读取XML文件
    const xmlData = await readFilePromise(favArchivePlistPath, 'utf-8');
    return xmlData;
  } catch (error) {
    console.error('处理fav.archive文件出错:', error.message);
    throw error;
  }
}

async function extractStickerUrls(xmlData) {
  try {
    // 修改正则表达式，确保匹配完整URL
    // 匹配从http://开始，到bizid=数字结束的整个字符串
    const urlRegex = /http:\/\/[^"<\s]+?filekey=[^"<\s]+?bizid=\d+/g;
    const matches = xmlData.match(urlRegex) || [];
    
    // 替换&amp;为&
    const urls = matches.map(url => url.replace(/&amp;/g, '&'));
    
    return urls;
  } catch (error) {
    console.error('解析XML文件出错:', error.message);
    throw error;
  }
}

// 根据文件头判断文件类型
function determineFileType(buffer) {
  // 文件头签名
  const signatures = {
    'ffd8ffe0': 'jpg',
    'ffd8ffe1': 'jpg',
    'ffd8ffe2': 'jpg',
    '89504e47': 'png',
    '47494638': 'gif',
    '52494646': 'webp'  // WEBP也支持
  };
  
  // 检查文件头
  if (buffer.length < 4) {
    return null;
  }
  
  const hex = buffer.slice(0, 4).toString('hex').toLowerCase();
  
  for (const [signature, format] of Object.entries(signatures)) {
    if (hex.startsWith(signature)) {
      return format;
    }
  }
  
  return null; // 未知类型
}

async function downloadStickers(urls) {
  try {
    // 创建下载目录
    if (!fs.existsSync(outputDir)) {
      await mkdirPromise(outputDir, { recursive: true });
    }
    
    console.log(`将下载 ${urls.length} 个表情包到 ${outputDir}`);
    
    // 下载所有表情包
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      // 从URL中提取MD5，格式通常为m=md5&
      const md5Match = url.match(/m=([a-f0-9]+)&/);
      if (!md5Match) {
        console.warn(`无法从URL中提取MD5值，使用索引作为文件名: ${i+1}`);
        continue;
      }
      
      const md5 = md5Match[1];
      
      // 检查是否已经有这个MD5的任何格式文件
      const existingFiles = fs.existsSync(outputDir) ? 
        fs.readdirSync(outputDir).filter(file => file.startsWith(`${md5}.`)) : [];
      
      if (existingFiles.length > 0) {
        console.log(`[${i+1}/${urls.length}] 文件已存在，跳过: ${existingFiles[0]}`);
        continue;
      }
      
      console.log(`[${i+1}/${urls.length}] 下载中: ${md5}`);
      
      try {
        const response = await axios({
          method: 'get',
          url: url,
          responseType: 'arraybuffer',
          timeout: 15000 // 15秒超时
        });
        
        const buffer = Buffer.from(response.data);
        
        // 检测文件类型
        let fileExtension = determineFileType(buffer);
        if (!fileExtension) {
          console.warn(`无法确定文件类型，默认使用.bin: ${md5}`);
          fileExtension = 'bin';
        }
        
        const outputPath = path.join(outputDir, `${md5}.${fileExtension}`);
        await writeFilePromise(outputPath, buffer);
        console.log(`✅ 已下载: ${md5}.${fileExtension}`);
      } catch (downloadError) {
        console.error(`❌ 下载失败 ${md5}:`, downloadError.message);
      }
    }
    
    console.log(`\n下载完成! 所有表情包已保存到: ${outputDir}`);
  } catch (error) {
    console.error('下载表情包出错:', error.message);
    throw error;
  }
}

async function main() {
  try {
    console.log('开始下载微信表情包...');
    
    // 1. 查找随机字符串文件夹
    console.log('查找随机文件夹...');
    const { folder, favArchivePath } = await findRandomFolder();
    console.log(`将使用文件夹: ${folder}`);
    console.log(`使用文件路径: ${favArchivePath}`);
    
    // 2. 处理fav.archive文件
    console.log('处理fav.archive文件...');
    const xmlData = await processFavArchive(favArchivePath);
    
    // 3. 提取表情包URL
    console.log('提取表情包URL...');
    const urls = await extractStickerUrls(xmlData);
    console.log(`共找到 ${urls.length} 个表情包URL`);
    
    if (urls.length > 0) {
      console.log('示例URL:', urls[0]);
    }
    
    // 4. 下载表情包
    await downloadStickers(urls);
    
  } catch (error) {
    console.error('程序执行出错:', error.message);
  }
}

// 执行主函数
main();