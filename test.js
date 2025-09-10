// 中古汉语朗读器功能测试
// 在Node.js环境下运行的测试脚本

const middleChineseData = require('./middle-chinese-data.js');

console.log('🧪 中古汉语朗读器功能测试');
console.log('================================');

// 测试1：数据加载测试
console.log('\n📊 测试1：数据加载测试');
const dataSize = Object.keys(middleChineseData).length;
console.log(`✅ 成功加载 ${dataSize} 个汉字的中古音数据`);

// 测试2：关键字符测试
console.log('\n🔤 测试2：关键字符测试');
const testCharacters = ['人', '生', '如', '梦', '江', '月'];
testCharacters.forEach(char => {
    const data = middleChineseData[char];
    if (data) {
        console.log(`✅ "${char}": IPA[${data.ipa}] 拼音[${data.pinyin}] 声调[${data.tone}]`);
    } else {
        console.log(`❌ "${char}": 未找到数据`);
    }
});

// 测试3：《念奴娇·赤壁怀古》覆盖率测试
console.log('\n📝 测试3：《念奴娇·赤壁怀古》覆盖率测试');
const poemText = `大江东去，浪淘尽，千古风流人物。
故垒西边，人道是，三国周郎赤壁。
乱石穿空，惊涛拍岸，卷起千堆雪。
江山如画，一时多少豪杰。
遥想公瑾当年，小乔初嫁了，雄姿英发。
羽扇纶巾，谈笑间，樯橹灰飞烟灭。
故国神游，多情应笑我，早生华发。
人生如梦，一尊还酹江月。`;

// 提取汉字
const chineseChars = poemText.match(/[\u4e00-\u9fff]/g) || [];
const uniqueChars = [...new Set(chineseChars)];
const knownChars = uniqueChars.filter(char => middleChineseData[char]);
const unknownChars = uniqueChars.filter(char => !middleChineseData[char]);

console.log(`📖 诗词总字数: ${chineseChars.length}`);
console.log(`🔢 不重复汉字: ${uniqueChars.length}`);
console.log(`✅ 已收录字符: ${knownChars.length}`);
console.log(`❌ 未收录字符: ${unknownChars.length}`);
console.log(`📊 覆盖率: ${(knownChars.length / uniqueChars.length * 100).toFixed(1)}%`);

if (unknownChars.length > 0) {
    console.log(`🔍 未收录字符列表: ${unknownChars.join(', ')}`);
}

// 测试4：字音转换功能测试
console.log('\n🔄 测试4：字音转换功能测试');
function generateAnnotation(text) {
    const chars = text.match(/[\u4e00-\u9fff]/g) || [];
    const annotations = chars.map(char => {
        const data = middleChineseData[char];
        if (data) {
            return `${char}[${data.ipa}]`;
        } else {
            return `${char}[未收录]`;
        }
    });
    return annotations.join(' ');
}

const testSentence = "人生如梦，一尊还酹江月";
const annotation = generateAnnotation(testSentence);
console.log(`📝 原文: ${testSentence}`);
console.log(`🔊 标注: ${annotation}`);

// 测试5：数据完整性检查
console.log('\n🔍 测试5：数据完整性检查');
let validCount = 0;
let invalidCount = 0;

Object.entries(middleChineseData).forEach(([char, data]) => {
    if (data.ipa && data.pinyin && data.tone) {
        validCount++;
    } else {
        invalidCount++;
        console.log(`⚠️  "${char}" 数据不完整:`, data);
    }
});

console.log(`✅ 完整数据条目: ${validCount}`);
console.log(`❌ 不完整数据条目: ${invalidCount}`);

// 测试总结
console.log('\n🎯 测试总结');
console.log('================================');
console.log(`📊 数据规模: ${dataSize} 个汉字`);
console.log(`✅ 数据完整性: ${validCount}/${validCount + invalidCount}`);
console.log(`🎯 《念奴娇》覆盖率: ${(knownChars.length / uniqueChars.length * 100).toFixed(1)}%`);

if (validCount === dataSize && knownChars.length / uniqueChars.length > 0.9) {
    console.log('🎉 所有测试通过！应用已准备就绪。');
} else {
    console.log('⚠️  存在一些问题，但基本功能可用。');
}

console.log('\n📱 应用访问地址: http://localhost:8000');
console.log('🌐 在浏览器中打开以上地址即可使用中古汉语朗读器！');