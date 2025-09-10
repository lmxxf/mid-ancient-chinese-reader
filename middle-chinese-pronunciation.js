// 中古汉语发音引擎
// 基于Web Audio API的音频合成技术

class MiddleChinesePronunciation {
    constructor() {
        this.audioContext = null;
        this.isSupported = false;
        this.init();
    }

    async init() {
        try {
            // 检查浏览器支持
            window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
            
            if (window.AudioContext) {
                // 延迟创建AudioContext，避免移动设备限制
                this.isSupported = true;
                console.log('🎵 中古音发音引擎准备就绪');
                
                // 在移动设备上，AudioContext需要用户交互才能创建
                if (this.isMobileDevice()) {
                    console.log('📱 检测到移动设备，将在用户交互时激活音频');
                } else {
                    await this.createAudioContext();
                }
            } else {
                console.warn('⚠️ 浏览器不支持Web Audio API');
            }
        } catch (error) {
            console.warn('⚠️ 音频上下文初始化失败:', error);
        }
    }

    // 检测是否为移动设备
    isMobileDevice() {
        return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               ('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0);
    }

    // 创建音频上下文
    async createAudioContext() {
        try {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                console.log('🎵 AudioContext创建成功');
            }
            
            // 确保音频上下文处于运行状态
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
                console.log('🔊 AudioContext已激活');
            }
            
            return true;
        } catch (error) {
            console.error('❌ AudioContext创建失败:', error);
            this.isSupported = false;
            return false;
        }
    }

    // IPA音标到音频参数的映射
    getAudioParams(ipa) {
        // 基础音频参数映射表
        const ipaMapping = {
            // 声母映射 - 优化为更接近人声的参数
            'p': { frequency: 150, type: 'triangle', duration: 0.06, volume: 0.15 },
            'ph': { frequency: 180, type: 'triangle', duration: 0.08, volume: 0.15 },
            'b': { frequency: 120, type: 'sine', duration: 0.06, volume: 0.2 },
            't': { frequency: 250, type: 'triangle', duration: 0.05, volume: 0.15 },
            'th': { frequency: 280, type: 'triangle', duration: 0.06, volume: 0.15 },
            'd': { frequency: 200, type: 'sine', duration: 0.05, volume: 0.2 },
            'k': { frequency: 350, type: 'triangle', duration: 0.06, volume: 0.15 },
            'kh': { frequency: 380, type: 'triangle', duration: 0.08, volume: 0.15 },
            'g': { frequency: 300, type: 'sine', duration: 0.06, volume: 0.2 },
            'm': { frequency: 200, type: 'sine', duration: 0.1, volume: 0.25 },
            'n': { frequency: 250, type: 'sine', duration: 0.1, volume: 0.25 },
            'ng': { frequency: 150, type: 'sine', duration: 0.12, volume: 0.25 },
            'l': { frequency: 220, type: 'sine', duration: 0.08, volume: 0.2 },
            'r': { frequency: 240, type: 'sine', duration: 0.08, volume: 0.2 },
            's': { frequency: 500, type: 'triangle', duration: 0.1, volume: 0.1 },
            'sh': { frequency: 450, type: 'triangle', duration: 0.1, volume: 0.1 },
            'z': { frequency: 480, type: 'sine', duration: 0.1, volume: 0.15 },
            'zh': { frequency: 420, type: 'sine', duration: 0.1, volume: 0.15 },
            'ts': { frequency: 550, type: 'triangle', duration: 0.08, volume: 0.1 },
            'tsh': { frequency: 580, type: 'triangle', duration: 0.08, volume: 0.1 },
            'dz': { frequency: 520, type: 'sine', duration: 0.08, volume: 0.15 },
            'j': { frequency: 300, type: 'sine', duration: 0.06, volume: 0.2 },
            'h': { frequency: 250, type: 'triangle', duration: 0.06, volume: 0.1 },

            // 韵母映射 - 更接近人声共振频率
            'a': { frequency: 280, type: 'sine', duration: 0.2, volume: 0.3 },
            'e': { frequency: 220, type: 'sine', duration: 0.2, volume: 0.3 },
            'i': { frequency: 350, type: 'sine', duration: 0.18, volume: 0.25 },
            'o': { frequency: 180, type: 'sine', duration: 0.25, volume: 0.3 },
            'u': { frequency: 140, type: 'sine', duration: 0.25, volume: 0.3 },
            'y': { frequency: 260, type: 'sine', duration: 0.18, volume: 0.25 },
            'ae': { frequency: 300, type: 'sine', duration: 0.2, volume: 0.3 },
            'aw': { frequency: 200, type: 'sine', duration: 0.28, volume: 0.3 },
            'oj': { frequency: 190, type: 'sine', duration: 0.25, volume: 0.3 },
            'aj': { frequency: 320, type: 'sine', duration: 0.25, volume: 0.3 },
            'ew': { frequency: 240, type: 'sine', duration: 0.25, volume: 0.3 },

            // 声调标记
            'H': { pitchShift: 1.2 }, // 去声
            'X': { pitchShift: 0.8 }, // 上声
            // 平声和入声为基础音调
        };

        return ipaMapping[ipa] || { frequency: 440, type: 'sine', duration: 0.2 };
    }

    // 解析IPA音标
    parseIPA(ipa) {
        // 简化的IPA解析
        const segments = [];
        let i = 0;
        
        while (i < ipa.length) {
            // 检查双字符组合
            if (i < ipa.length - 1) {
                const twoChar = ipa.substr(i, 2);
                if (['ph', 'th', 'kh', 'sh', 'ts', 'zh', 'dz', 'ng', 'tsh'].includes(twoChar)) {
                    segments.push(twoChar);
                    i += 2;
                    continue;
                }
            }
            
            // 单字符
            segments.push(ipa[i]);
            i++;
        }
        
        return segments;
    }

    // 合成单个音节
    async synthesizeSound(frequency, type = 'sine', duration = 0.2, volume = 0.5, pitchShift = 1) {
        if (!this.isSupported) return null;

        try {
            // 确保音频上下文已创建并激活
            if (!this.audioContext) {
                const success = await this.createAudioContext();
                if (!success) return null;
            }
            
            // 确保音频上下文处于运行状态
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            // 设置波形和频率
            oscillator.type = type;
            oscillator.frequency.setValueAtTime(frequency * pitchShift, this.audioContext.currentTime);
            
            // 更柔和的音量包络 - 模拟人声的自然起伏
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(volume * 0.7, this.audioContext.currentTime + 0.02); // 缓慢起音
            gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + duration * 0.3); // 到达峰值
            gainNode.gain.exponentialRampToValueAtTime(0.005, this.audioContext.currentTime + duration); // 缓慢衰减
            
            // 连接音频节点
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // 播放
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
            
            return new Promise(resolve => {
                oscillator.onended = resolve;
            });
        } catch (error) {
            console.error('音频合成错误:', error);
            return null;
        }
    }

    // 发音单个汉字
    async pronounceCharacter(character) {
        const data = middleChineseData[character];
        if (!data) {
            console.warn(`未找到字符 "${character}" 的中古音数据`);
            return;
        }

        await this.pronounceIPA(data.ipa);
    }

    // 根据IPA发音
    async pronounceIPA(ipa) {
        if (!this.isSupported) {
            console.warn('浏览器不支持Web Audio API');
            return;
        }

        try {
            const segments = this.parseIPA(ipa);
            console.log(`🎯 解析IPA [${ipa}] 为音段:`, segments);
            
            for (let i = 0; i < segments.length; i++) {
                const segment = segments[i];
                const params = this.getAudioParams(segment);
                
                console.log(`🔊 播放音段 ${i + 1}/${segments.length}: ${segment} (${params.frequency}Hz)`);
                
                try {
                    await this.synthesizeSound(
                        params.frequency,
                        params.type,
                        params.duration,
                        params.volume || 0.3,
                        params.pitchShift || 1
                    );
                    
                    // 优化音段间连接 - 根据音段类型调整停顿
                    if (i < segments.length - 1) {
                        const nextSegment = segments[i + 1];
                        // 声母到韵母：几乎无停顿
                        // 韵母到声调：无停顿  
                        // 其他情况：很短停顿
                        const isVowelNext = ['a','e','i','o','u','y','ae','aw','oj','aj','ew'].includes(nextSegment);
                        const isToneNext = ['H','X'].includes(nextSegment);
                        const pauseTime = (isVowelNext || isToneNext) ? 10 : 25;
                        await new Promise(resolve => setTimeout(resolve, pauseTime));
                    }
                } catch (error) {
                    console.error(`❌ 音段 ${segment} 播放失败:`, error);
                }
            }
            
            console.log(`✅ IPA [${ipa}] 发音完成`);
        } catch (error) {
            console.error('IPA发音错误:', error);
        }
    }

    // 发音文本序列
    async pronounceText(text, speed = 1) {
        const characters = text.match(/[\u4e00-\u9fff]/g) || [];
        console.log(`🎵 准备发音 ${characters.length} 个汉字:`, characters.join(''));
        
        for (let i = 0; i < characters.length; i++) {
            const char = characters[i];
            console.log(`🔊 正在发音第 ${i + 1}/${characters.length} 个字: ${char}`);
            
            try {
                await this.pronounceCharacter(char);
                
                // 优化字间停顿 - 更自然的语调节奏
                if (i < characters.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 400 / speed));
                }
            } catch (error) {
                console.error(`❌ 发音失败: ${char}`, error);
                // 即使单个字失败也继续发音其他字
            }
        }
        
        console.log('✅ 文本发音完成');
    }

    // 获取发音能力状态
    getStatus() {
        return {
            supported: this.isSupported,
            audioContext: !!this.audioContext,
            state: this.audioContext ? this.audioContext.state : 'unavailable'
        };
    }
}

// 工具函数：创建中古音发音演示
function createPronunciationDemo() {
    const pronunciation = new MiddleChinesePronunciation();
    
    // 演示常用字发音
    const demoChars = ['人', '生', '如', '梦', '江', '月'];
    
    console.log('🎵 中古音发音演示');
    demoChars.forEach((char, index) => {
        setTimeout(() => {
            console.log(`🔊 正在发音: ${char}`);
            pronunciation.pronounceCharacter(char);
        }, index * 1500);
    });
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MiddleChinesePronunciation, createPronunciationDemo };
}