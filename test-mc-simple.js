// 简单的中古音测试工具
// 在浏览器控制台中使用

window.testMCDirectly = function() {
    console.log('🧪 直接测试中古音系统');
    
    // 检查类是否存在
    if (typeof MiddleChinesePronunciation === 'undefined') {
        console.error('❌ MiddleChinesePronunciation 类未加载');
        return;
    }
    
    // 创建新实例
    const mc = new MiddleChinesePronunciation();
    
    setTimeout(async () => {
        console.log('📊 状态:', mc.getStatus());
        
        // 强制创建AudioContext
        try {
            await mc.createAudioContext();
            console.log('✅ AudioContext 创建成功');
            
            // 测试简单发音
            console.log('🔊 测试发音: 人');
            await mc.pronounceCharacter('人');
            
            setTimeout(() => {
                console.log('🔊 测试发音: 生');
                mc.pronounceCharacter('生');
            }, 1000);
            
            setTimeout(() => {
                console.log('🔊 测试发音: 如');
                mc.pronounceCharacter('如');
            }, 2000);
            
            setTimeout(() => {
                console.log('🔊 测试发音: 梦');
                mc.pronounceCharacter('梦');
            }, 3000);
            
        } catch (error) {
            console.error('❌ 测试失败:', error);
        }
    }, 500);
};

window.testMCIntegration = function() {
    console.log('🧪 测试集成的中古音系统');
    
    if (typeof reader === 'undefined' || !reader.pronunciation) {
        console.error('❌ 集成的中古音系统未找到');
        return;
    }
    
    console.log('📊 集成状态:', {
        useMCPronunciation: reader.useMCPronunciation,
        pronunciation: !!reader.pronunciation,
        audioContext: reader.pronunciation ? !!reader.pronunciation.audioContext : false
    });
    
    // 强制切换到中古音模式
    reader.useMCPronunciation = true;
    console.log('🔄 强制切换到中古音模式');
    
    // 测试朗读
    reader.textInput.value = '人生如梦';
    console.log('📝 设置测试文本: 人生如梦');
    
    // 模拟点击朗读按钮
    setTimeout(() => {
        console.log('🔊 开始测试朗读...');
        reader.readText();
    }, 1000);
};

// 页面加载后提供测试命令
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log('🔧 中古音测试工具已加载');
        console.log('命令:');
        console.log('testMCDirectly() - 直接测试中古音类');
        console.log('testMCIntegration() - 测试集成的中古音系统');
    }, 2000);
});