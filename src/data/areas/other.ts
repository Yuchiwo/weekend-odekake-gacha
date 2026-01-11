import { Spot } from '../../types';

export const otherSpots: Spot[] = [
    // --- Existing Other Spots (Subset) ---
    {
        id: '85', name: '国営ひたち海浜公園', area: 'other', genre: 'nature', budget: 'low', weather: 'sunny',
        description: 'ネモフィラやコキアの絶景で有名。レンタルサイクルで広い園内を回ろう。',
        locationLink: 'https://goo.gl/maps/hitachi',
        imageUrl: 'https://images.unsplash.com/photo-1490750967868-69c2201ea998?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '茨城県ひたちなか市馬渡605-4',
        hpLink: 'https://hitachikaihin.jp/'
    },
    // --- New Spots (Ibaraki) ---
    {
        id: '5001', name: '偕楽園', area: 'other', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '日本三名園のひとつ。梅の名所として知られる。',
        locationLink: 'https://goo.gl/maps/kairakuen',
        imageUrl: 'https://images.unsplash.com/photo-1551608282-5369677e5c6a?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '茨城県水戸市常磐町1-3-3',
        hpLink: 'https://ibaraki-kairakuen.jp/'
    },
    {
        id: '5002', name: '牛久大仏', area: 'other', genre: 'cultural', budget: 'low', weather: 'sunny',
        description: '世界最大の青銅製立像。胎内拝観や小動物公園もある。',
        locationLink: 'https://goo.gl/maps/ushikudaibutsu',
        imageUrl: 'https://images.unsplash.com/photo-1605335198032-4d6423377754?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'cultural'],
        address: '茨城県牛久市久野町2083',
        hpLink: 'https://daibutu.net/'
    },
    {
        id: '5003', name: '大洗磯前神社', area: 'other', genre: 'cultural', budget: 'free', weather: 'sunny',
        description: '太平洋の荒波に立つ「神磯の鳥居」が絶景。日の出スポット。',
        locationLink: 'https://goo.gl/maps/oarai',
        imageUrl: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'cultural'],
        address: '茨城県東茨城郡大洗町磯浜町6890',
        hpLink: 'https://oarai-isosakijinja.or.jp/'
    },
    {
        id: '5004', name: 'JAXA筑波宇宙センター', area: 'other', genre: 'cultural', budget: 'free', weather: 'rainy_ok',
        description: '日本の宇宙開発の中枢。実物大のロケットや博物館が見学できる。',
        locationLink: 'https://goo.gl/maps/jaxa',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'family'],
        address: '茨城県つくば市千現2-1-1',
        hpLink: 'https://fanfun.jaxa.jp/visit/tsukuba/'
    },
    {
        id: '5005', name: '袋田の滝', area: 'other', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '日本三名瀑のひとつ。冬には滝が凍結する「氷瀑」が見られることも。',
        locationLink: 'https://goo.gl/maps/fukuroda',
        imageUrl: 'https://images.unsplash.com/photo-1548261356-9a59b64627d3?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'romantic'],
        address: '茨城県久慈郡大子町袋田'
    },
    {
        id: '5006', name: 'アクアワールド茨城県大洗水族館', area: 'other', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: 'サメの飼育種類数日本一。巨大なマンボウの水槽も癒やされる。',
        locationLink: 'https://goo.gl/maps/oaraiaqua',
        imageUrl: 'https://images.unsplash.com/photo-1568254422998-348df8044739?auto=format&fit=crop&q=80&w=800',
        vibes: ['family', 'relax'],
        address: '茨城県東茨城郡大洗町磯浜町8252-3',
        hpLink: 'https://www.aquaworld-oarai.com/'
    },
    // --- New Spots (Tochigi) ---
    {
        id: '5007', name: '日光東照宮', area: 'other', genre: 'cultural', budget: 'mid', weather: 'rainy_ok',
        description: '徳川家康を祀る世界遺産。陽明門や眠り猫など見どころ多数。',
        locationLink: 'https://goo.gl/maps/nikko',
        imageUrl: 'https://images.unsplash.com/photo-1576487238128-d82054c7604d?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '栃木県日光市山内2301',
        hpLink: 'https://www.toshogu.jp/'
    },
    {
        id: '5008', name: 'あしかがフラワーパーク', area: 'other', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: '樹齢160年の大藤棚が世界的にも有名。冬のイルミネーションも日本一。',
        locationLink: 'https://goo.gl/maps/ashikaga',
        imageUrl: 'https://images.unsplash.com/photo-1588652431872-466d3a95c474?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '栃木県足利市迫間町607',
        hpLink: 'https://www.ashikaga.co.jp/'
    },
    {
        id: '5009', name: '東武ワールドスクウェア', area: 'other', genre: 'activity', budget: 'mid', weather: 'sunny',
        description: '世界の有名建築物を25分の1スケールで再現したテーマパーク。',
        locationLink: 'https://goo.gl/maps/tobuworld',
        imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800',
        vibes: ['family', 'cultural'],
        address: '栃木県日光市鬼怒川温泉大原209-1',
        hpLink: 'https://www.tobuws.co.jp/'
    },
    {
        id: '5010', name: '江戸ワンダーランド 日光江戸村', area: 'other', genre: 'activity', budget: 'high', weather: 'sunny',
        description: '江戸時代の町並みを再現。忍者ショーや花魁道中が楽しめる。',
        locationLink: 'https://goo.gl/maps/edomura',
        imageUrl: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'family'],
        address: '栃木県日光市柄倉470-2',
        hpLink: 'https://edowonderland.net/'
    },
    {
        id: '5011', name: '那須どうぶつ王国', area: 'other', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: 'カピバラ温泉やマヌルネコなど、動物との距離が近い動物園。',
        locationLink: 'https://goo.gl/maps/nasu',
        imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800',
        vibes: ['family', 'relax'],
        address: '栃木県那須郡那須町大島1042-1',
        hpLink: 'https://www.nasu-oukoku.com/'
    },
    {
        id: '5012', name: '華厳の滝', area: 'other', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '高さ97mを一気に落下する壮大な滝。紅葉の季節は特に美しい。',
        locationLink: 'https://goo.gl/maps/kegon',
        imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'romantic'],
        // Wait, fixing here.
        // Actually removing 'nature' now.
        // vibes: ['exciting', 'romantic']
    },
    {
        id: '5013', name: '大谷資料館', area: 'other', genre: 'cultural', budget: 'low', weather: 'rainy_ok',
        description: '大谷石の採掘場跡。巨大な地下空間はまるで地下神殿。',
        locationLink: 'https://goo.gl/maps/oya',
        imageUrl: 'https://images.unsplash.com/photo-1605335198032-4d6423377754?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'cultural'],
        address: '栃木県宇都宮市大谷町909',
        hpLink: 'http://www.oya909.co.jp/'
    },
    // --- New Spots (Gunma) ---
    {
        id: '5014', name: '草津温泉（湯畑）', area: 'other', genre: 'onsen', budget: 'free', weather: 'sunny',
        description: '日本三名泉のひとつ。温泉街の中心にある湯畑は圧巻。',
        locationLink: 'https://goo.gl/maps/kusatsu',
        imageUrl: 'https://images.unsplash.com/photo-1570535973950-68142d765581?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '群馬県吾妻郡草津町草津',
        hpLink: 'https://www.kusatsu-onsen.ne.jp/'
    },
    {
        id: '5015', name: '富岡製糸場', area: 'other', genre: 'cultural', budget: 'low', weather: 'rainy_ok',
        description: '明治のレンガ造りの建物が残る世界遺産。',
        locationLink: 'https://goo.gl/maps/tomioka',
        imageUrl: 'https://images.unsplash.com/photo-1582650630737-18451f496739?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural'],
        address: '群馬県富岡市富岡1-1',
        hpLink: 'https://www.tomioka-silk.jp/'
    },
    {
        id: '5016', name: '伊香保温泉 石段街', area: 'other', genre: 'onsen', budget: 'free', weather: 'sunny',
        description: '365段の石段が続く情緒ある温泉街。射的や饅頭屋が並ぶ。',
        locationLink: 'https://goo.gl/maps/ikaho',
        imageUrl: 'https://images.unsplash.com/photo-1572973801201-97b47b85d9af?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '群馬県渋川市伊香保町伊香保',
        hpLink: 'https://www.ikaho-kankou.com/'
    },
    {
        id: '5017', name: '群馬サファリパーク', area: 'other', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: '自家用車で回れるサファリパーク。ホワイトタイガーが人気。',
        locationLink: 'https://goo.gl/maps/gunmasafari',
        imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'family'],
        address: '群馬県富岡市岡本1',
        hpLink: 'https://www.safari.co.jp/'
    },
    {
        id: '5018', name: '四万温泉（積善館）', area: 'other', genre: 'onsen', budget: 'mid', weather: 'rainy_ok',
        description: '『千と千尋の神隠し』のモデルとも言われる、日本最古の湯宿建築。',
        locationLink: 'https://goo.gl/maps/shima',
        imageUrl: 'https://images.unsplash.com/photo-1563821731-0df86c770c0c?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'cultural'],
        address: '群馬県吾妻郡中之条町四万4236',
        hpLink: 'https://www.sekizenkan.co.jp/'
    },
    // --- New Spots (Yamanashi/Shizuoka - accessible weekend trips) ---
    {
        id: '6001', name: '富士急ハイランド', area: 'other', genre: 'activity', budget: 'high', weather: 'sunny',
        description: '世界クラスの絶叫マシンが揃う遊園地。トーマスランドもある。',
        locationLink: 'https://goo.gl/maps/fujiq',
        imageUrl: 'https://images.unsplash.com/photo-1579969248238-a1e4a6825c7e?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '山梨県富士吉田市新西原5-6-1',
        hpLink: 'https://www.fujiq.jp/'
    },
    {
        id: '6002', name: '河口湖（大石公園）', area: 'other', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '富士山とラベンダーの絶景スポット。湖畔のカフェもお洒落。',
        locationLink: 'https://goo.gl/maps/oishi',
        imageUrl: 'https://images.unsplash.com/photo-1478144592103-258389d31bdc?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '山梨県南都留郡富士河口湖町大石2585'
    },
    {
        id: '6003', name: 'ほったらかし温泉', area: 'other', genre: 'onsen', budget: 'low', weather: 'sunny',
        description: '富士山と甲府盆地を見下ろす絶景露天風呂。日の出前から営業。',
        locationLink: 'https://goo.gl/maps/hottarakashi',
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'exciting'],
        address: '山梨県山梨市矢坪1669-18',
        hpLink: 'http://www.hottarakashi-onsen.com/'
    },
    {
        id: '6004', name: '忍野八海', area: 'other', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '富士山の伏流水が生んだ8つの湧水池。透明度が非常に高い。',
        locationLink: 'https://goo.gl/maps/oshino',
        imageUrl: 'https://images.unsplash.com/photo-1621532296057-a5ec08c90965?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '山梨県南都留郡忍野村忍草'
    },
    {
        id: '6005', name: '山中湖（花の都公園）', area: 'other', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '富士山を背景に四季折々の花が咲く。水陸両用バス「KABA」も人気。',
        locationLink: 'https://goo.gl/maps/hananomiyako',
        imageUrl: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '山梨県南都留郡山中湖村山中1650'
    },
    {
        id: '6006', name: '御殿場プレミアム・アウトレット', area: 'other', genre: 'shopping', budget: 'mid', weather: 'sunny',
        description: '日本最大級のアウトレット。富士山を眺めながらショッピング。',
        locationLink: 'https://goo.gl/maps/gotemba',
        imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'], // shopping -> exciting
        address: '静岡県御殿場市深沢1312',
        hpLink: 'https://www.premiumoutlets.co.jp/gotemba/'
    },
    {
        id: '6007', name: '熱海サンビーチ', area: 'other', genre: 'nature', budget: 'free', weather: 'sunny',
        description: 'ヤシの木が並ぶリゾートビーチ。夜はライトアップされ幻想的。',
        locationLink: 'https://goo.gl/maps/atami',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '静岡県熱海市東海岸町'
    },
    {
        id: '6008', name: 'MOA美術館', area: 'other', genre: 'art', budget: 'mid', weather: 'rainy_ok',
        description: '海を見渡す高台にある美術館。世界最大級の万華鏡や美しい庭園がある。',
        locationLink: 'https://goo.gl/maps/moa',
        imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d8675b8?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'romantic'],
        address: '静岡県熱海市桃山町26-2',
        hpLink: 'https://www.moaart.or.jp/'
    },
    {
        id: '6009', name: '伊豆シャボテン動物公園', area: 'other', genre: 'activity', budget: 'mid', weather: 'sunny',
        description: 'カピバラの露天風呂発祥の地。動物との距離が近く、サボテン狩りもできる。',
        locationLink: 'https://goo.gl/maps/shaboten',
        imageUrl: 'https://images.unsplash.com/photo-1506665531195-3566afe2b458?auto=format&fit=crop&q=80&w=800',
        vibes: ['family', 'relax'],
        address: '静岡県伊東市富戸1317-13',
        hpLink: 'https://izushaboten.com/'
    },
    {
        id: '6010', name: '三島スカイウォーク', area: 'other', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: '日本最長の歩行者専用吊橋。富士山と駿河湾の大パノラマ。',
        locationLink: 'https://goo.gl/maps/mishima',
        imageUrl: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2e?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'romantic'],
        address: '静岡県三島市笹原新田313',
        hpLink: 'https://mishima-skywalk.jp/'
    }
];
