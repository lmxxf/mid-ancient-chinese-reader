// 中古汉语朗读器核心逻辑
class MiddleChineseReader {
    constructor() {
        this.init();
        this.synthesis = window.speechSynthesis;
        this.isReading = false;
        this.pronunciation = null;
        this.useMCPronunciation = false; // 是否使用中古音发音
    }

    init() {
        this.bindEvents();
        this.setupSpeechSynthesis();
        this.initMiddleChinesePronunciation();
    }

    bindEvents() {
        // 获取DOM元素
        this.textInput = document.getElementById('textInput');
        this.readBtn = document.getElementById('readBtn');
        this.annotateBtn = document.getElementById('annotateBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.annotationOutput = document.getElementById('annotationOutput');

        // 绑定事件
        this.readBtn.addEventListener('click', () => this.readText());
        this.annotateBtn.addEventListener('click', () => this.showAnnotation());
        this.clearBtn.addEventListener('click', () => this.clearText());
        
        // 中古音发音模式切换
        const mcModeBtn = document.getElementById('mcModeBtn');
        if (mcModeBtn) {
            mcModeBtn.addEventListener('click', () => this.toggleMCMode());
        }

        // 示例按钮事件
        const demoBtns = document.querySelectorAll('.demo-btn');
        demoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const text = e.target.getAttribute('data-text');
                this.loadDemoText(text);
            });
        });
    }

    setupSpeechSynthesis() {
        // 检查浏览器是否支持语音合成
        if (!('speechSynthesis' in window)) {
            console.warn('浏览器不支持语音合成功能');
            this.readBtn.disabled = true;
            this.readBtn.textContent = '❌ 浏览器不支持';
        }
    }

    // 初始化中古音发音系统
    async initMiddleChinesePronunciation() {
        try {
            if (typeof MiddleChinesePronunciation !== 'undefined') {
                this.pronunciation = new MiddleChinesePronunciation();
                console.log('🎵 中古音发音系统已初始化');
                
                // 添加切换按钮到界面
                this.addMCModeToggle();
            }
        } catch (error) {
            console.warn('中古音发音系统初始化失败:', error);
        }
    }

    // 添加中古音模式切换按钮
    addMCModeToggle() {
        const buttonGroup = document.querySelector('.button-group');
        if (buttonGroup && !document.getElementById('mcModeBtn')) {
            const mcBtn = document.createElement('button');
            mcBtn.id = 'mcModeBtn';
            mcBtn.className = 'secondary-btn';
            mcBtn.innerHTML = '🎵 现代音';
            mcBtn.title = '点击切换到中古音发音模式';
            
            mcBtn.addEventListener('click', () => this.toggleMCMode());
            buttonGroup.appendChild(mcBtn);
        }
    }

    // 切换中古音发音模式
    toggleMCMode() {
        this.useMCPronunciation = !this.useMCPronunciation;
        const mcBtn = document.getElementById('mcModeBtn');
        
        if (this.useMCPronunciation) {
            mcBtn.innerHTML = '🏺 中古音';
            mcBtn.title = '当前使用中古音发音，点击切换到现代音';
            console.log('🏺 已切换到中古音发音模式');
        } else {
            mcBtn.innerHTML = '🎵 现代音';
            mcBtn.title = '当前使用现代音发音，点击切换到中古音';
            console.log('🎵 已切换到现代音发音模式');
        }
    }

    // 文本处理：提取汉字
    extractChineseCharacters(text) {
        // 匹配中文字符的正则表达式
        const chineseRegex = /[\u4e00-\u9fff]/g;
        return text.match(chineseRegex) || [];
    }

    // 生成中古音标注
    generateAnnotation(text) {
        const characters = this.extractChineseCharacters(text);
        let annotationHTML = '';
        let currentLine = '';
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            if (/[\u4e00-\u9fff]/.test(char)) {
                // 汉字处理
                const data = middleChineseData[char];
                if (data) {
                    currentLine += `<span class="character-annotation">
                        <span class="character">${char}</span>
                        <span class="ipa">[${data.ipa}]</span>
                        <span class="pinyin">${data.pinyin}</span>
                        <span class="tone">${data.tone}</span>
                    </span>`;
                } else {
                    currentLine += `<span class="character-annotation unknown">
                        <span class="character">${char}</span>
                        <span class="ipa">[未收录]</span>
                        <span class="pinyin">-</span>
                        <span class="tone">-</span>
                    </span>`;
                }
            } else if (char === '\n') {
                // 换行处理
                if (currentLine.trim()) {
                    annotationHTML += `<div class="annotation-line">${currentLine}</div>\n`;
                    currentLine = '';
                }
            } else if (/[，。、；：！？]/.test(char)) {
                // 标点符号处理
                currentLine += `<span class="punctuation">${char}</span>`;
            } else {
                // 其他字符（空格等）
                currentLine += char;
            }
        }
        
        // 添加最后一行
        if (currentLine.trim()) {
            annotationHTML += `<div class="annotation-line">${currentLine}</div>`;
        }
        
        return annotationHTML;
    }

    // 显示标注
    showAnnotation() {
        const text = this.textInput.value.trim();
        if (!text) {
            this.annotationOutput.innerHTML = '<p class="placeholder">请先输入文本</p>';
            return;
        }

        const annotation = this.generateAnnotation(text);
        this.annotationOutput.innerHTML = annotation;
        
        // 添加统计信息
        const characters = this.extractChineseCharacters(text);
        const knownCount = characters.filter(char => middleChineseData[char]).length;
        const unknownCount = characters.length - knownCount;
        
        const statsHTML = `
            <div class="annotation-stats">
                <p>📊 标注统计：共${characters.length}个汉字，已标注${knownCount}个，未收录${unknownCount}个</p>
                <p>💡 覆盖率：${(knownCount / characters.length * 100).toFixed(1)}%</p>
            </div>
        `;
        
        this.annotationOutput.innerHTML = annotation + statsHTML;
    }

    // 朗读文本（支持现代音和中古音两种模式）
    readText() {
        if (this.isReading) {
            this.stopReading();
            return;
        }

        const text = this.textInput.value.trim();
        if (!text) {
            alert('请先输入要朗读的文本');
            return;
        }

        this.isReading = true;
        this.readBtn.textContent = '⏹️ 停止朗读';

        if (this.useMCPronunciation && this.pronunciation) {
            // 使用中古音发音
            this.readWithMiddleChinese(text);
        } else {
            // 使用现代音发音
            this.readWithModernChinese(text);
        }
    }

    // 停止朗读
    stopReading() {
        this.synthesis.cancel();
        this.isReading = false;
        this.readBtn.textContent = '🔊 朗读全文';
    }

    // 中古音朗读
    async readWithMiddleChinese(text) {
        try {
            console.log('🏺 使用中古音朗读:', text);
            await this.pronunciation.pronounceText(text);
            
            // 朗读完成
            this.isReading = false;
            this.readBtn.textContent = '🔊 朗读全文';
        } catch (error) {
            console.error('中古音朗读错误:', error);
            this.isReading = false;
            this.readBtn.textContent = '🔊 朗读全文';
            alert('中古音朗读失败，请尝试现代音模式');
        }
    }

    // 现代音朗读（原有逻辑）
    readWithModernChinese(text) {
        // 创建语音合成实例
        const utterance = new SpeechSynthesisUtterance();
        
        // 处理文本：尝试转换为更接近中古音的现代读音
        const processedText = this.processTextForReading(text);
        utterance.text = processedText;
        
        // 设置语音参数
        utterance.lang = 'zh-CN';
        utterance.rate = 0.7; // 放慢速度以模拟古典朗诵
        utterance.pitch = 0.8; // 略低的音调
        utterance.volume = 1.0;

        // 事件监听
        utterance.onstart = () => {
            console.log('🎵 使用现代音朗读:', text);
        };

        utterance.onend = () => {
            this.isReading = false;
            this.readBtn.textContent = '🔊 朗读全文';
        };

        utterance.onerror = (e) => {
            console.error('朗读错误:', e);
            this.isReading = false;
            this.readBtn.textContent = '🔊 朗读全文';
        };

        // 开始朗读
        this.synthesis.speak(utterance);
    }

    // 文本预处理：尝试转换为更接近中古音的现代读音
    processTextForReading(text) {
        let processedText = text;
        
        // 简单的读音替换，使朗读更接近古音特征
        const replacements = {
            '尊': '樽', // 使用更古雅的读音
            '还': '环', // huan而非hai
            '发': '髮', // fa而非fa
        };
        
        for (const [old, replacement] of Object.entries(replacements)) {
            processedText = processedText.replaceAll(old, replacement);
        }
        
        return processedText;
    }

    // 清空文本
    clearText() {
        this.textInput.value = '';
        this.annotationOutput.innerHTML = '<p class="placeholder">点击"显示注音"查看中古汉语拟音标注</p>';
        
        // 如果正在朗读，停止朗读
        if (this.isReading) {
            this.synthesis.cancel();
            this.isReading = false;
            this.readBtn.textContent = '🔊 朗读全文';
        }
    }

    // 加载示例文本
    loadDemoText(text) {
        this.textInput.value = text;
        this.showAnnotation(); // 自动显示标注
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    const reader = new MiddleChineseReader();
    console.log('中古汉语朗读器已初始化');
    
    // 检查数据是否加载成功
    if (typeof middleChineseData !== 'undefined') {
        const dataSize = Object.keys(middleChineseData).length;
        console.log(`已加载${dataSize}个汉字的中古音数据`);
    } else {
        console.error('中古音数据加载失败');
    }
});

// 工具函数：获取字符的中古音信息
function getMiddleChineseInfo(character) {
    return middleChineseData[character] || null;
}

// 工具函数：批量获取中古音信息
function getTextMiddleChineseInfo(text) {
    const characters = text.match(/[\u4e00-\u9fff]/g) || [];
    const result = {};
    
    characters.forEach(char => {
        if (middleChineseData[char]) {
            result[char] = middleChineseData[char];
        }
    });
    
    return result;
}