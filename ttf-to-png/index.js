const fs = require('fs');
const { registerFont, createCanvas } = require('canvas');
const path = require('path');

// 配置参数
const config = {
    fontSize: 64,      // 字体大小
    padding: 10,       // 内边距
    textColor: 'black' // 文字颜色
};

async function convertNumbersToPNG(fontPath, outputDir) {
    try {
        // 确保输出目录存在
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // 注册字体
        const fontName = 'CustomFont';
        registerFont(fontPath, { family: fontName });
        
        // 为每个数字生成PNG
        for (let num = 0; num <= 9; num++) {
            // 创建固定大小的画布
            const canvas = createCanvas(config.fontSize * 2, config.fontSize * 2);
            const ctx = canvas.getContext('2d');

            // 设置透明背景
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 设置字体
            ctx.font = `${config.fontSize}px "${fontName}"`;
            ctx.fillStyle = config.textColor;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // 在画布中心绘制数字
            ctx.fillText(
                num.toString(),
                canvas.width / 2,
                canvas.height / 2
            );

            // 打印一些调试信息
            console.log(`Drawing number ${num}`);
            console.log(`Font: ${ctx.font}`);
            console.log(`Canvas size: ${canvas.width}x${canvas.height}`);

            // 保存为PNG
            const buffer = canvas.toBuffer('image/png');
            const outputPath = path.join(outputDir, `${num}.png`);
            fs.writeFileSync(outputPath, buffer);
            
            console.log(`Generated ${outputPath}`);
        }

        console.log('All numbers converted successfully!');
    } catch (error) {
        console.error('Error details:', error);
        throw error;
    }
}

// 使用示例
const fontPath = './MapleMono-SC-NF-Light.ttf';    // 替换为你的字体文件路径
const outputDir = './output';                   // 输出目录

// 检查字体文件是否存在
if (!fs.existsSync(fontPath)) {
    console.error(`Font file not found: ${fontPath}`);
    process.exit(1);
}

convertNumbersToPNG(fontPath, outputDir)
    .catch(err => {
        console.error('Failed to convert numbers:', err);
        process.exit(1);
    });