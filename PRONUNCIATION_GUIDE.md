# 🎵 中古汉语发音系统技术指南

## 📋 概述

本项目实现了基于Web Audio API的中古汉语发音系统，通过音频合成技术重现约1000年前的汉语读音。

## 🔧 技术方案

### 1. Web Audio API音频合成
- **核心技术**: 使用振荡器(Oscillator)生成基础音频波形
- **音标映射**: 将IPA音标转换为音频参数
- **波形类型**: sine, square, sawtooth, triangle
- **参数控制**: 频率、持续时间、音量、音调

### 2. IPA音标解析
```javascript
// 示例: 'nrjin' (人) -> ['n', 'r', 'j', 'i', 'n']
const segments = parseIPA('nrjin');
```

### 3. 音频参数映射
```javascript
const ipaMapping = {
    'n': { frequency: 400, type: 'sine', duration: 0.15 },
    'r': { frequency: 380, type: 'triangle', duration: 0.12 },
    'j': { frequency: 500, type: 'triangle', duration: 0.1 },
    'i': { frequency: 550, type: 'sine', duration: 0.25 }
};
```

## 🎯 实现特点

### ✅ 已实现功能
- **单字发音**: 根据中古音数据发音单个汉字
- **连续朗读**: 支持诗句和文本的连续发音
- **音调控制**: 平声、上声、去声、入声的音调差异
- **速度调节**: 可调节朗读速度
- **模式切换**: 现代音/中古音发音模式切换

### 🔄 技术流程
1. **输入文本** → 提取汉字
2. **查询数据库** → 获取IPA音标
3. **解析音标** → 分解为音素段
4. **音频合成** → 生成对应音频
5. **按序播放** → 形成连续发音

## 📊 音频参数设计

### 声母频率范围
```
爆破音: 200-650 Hz (p, t, k系列)
鼻音:   200-400 Hz (m, n, ng)
边音:   350-380 Hz (l, r)
擦音:   700-950 Hz (s, sh, z系列)
```

### 韵母频率范围
```
前元音: 350-550 Hz (i, e系列)
后元音: 180-280 Hz (u, o系列)  
央元音: 330-440 Hz (a, ae系列)
复合韵: 250-400 Hz (复韵母)
```

### 声调实现
```javascript
平声: 基础频率 × 1.0
上声: 基础频率 × 0.8 (降调)
去声: 基础频率 × 1.2 (升调)  
入声: 缩短持续时间到50%
```

## 🚀 使用方法

### 基础用法
```javascript
// 初始化发音引擎
const pronunciation = new MiddleChinesePronunciation();

// 发音单个字符
await pronunciation.pronounceCharacter('人');

// 发音文本
await pronunciation.pronounceText('人生如梦');

// 根据IPA发音
await pronunciation.pronounceIPA('nrjin');
```

### 高级用法
```javascript
// 调节速度
await pronunciation.pronounceText('大江东去', 1.5); // 1.5倍速

// 获取状态
const status = pronunciation.getStatus();
console.log('支持状态:', status.supported);
```

## 🔍 浏览器兼容性

### ✅ 完全支持
- Chrome 66+
- Firefox 60+
- Safari 14+
- Edge 79+

### ⚠️ 部分支持
- 较老版本的移动浏览器
- 需要用户手势激活音频

### ❌ 不支持
- IE浏览器
- 禁用JavaScript的环境

## 🎛️ 音频质量调优

### 1. 频率优化
- 基于语音学研究调整频率映射
- 参考现代方言保存的古音特征
- 考虑听觉感知的舒适度

### 2. 时长控制
```javascript
声母: 0.08-0.15秒
韵母: 0.25-0.35秒
字间停顿: 0.3-0.8秒
```

### 3. 音量包络
```javascript
// ADSR包络控制
Attack:  0.01秒 快速起音
Decay:   0.05秒 衰减到持续音量
Sustain: 70%    持续音量比例
Release: 0.1秒  释放时间
```

## 🔬 技术限制

### 当前限制
1. **合成音质**: 电子合成音，不如真人录音自然
2. **音素精度**: 简化的IPA解析，可能不够精确
3. **韵律模拟**: 缺少真实语调变化
4. **协同发音**: 音素间过渡不够平滑

### 改进方向
1. **引入神经网络**: 使用深度学习改善音质
2. **增加音频样本**: 结合真人录音片段
3. **精细化参数**: 更准确的音素到音频映射
4. **韵律建模**: 添加句级和词级韵律

## 📚 学术依据

### 音韵学基础
- **《切韵》**: 隋唐时期音韵著作
- **《广韵》**: 宋代音韵集大成
- **白一平系统**: 现代中古音拟音标准

### 技术参考
- Web Audio API规范
- 语音合成技术原理
- 数字信号处理基础

## 🛠️ 开发工具

### 调试命令
```javascript
// 浏览器控制台
testMCPronunciation('人生如梦');  // 快速测试
pronunciation.getStatus();        // 检查状态
```

### 性能监控
```javascript
// 音频延迟监控
console.time('pronunciation');
await pronunciation.pronounceCharacter('人');
console.timeEnd('pronunciation');
```

## 🤝 贡献指南

### 改进音频参数
1. 调试`middle-chinese-pronunciation.js`中的`ipaMapping`
2. 测试发音效果
3. 提交参数优化PR

### 扩展功能
1. 添加新的音素支持
2. 改进音频算法
3. 增加可视化效果

---

*让千年古音重现，用技术传承文化* 🏮