// 中古音发音系统测试
// 在浏览器控制台中运行

console.log('🎵 中古音发音系统测试开始');

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(testPronunciation, 1000);
});

async function testPronunciation() {
    console.log('📋 开始测试中古音发音功能...');
    
    // 检查依赖
    if (typeof MiddleChinesePronunciation === 'undefined') {
        console.error('❌ MiddleChinesePronunciation 类未找到');
        return;
    }
    
    if (typeof middleChineseData === 'undefined') {
        console.error('❌ middleChineseData 数据未找到');
        return;
    }
    
    // 初始化发音引擎
    const pronunciation = new MiddleChinesePronunciation();
    await new Promise(resolve => setTimeout(resolve, 500)); // 等待初始化
    
    const status = pronunciation.getStatus();
    console.log('🔍 发音引擎状态:', status);
    
    if (!status.supported) {
        console.warn('⚠️ 浏览器不支持Web Audio API');
        return;
    }
    
    // 测试单字发音
    console.log('\n🔤 测试单字发音:');
    const testChars = ['人', '生', '如', '梦', '江', '月'];
    
    for (let i = 0; i < testChars.length; i++) {
        const char = testChars[i];
        const data = middleChineseData[char];
        
        if (data) {
            console.log(`🔊 ${char} [${data.ipa}] - ${data.tone}`);
            
            setTimeout(() => {
                pronunciation.pronounceCharacter(char);
            }, i * 1000);
        }
    }
    
    // 测试短语发音
    setTimeout(() => {
        console.log('\n🎵 测试短语发音: "人生如梦"');
        pronunciation.pronounceText('人生如梦', 1.2);
    }, 7000);
    
    // 测试诗句发音
    setTimeout(() => {
        console.log('\n📜 测试诗句发音: "大江东去"');
        pronunciation.pronounceText('大江东去', 0.8);
    }, 12000);
    
    console.log('\n✅ 测试序列已启动，请注意听音频输出');
    console.log('💡 提示: 如果没有声音，请检查音频权限和音量设置');
}

// 手动测试函数
window.testMCPronunciation = function(text = '人生如梦') {
    if (typeof MiddleChinesePronunciation !== 'undefined') {
        const pronunciation = new MiddleChinesePronunciation();
        setTimeout(() => {
            pronunciation.pronounceText(text);
        }, 100);
    } else {
        console.error('中古音发音系统未加载');
    }
};

// 提供测试命令
console.log('🛠️ 手动测试命令:');
console.log('testMCPronunciation("人生如梦")  - 测试短语发音');
console.log('testMCPronunciation("君不见黄河之水天上来")  - 测试诗句发音');