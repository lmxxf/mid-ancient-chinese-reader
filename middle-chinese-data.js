// 中古汉语字音映射数据
// 基于白一平-沙加尔（Baxter-Sagart）中古汉语拟音系统
// 主要收录《念奴娇·赤壁怀古》《将进酒》等经典诗词中的汉字

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
    '月': { ipa: 'ngjwot', pinyin: 'nguàt', tone: '入声' },
    
    // 《将进酒》新增汉字
    // 君不见黄河之水天上来，奔流到海不复回
    '君': { ipa: 'kjun', pinyin: 'kūn', tone: '平声' },
    '不': { ipa: 'pjut', pinyin: 'pūt', tone: '入声' },
    '见': { ipa: 'kenH', pinyin: 'kèn', tone: '去声' },
    '黄': { ipa: 'hwang', pinyin: 'huáng', tone: '平声' },
    '河': { ipa: 'ha', pinyin: 'hā', tone: '平声' },
    '之': { ipa: 'tsyi', pinyin: 'tshī', tone: '平声' },
    '水': { ipa: 'sywij', pinyin: 'shuǐ', tone: '上声' },
    '天': { ipa: 'then', pinyin: 'thēn', tone: '平声' },
    '上': { ipa: 'dzjangX', pinyin: 'shàng', tone: '上声' },
    '来': { ipa: 'loj', pinyin: 'lái', tone: '平声' },
    '奔': { ipa: 'pwon', pinyin: 'pūn', tone: '平声' },
    '到': { ipa: 'tawH', pinyin: 'tào', tone: '去声' },
    '海': { ipa: 'hojX', pinyin: 'hǎi', tone: '上声' },
    '复': { ipa: 'bjuwk', pinyin: 'fùk', tone: '入声' },
    '回': { ipa: 'hwoj', pinyin: 'huái', tone: '平声' },
    
    // 君不见高堂明镜悲白发，朝如青丝暮成雪
    '高': { ipa: 'kaw', pinyin: 'kāo', tone: '平声' },
    '堂': { ipa: 'dang', pinyin: 'táng', tone: '平声' },
    '明': { ipa: 'mjaeng', pinyin: 'míng', tone: '平声' },
    '镜': { ipa: 'kjaengH', pinyin: 'kìng', tone: '去声' },
    '悲': { ipa: 'poj', pinyin: 'pēi', tone: '平声' },
    '白': { ipa: 'baek', pinyin: 'bák', tone: '入声' },
    '朝': { ipa: 'drjew', pinyin: 'tráo', tone: '平声' },
    '青': { ipa: 'tsheng', pinyin: 'tshēng', tone: '平声' },
    '丝': { ipa: 'si', pinyin: 'sī', tone: '平声' },
    '暮': { ipa: 'muH', pinyin: 'mù', tone: '去声' },
    '成': { ipa: 'dzyeng', pinyin: 'zhéng', tone: '平声' },
    
    // 人生得意须尽欢，莫使金樽空对月
    '得': { ipa: 'tok', pinyin: 'tàk', tone: '入声' },
    '意': { ipa: 'ijH', pinyin: 'ì', tone: '去声' },
    '须': { ipa: 'sjo', pinyin: 'sū', tone: '平声' },
    '欢': { ipa: 'hwan', pinyin: 'huān', tone: '平声' },
    '莫': { ipa: 'mak', pinyin: 'màk', tone: '入声' },
    '使': { ipa: 'sriX', pinyin: 'shǐ', tone: '上声' },
    '金': { ipa: 'kim', pinyin: 'kīm', tone: '平声' },
    '樽': { ipa: 'tsuwn', pinyin: 'tsūn', tone: '平声' },
    '对': { ipa: 'twojH', pinyin: 'tuì', tone: '去声' },
    
    // 天生我材必有用，金千两散尽还复来
    '材': { ipa: 'dzoj', pinyin: 'tsái', tone: '平声' },
    '必': { ipa: 'pit', pinyin: 'pìt', tone: '入声' },
    '有': { ipa: 'hjuwX', pinyin: 'yǒu', tone: '上声' },
    '用': { ipa: 'jowngH', pinyin: 'yòng', tone: '去声' },
    '两': { ipa: 'ljangX', pinyin: 'liǎng', tone: '上声' },
    '散': { ipa: 'sanH', pinyin: 'sàn', tone: '去声' },
    
    // 烹羊宰牛且为乐，会须一饮三百杯
    '烹': { ipa: 'phrang', pinyin: 'phēng', tone: '平声' },
    '羊': { ipa: 'yang', pinyin: 'yáng', tone: '平声' },
    '宰': { ipa: 'tsojX', pinyin: 'tsǎi', tone: '上声' },
    '牛': { ipa: 'ngjuw', pinyin: 'ngíu', tone: '平声' },
    '且': { ipa: 'tshjaX', pinyin: 'tshiě', tone: '上声' },
    '为': { ipa: 'hjwe', pinyin: 'wéi', tone: '平声' },
    '乐': { ipa: 'lak', pinyin: 'làk', tone: '入声' },
    '会': { ipa: 'hwojH', pinyin: 'huì', tone: '去声' },
    '饮': { ipa: 'ijmX', pinyin: 'ǐm', tone: '上声' },
    '百': { ipa: 'paek', pinyin: 'pák', tone: '入声' },
    '杯': { ipa: 'poj', pinyin: 'pēi', tone: '平声' },
    
    // 岑夫子，丹丘生，将进酒，杯莫停
    '岑': { ipa: 'dzrim', pinyin: 'tsím', tone: '平声' },
    '夫': { ipa: 'pju', pinyin: 'fū', tone: '平声' },
    '子': { ipa: 'tsiX', pinyin: 'tsǐ', tone: '上声' },
    '丹': { ipa: 'tan', pinyin: 'tān', tone: '平声' },
    '丘': { ipa: 'khjuw', pinyin: 'khīu', tone: '平声' },
    '将': { ipa: 'tsjang', pinyin: 'tsiāng', tone: '平声' },
    '进': { ipa: 'tsinH', pinyin: 'tsìn', tone: '去声' },
    '酒': { ipa: 'tsjuwX', pinyin: 'tsiǔ', tone: '上声' },
    '停': { ipa: 'deng', pinyin: 'téng', tone: '平声' },
    
    // 与君歌一曲，请君为我倾耳听
    '与': { ipa: 'yoX', pinyin: 'yǔ', tone: '上声' },
    '歌': { ipa: 'ka', pinyin: 'kā', tone: '平声' },
    '曲': { ipa: 'khjowk', pinyin: 'khiók', tone: '入声' },
    '请': { ipa: 'tshjaengH', pinyin: 'tshìng', tone: '去声' },
    '倾': { ipa: 'khjeng', pinyin: 'khīng', tone: '平声' },
    '耳': { ipa: 'nriX', pinyin: 'nǐ', tone: '上声' },
    '听': { ipa: 'theng', pinyin: 'thēng', tone: '平声' },
    
    // 钟鼓馔玉不足贵，但愿长醉不复醒
    '钟': { ipa: 'tsrjuwng', pinyin: 'tshūng', tone: '平声' },
    '鼓': { ipa: 'kuX', pinyin: 'kǔ', tone: '上声' },
    '馔': { ipa: 'drjwenH', pinyin: 'trùn', tone: '去声' },
    '玉': { ipa: 'ngjowk', pinyin: 'ngìok', tone: '入声' },
    '足': { ipa: 'tsjowk', pinyin: 'tsiók', tone: '入声' },
    '贵': { ipa: 'kjweH', pinyin: 'kuì', tone: '去声' },
    '但': { ipa: 'tanH', pinyin: 'tàn', tone: '去声' },
    '愿': { ipa: 'ngjwonH', pinyin: 'nguòn', tone: '去声' },
    '长': { ipa: 'drjang', pinyin: 'tráng', tone: '平声' },
    '醉': { ipa: 'tsuijH', pinyin: 'tsuì', tone: '去声' },
    '醒': { ipa: 'sjaengX', pinyin: 'xiǎng', tone: '上声' },
    
    // 古来圣贤皆寂寞，惟有饮者留其名
    '圣': { ipa: 'syengH', pinyin: 'shìng', tone: '去声' },
    '贤': { ipa: 'hen', pinyin: 'hén', tone: '平声' },
    '皆': { ipa: 'keaj', pinyin: 'kāi', tone: '平声' },
    '寂': { ipa: 'dzek', pinyin: 'zàk', tone: '入声' },
    '寞': { ipa: 'mak', pinyin: 'màk', tone: '入声' },
    '惟': { ipa: 'ywij', pinyin: 'yuí', tone: '平声' },
    '者': { ipa: 'tsyaX', pinyin: 'tshiě', tone: '上声' },
    '留': { ipa: 'ljuw', pinyin: 'líu', tone: '平声' },
    '其': { ipa: 'gi', pinyin: 'qí', tone: '平声' },
    '名': { ipa: 'mjaeng', pinyin: 'míng', tone: '平声' },
    
    // 陈王昔时宴平乐，斗酒十千恣欢谑
    '陈': { ipa: 'drjin', pinyin: 'trín', tone: '平声' },
    '王': { ipa: 'hjwang', pinyin: 'wáng', tone: '平声' },
    '昔': { ipa: 'sjek', pinyin: 'siak', tone: '入声' },
    '宴': { ipa: 'enH', pinyin: 'yàn', tone: '去声' },
    '平': { ipa: 'bjaeng', pinyin: 'píng', tone: '平声' },
    '斗': { ipa: 'tuwX', pinyin: 'tǒu', tone: '上声' },
    '十': { ipa: 'dzyip', pinyin: 'shíp', tone: '入声' },
    '恣': { ipa: 'tsiH', pinyin: 'tsì', tone: '去声' },
    '谑': { ipa: 'xjaewk', pinyin: 'hiáok', tone: '入声' },
    
    // 主人何为言少钱，径须沽酒对君酌
    '主': { ipa: 'tsyuX', pinyin: 'tshǔ', tone: '上声' },
    '何': { ipa: 'ha', pinyin: 'hā', tone: '平声' },
    '言': { ipa: 'ngen', pinyin: 'ngén', tone: '平声' },
    '钱': { ipa: 'dzjen', pinyin: 'tsiến', tone: '平声' },
    '径': { ipa: 'kengH', pinyin: 'kìng', tone: '去声' },
    '沽': { ipa: 'ku', pinyin: 'kū', tone: '平声' },
    '酌': { ipa: 'traewk', pinyin: 'tráok', tone: '入声' },
    
    // 五花马，千金裘，呼儿将出换美酒，与尔同销万古愁
    '五': { ipa: 'nguX', pinyin: 'ngǔ', tone: '上声' },
    '花': { ipa: 'hwa', pinyin: 'huā', tone: '平声' },
    '马': { ipa: 'mraX', pinyin: 'mǎ', tone: '上声' },
    '裘': { ipa: 'gjuw', pinyin: 'qíu', tone: '平声' },
    '呼': { ipa: 'xu', pinyin: 'hū', tone: '平声' },
    '儿': { ipa: 'nri', pinyin: 'nī', tone: '平声' },
    '出': { ipa: 'tsrhuwt', pinyin: 'tshūt', tone: '入声' },
    '换': { ipa: 'xwanH', pinyin: 'huàn', tone: '去声' },
    '美': { ipa: 'mjijX', pinyin: 'mǐ', tone: '上声' },
    '尔': { ipa: 'nriX', pinyin: 'nǐ', tone: '上声' },
    '同': { ipa: 'duwng', pinyin: 'túng', tone: '平声' },
    '销': { ipa: 'sjew', pinyin: 'siāo', tone: '平声' },
    '万': { ipa: 'mjien', pinyin: 'muàn', tone: '去声' },
    '愁': { ipa: 'drjuw', pinyin: 'tríu', tone: '平声' }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = middleChineseData;
}