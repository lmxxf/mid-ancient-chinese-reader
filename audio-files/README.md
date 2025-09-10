# 中古汉语音频文件目录

## 📁 文件结构

```
audio-files/
├── syllables/          # 音节音频文件
│   ├── consonants/     # 声母音频
│   ├── vowels/         # 韵母音频
│   └── tones/          # 声调音频
├── characters/         # 单字音频文件
│   ├── common/         # 常用字
│   └── poetry/         # 诗词专用字
└── samples/           # 示例音频
    ├── demo/          # 演示文件
    └── reference/     # 参考发音
```

## 🎵 音频格式

- **格式**: MP3 / OGG (兼容性)
- **采样率**: 44.1kHz
- **比特率**: 128kbps
- **时长**: 0.5-1.5秒/音节

## 📊 音频映射

### 声母音频文件
```javascript
const consonantFiles = {
    'p': 'consonants/p.mp3',
    'ph': 'consonants/ph.mp3',
    'b': 'consonants/b.mp3',
    't': 'consonants/t.mp3',
    'th': 'consonants/th.mp3',
    'd': 'consonants/d.mp3',
    'k': 'consonants/k.mp3',
    'kh': 'consonants/kh.mp3',
    'g': 'consonants/g.mp3',
    'm': 'consonants/m.mp3',
    'n': 'consonants/n.mp3',
    'ng': 'consonants/ng.mp3',
    'l': 'consonants/l.mp3',
    'r': 'consonants/r.mp3',
    // ... 更多声母
};
```

### 韵母音频文件
```javascript
const vowelFiles = {
    'a': 'vowels/a.mp3',
    'e': 'vowels/e.mp3',
    'i': 'vowels/i.mp3',
    'o': 'vowels/o.mp3',
    'u': 'vowels/u.mp3',
    'y': 'vowels/y.mp3',
    'ae': 'vowels/ae.mp3',
    'aw': 'vowels/aw.mp3',
    // ... 更多韵母
};
```

## 🔊 音频生成方案

### 方案1: 学者录音
- 找中古汉语研究专家录制标准发音
- 优点: 学术权威性高
- 缺点: 成本高，获取困难

### 方案2: TTS合成
- 使用Espeak-ng等开源TTS引擎
- 基于IPA音标生成语音
- 优点: 可批量生成，成本低
- 缺点: 合成感较强

### 方案3: 混合方案
- 关键音节人工录制
- 其他音节使用合成
- 平衡质量和成本

## 📝 使用方法

```javascript
// 加载音频文件
const audioLoader = new AudioFileLoader();
await audioLoader.loadSyllable('nrjin'); // 加载"人"的发音

// 播放组合音频
await audioLoader.playCharacter('人');
```

## 🎯 实现优先级

1. **阶段1**: 常用字100个
2. **阶段2**: 《念奴娇》《将进酒》全覆盖
3. **阶段3**: 扩展到500个常用字
4. **阶段4**: 完整音节体系

## 📞 贡献指南

欢迎语言学专家和发音爱好者贡献音频文件：

1. 录音标准: 清晰、无噪音
2. 文件格式: MP3或OGG
3. 命名规范: 按IPA音标命名
4. 提交方式: Pull Request

---

*中古汉语发音重建项目 - 让古音重现*