// 《将进酒》覆盖率测试脚本
const middleChineseData = require('./middle-chinese-data.js');

console.log('🍷 《将进酒》中古汉语覆盖率测试');
console.log('================================');

// 《将进酒》全文
const jiangJinJiu = `君不见黄河之水天上来，奔流到海不复回。
君不见高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，金千两散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。
钟鼓馔玉不足贵，但愿长醉不复醒。
古来圣贤皆寂寞，惟有饮者留其名。
陈王昔时宴平乐，斗酒十千恣欢谑。
主人何为言少钱，径须沽酒对君酌。
五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。`;

// 提取汉字
const chineseChars = jiangJinJiu.match(/[\u4e00-\u9fff]/g) || [];
const uniqueChars = [...new Set(chineseChars)];
const knownChars = uniqueChars.filter(char => middleChineseData[char]);
const unknownChars = uniqueChars.filter(char => !middleChineseData[char]);

console.log(`📖 《将进酒》总字数: ${chineseChars.length}`);
console.log(`🔢 不重复汉字: ${uniqueChars.length}`);
console.log(`✅ 已收录字符: ${knownChars.length}`);
console.log(`❌ 未收录字符: ${unknownChars.length}`);
console.log(`📊 覆盖率: ${(knownChars.length / uniqueChars.length * 100).toFixed(1)}%`);

if (unknownChars.length > 0) {
    console.log(`\n🔍 未收录字符列表:`);
    unknownChars.forEach(char => {
        console.log(`   ❌ "${char}"`);
    });
} else {
    console.log('\n🎉 《将进酒》完全覆盖！所有汉字都有中古音数据。');
}

// 测试几个关键词句的标注效果
console.log('\n🔊 关键诗句标注效果:');
const testSentences = [
    '君不见黄河之水天上来',
    '天生我材必有用',
    '五花马，千金裘',
    '与尔同销万古愁'
];

testSentences.forEach(sentence => {
    const chars = sentence.match(/[\u4e00-\u9fff]/g) || [];
    const annotations = chars.map(char => {
        const data = middleChineseData[char];
        return data ? `${char}[${data.ipa}]` : `${char}[?]`;
    });
    console.log(`📝 ${sentence}`);
    console.log(`🎵 ${annotations.join(' ')}`);
    console.log('');
});

console.log('🎯 《将进酒》测试完成！');