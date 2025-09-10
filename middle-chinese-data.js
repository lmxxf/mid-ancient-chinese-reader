// 中古汉语字音映射数据
// 基于白一平-沙加尔（Baxter-Sagart）中古汉语拟音系统
// 主要收录《念奴娇·赤壁怀古》等经典诗词中的汉字

const middleChineseData = {
    // 大江东去，浪淘尽，千古风流人物
    '大': { ipa: 'dajH', pinyin: 'dài', tone: '去声' },
    '江': { ipa: 'kaewng', pinyin: 'kāng', tone: '平声' },
    '东': { ipa: 'tung', pinyin: 'tūng', tone: '平声' },
    '去': { ipa: 'khjoH', pinyin: 'khì', tone: '去声' },
    '浪': { ipa: 'lang', pinyin: 'làng', tone: '去声' },
    '淘': { ipa: 'daw', pinyin: 'tāo', tone: '平声' },
    '尽': { ipa: 'dzinH', pinyin: 'tsìn', tone: '去声' },
    '千': { ipa: 'tshen', pinyin: 'tshén', tone: '平声' },
    '古': { ipa: 'kuX', pinyin: 'kǔ', tone: '上声' },
    '风': { ipa: 'pjuwng', pinyin: 'fūng', tone: '平声' },
    '流': { ipa: 'ljuw', pinyin: 'líu', tone: '平声' },
    '人': { ipa: 'nrjin', pinyin: 'nén', tone: '平声' },
    '物': { ipa: 'mjut', pinyin: 'mùt', tone: '入声' },
    
    // 故垒西边，人道是，三国周郎赤壁
    '故': { ipa: 'kuH', pinyin: 'kù', tone: '去声' },
    '垒': { ipa: 'lwij', pinyin: 'lúi', tone: '上声' },
    '西': { ipa: 'sej', pinyin: 'sī', tone: '平声' },
    '边': { ipa: 'pen', pinyin: 'pén', tone: '平声' },
    '道': { ipa: 'dawH', pinyin: 'tào', tone: '去声' },
    '是': { ipa: 'djeX', pinyin: 'zhì', tone: '上声' },
    '三': { ipa: 'sam', pinyin: 'sām', tone: '平声' },
    '国': { ipa: 'kwok', pinyin: 'kuók', tone: '入声' },
    '周': { ipa: 'tsjuw', pinyin: 'tshīu', tone: '平声' },
    '郎': { ipa: 'lang', pinyin: 'láng', tone: '平声' },
    '赤': { ipa: 'tsrhek', pinyin: 'tshàk', tone: '入声' },
    '壁': { ipa: 'pek', pinyin: 'pàk', tone: '入声' },
    
    // 乱石穿空，惊涛拍岸，卷起千堆雪
    '乱': { ipa: 'lwanH', pinyin: 'luàn', tone: '去声' },
    '石': { ipa: 'dzyek', pinyin: 'zháng', tone: '入声' },
    '穿': { ipa: 'tsrhjwen', pinyin: 'tshūen', tone: '平声' },
    '空': { ipa: 'khuwng', pinyin: 'khūng', tone: '平声' },
    '惊': { ipa: 'kjeng', pinyin: 'kīng', tone: '平声' },
    '涛': { ipa: 'daw', pinyin: 'táo', tone: '平声' },
    '拍': { ipa: 'phrak', pinyin: 'phàk', tone: '入声' },
    '岸': { ipa: 'nganH', pinyin: 'ngàn', tone: '去声' },
    '卷': { ipa: 'kwenX', pinyin: 'kuǎn', tone: '上声' },
    '起': { ipa: 'khijX', pinyin: 'khǐ', tone: '上声' },
    '堆': { ipa: 'toj', pinyin: 'tuī', tone: '平声' },
    '雪': { ipa: 'swet', pinyin: 'suát', tone: '入声' },
    
    // 江山如画，一时多少豪杰
    '山': { ipa: 'sran', pinyin: 'sān', tone: '平声' },
    '如': { ipa: 'njo', pinyin: 'nyú', tone: '平声' },
    '画': { ipa: 'kwaeH', pinyin: 'huà', tone: '去声' },
    '一': { ipa: "'jit", pinyin: 'īt', tone: '入声' },
    '时': { ipa: 'dzyi', pinyin: 'zhí', tone: '平声' },
    '多': { ipa: 'ta', pinyin: 'tā', tone: '平声' },
    '少': { ipa: 'sjawX', pinyin: 'shiǎu', tone: '上声' },
    '豪': { ipa: 'haw', pinyin: 'háo', tone: '平声' },
    '杰': { ipa: 'ket', pinyin: 'kàt', tone: '入声' },
    
    // 遥想公瑾当年，小乔初嫁了，雄姿英发
    '遥': { ipa: 'jew', pinyin: 'yáo', tone: '平声' },
    '想': { ipa: 'sjangX', pinyin: 'xiǎng', tone: '上声' },
    '公': { ipa: 'kuwng', pinyin: 'kūng', tone: '平声' },
    '瑾': { ipa: 'kimX', pinyin: 'kǐm', tone: '上声' },
    '当': { ipa: 'tang', pinyin: 'tāng', tone: '平声' },
    '年': { ipa: 'nen', pinyin: 'nén', tone: '平声' },
    '小': { ipa: 'sjewX', pinyin: 'xiǎu', tone: '上声' },
    '乔': { ipa: 'gjuw', pinyin: 'qiáo', tone: '平声' },
    '初': { ipa: 'tsrhu', pinyin: 'tshū', tone: '平声' },
    '嫁': { ipa: 'kaH', pinyin: 'kà', tone: '去声' },
    '了': { ipa: 'leawX', pinyin: 'liǎu', tone: '上声' },
    '雄': { ipa: 'hjowng', pinyin: 'xióng', tone: '平声' },
    '姿': { ipa: 'tsje', pinyin: 'tsī', tone: '平声' },
    '英': { ipa: "'jeng", pinyin: 'īng', tone: '平声' },
    '发': { ipa: 'pwat', pinyin: 'fāt', tone: '入声' },
    
    // 羽扇纶巾，谈笑间，樯橹灰飞烟灭
    '羽': { ipa: 'hjwoX', pinyin: 'hǔ', tone: '上声' },
    '扇': { ipa: 'syenH', pinyin: 'shàn', tone: '去声' },
    '纶': { ipa: 'kwren', pinyin: 'guān', tone: '平声' },
    '巾': { ipa: 'kin', pinyin: 'kīn', tone: '平声' },
    '谈': { ipa: 'dam', pinyin: 'tám', tone: '平声' },
    '笑': { ipa: 'sjewH', pinyin: 'xiào', tone: '去声' },
    '间': { ipa: 'ken', pinyin: 'kān', tone: '平声' },
    '樯': { ipa: 'dzjang', pinyin: 'qiáng', tone: '平声' },
    '橹': { ipa: 'luX', pinyin: 'lǔ', tone: '上声' },
    '灰': { ipa: 'hwoj', pinyin: 'huī', tone: '平声' },
    '飞': { ipa: 'pjoj', pinyin: 'fēi', tone: '平声' },
    '烟': { ipa: "'en", pinyin: 'ēn', tone: '平声' },
    '灭': { ipa: 'met', pinyin: 'màt', tone: '入声' },
    
    // 故国神游，多情应笑我，早生华发
    '神': { ipa: 'dzyin', pinyin: 'zhén', tone: '平声' },
    '游': { ipa: 'juw', pinyin: 'yóu', tone: '平声' },
    '情': { ipa: 'dzjeng', pinyin: 'qíng', tone: '平声' },
    '应': { ipa: "'jeng", pinyin: 'īng', tone: '平声' },
    '我': { ipa: 'ngaX', pinyin: 'ngǎ', tone: '上声' },
    '早': { ipa: 'tsawX', pinyin: 'tsǎu', tone: '上声' },
    '生': { ipa: 'sraeng', pinyin: 'sēng', tone: '平声' },
    '华': { ipa: 'hwa', pinyin: 'huā', tone: '平声' },
    
    // 人生如梦，一尊还酹江月
    '梦': { ipa: 'mjuwngH', pinyin: 'mòng', tone: '去声' },
    '尊': { ipa: 'tsuwn', pinyin: 'tsūn', tone: '平声' },
    '还': { ipa: 'hwan', pinyin: 'huán', tone: '平声' },
    '酹': { ipa: 'lajH', pinyin: 'lèi', tone: '去声' },
    '月': { ipa: 'ngjwot', pinyin: 'nguàt', tone: '入声' }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = middleChineseData;
}