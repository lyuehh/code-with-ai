const fs = require('fs');
const opentype = require('opentype.js');
const { createCanvas } = require('canvas');

// 配置参数
const config = {
    fontSize: 64,        // 字体大小
    padding: 10,         // 内边距
    textColor: 'black'   // 文字颜色
};

async function convertNumbersToPNG(fontPath, outputDir) {
    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 加载字体文件
    const font = opentype.loadSync(fontPath);
    
    // 注册字体到 Canvas
    const fontBuffer = fs.readFileSync(fontPath);
    const fontFamily = 'CustomFont';
    
    // 为每个数字生成PNG
    for (let num = 0; num <= 9; num++) {
        // 创建画布
        const canvas = createCanvas(config.fontSize + config.padding * 2, config.fontSize + config.padding * 2);
        const ctx = canvas.getContext('2d');

        // 清除画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 设置字体
        ctx.fillStyle = config.textColor;
        ctx.font = `${config.fontSize}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // 在画布中心绘制数字
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.fillText(num.toString(), centerX, centerY);

        // 保存为PNG，设置为支持透明度的格式
        const buffer = canvas.toBuffer('image/png', {
            compressionLevel: 9,
            filters: canvas.PNG_ALL_FILTERS,
            palette: undefined,
            backgroundIndex: 0,
            resolution: 96
        });
        
        fs.writeFileSync(`${outputDir}/${num}.png`, buffer);
        console.log(`Generated ${num}.png`);
    }
}

// 使用示例
const fontPath = './MapleMono-SC-NF-Light.ttf';    // 替换为你的字体文件路径
const outputDir = './output';                   // 输出目录

convertNumbersToPNG(fontPath, outputDir)
    .then(() => console.log('All numbers converted successfully!'))
    .catch(err => console.error('Error:', err));