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
            // 声母映射
            'p': { frequency: 200, type: 'square', duration: 0.1 },
            'ph': { frequency: 250, type: 'square', duration: 0.12 },
            'b': { frequency: 180, type: 'sawtooth', duration: 0.1 },
            't': { frequency: 400, type: 'square', duration: 0.08 },
            'th': { frequency: 450, type: 'square', duration: 0.1 },
            'd': { frequency: 350, type: 'sawtooth', duration: 0.08 },
            'k': { frequency: 600, type: 'square', duration: 0.1 },
            'kh': { frequency: 650, type: 'square', duration: 0.12 },
            'g': { frequency: 550, type: 'sawtooth', duration: 0.1 },
            'm': { frequency: 300, type: 'sine', duration: 0.15 },
            'n': { frequency: 400, type: 'sine', duration: 0.15 },
            'ng': { frequency: 200, type: 'sine', duration: 0.18 },
            'l': { frequency: 350, type: 'triangle', duration: 0.12 },
            'r': { frequency: 380, type: 'triangle', duration: 0.12 },
            's': { frequency: 800, type: 'square', duration: 0.15 },
            'sh': { frequency: 700, type: 'square', duration: 0.15 },
            'z': { frequency: 750, type: 'sawtooth', duration: 0.15 },
            'zh': { frequency: 650, type: 'sawtooth', duration: 0.15 },
            'ts': { frequency: 900, type: 'square', duration: 0.12 },
            'tsh': { frequency: 950, type: 'square', duration: 0.12 },
            'dz': { frequency: 850, type: 'sawtooth', duration: 0.12 },
            'j': { frequency: 500, type: 'triangle', duration: 0.1 },
            'h': { frequency: 400, type: 'square', duration: 0.1, volume: 0.3 },

            // 韵母映射
            'a': { frequency: 440, type: 'sine', duration: 0.3 },
            'e': { frequency: 330, type: 'sine', duration: 0.3 },
            'i': { frequency: 550, type: 'sine', duration: 0.25 },
            'o': { frequency: 220, type: 'sine', duration: 0.35 },
            'u': { frequency: 180, type: 'sine', duration: 0.35 },
            'y': { frequency: 350, type: 'sine', duration: 0.25 },
            'ae': { frequency: 380, type: 'sine', duration: 0.3 },
            'aw': { frequency: 280, type: 'sine', duration: 0.4 },
            'oj': { frequency: 250, type: 'sine', duration: 0.35 },
            'aj': { frequency: 400, type: 'sine', duration: 0.35 },
            'ew': { frequency: 300, type: 'sine', duration: 0.35 },

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
            
            // 音量包络
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
            
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
            let delay = 0;

            for (const segment of segments) {
                const params = this.getAudioParams(segment);
                
                setTimeout(async () => {
                    await this.synthesizeSound(
                        params.frequency,
                        params.type,
                        params.duration,
                        params.volume || 0.3,
                        params.pitchShift || 1
                    );
                }, delay * 1000);

                delay += params.duration || 0.2;
            }
        } catch (error) {
            console.error('IPA发音错误:', error);
        }
    }

    // 发音文本序列
    async pronounceText(text, speed = 1) {
        const characters = text.match(/[\u4e00-\u9fff]/g) || [];
        let totalDelay = 0;

        for (const char of characters) {
            setTimeout(async () => {
                await this.pronounceCharacter(char);
            }, totalDelay);

            totalDelay += (800 / speed); // 字间间隔
        }
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