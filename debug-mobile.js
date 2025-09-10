// 移动设备中古音调试工具
// 在浏览器控制台中查看详细信息

window.debugMCSystem = function() {
    console.log('🔍 中古汉语发音系统调试信息');
    console.log('================================');
    
    // 1. 浏览器环境检测
    console.log('📱 设备信息:');
    console.log('User Agent:', navigator.userAgent);
    console.log('Touch 支持:', 'ontouchstart' in window);
    console.log('Max Touch Points:', navigator.maxTouchPoints);
    
    // 2. Web Audio API支持检测
    console.log('\n🎵 Web Audio API支持:');
    console.log('AudioContext:', !!window.AudioContext);
    console.log('webkitAudioContext:', !!window.webkitAudioContext);
    console.log('mozAudioContext:', !!window.mozAudioContext);
    
    // 3. 检查脚本加载状态
    console.log('\n📜 脚本加载状态:');
    console.log('middleChineseData:', typeof middleChineseData);
    console.log('MiddleChinesePronunciation:', typeof MiddleChinesePronunciation);
    console.log('MiddleChineseReader:', typeof MiddleChineseReader);
    
    // 4. 检查DOM元素
    console.log('\n🔧 DOM元素状态:');
    console.log('mcModeBtn:', !!document.getElementById('mcModeBtn'));
    console.log('readBtn:', !!document.getElementById('readBtn'));
    console.log('textInput:', !!document.getElementById('textInput'));
    
    // 5. 检查实例状态
    if (typeof reader !== 'undefined' && reader.pronunciation) {
        console.log('\n🎛️ 发音引擎状态:');
        const status = reader.pronunciation.getStatus();
        console.log('支持状态:', status);
        console.log('移动设备:', reader.pronunciation.isMobileDevice());
        console.log('AudioContext:', !!reader.pronunciation.audioContext);
    } else {
        console.log('\n❌ 发音引擎实例未找到');
    }
    
    // 6. 提供测试函数
    console.log('\n🧪 测试命令:');
    console.log('testMobileActivation() - 测试移动设备激活');
    console.log('checkAudioPermissions() - 检查音频权限');
};

// 测试移动设备激活
window.testMobileActivation = async function() {
    try {
        console.log('🧪 开始测试移动设备激活...');
        
        const AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
        if (!AudioContext) {
            console.error('❌ 浏览器不支持AudioContext');
            return;
        }
        
        const audioContext = new AudioContext();
        console.log('✅ AudioContext创建成功');
        console.log('状态:', audioContext.state);
        
        if (audioContext.state === 'suspended') {
            console.log('⏳ 尝试恢复AudioContext...');
            await audioContext.resume();
            console.log('新状态:', audioContext.state);
        }
        
        // 测试简单音频生成
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
        
        console.log('🔊 测试音频已播放（如果听到声音说明激活成功）');
        
    } catch (error) {
        console.error('❌ 移动设备激活测试失败:', error);
    }
};

// 检查音频权限
window.checkAudioPermissions = async function() {
    try {
        console.log('🔐 检查音频权限...');
        
        if (navigator.permissions) {
            const result = await navigator.permissions.query({name: 'microphone'});
            console.log('麦克风权限:', result.state);
        } else {
            console.log('⚠️ 浏览器不支持权限API');
        }
        
        // 检查媒体设备
        if (navigator.mediaDevices) {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const audioOutputs = devices.filter(device => device.kind === 'audiooutput');
            console.log('音频输出设备数量:', audioOutputs.length);
        } else {
            console.log('⚠️ 浏览器不支持媒体设备API');
        }
        
    } catch (error) {
        console.error('❌ 权限检查失败:', error);
    }
};

// 页面加载完成后自动显示调试信息
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log('🔧 移动设备调试工具已加载');
        console.log('输入 debugMCSystem() 查看详细调试信息');
    }, 1000);
});