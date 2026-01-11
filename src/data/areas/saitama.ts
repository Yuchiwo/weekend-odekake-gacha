import { Spot } from '../../types';

export const saitamaSpots: Spot[] = [
    // --- Existing ---
    {
        id: '9', name: '鉄道博物館', area: 'saitama', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: '鉄道ファンでなくても楽しめる巨大ミュージアム。駅弁も充実。',
        locationLink: 'https://goo.gl/maps/teppaku',
        imageUrl: 'https://images.unsplash.com/photo-1596288827725-b467657d4257?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting', 'family'],
        address: '埼玉県さいたま市大宮区大成町3-47',
        hpLink: 'https://www.railway-museum.jp/'
    },
    {
        id: '22', name: '川越・蔵造りの町並み', area: 'saitama', genre: 'gourmet', budget: 'low', weather: 'sunny',
        description: '小江戸川越でさつまいもスイーツを食べ歩き。時の鐘も必見。',
        locationLink: 'https://goo.gl/maps/kawagoe',
        imageUrl: 'https://images.unsplash.com/photo-1579601700683-1466a9089f64?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'family'],
        address: '埼玉県川越市幸町',
        hpLink: 'https://koedo.or.jp/'
    },
    {
        id: '35', name: 'ムーミンバレーパーク', area: 'saitama', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: '北欧の童話の世界を再現したテーマパーク。宮沢湖畔でのんびり。',
        locationLink: 'https://goo.gl/maps/moomin',
        imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic', 'family'],
        address: '埼玉県飯能市宮沢327-6',
        hpLink: 'https://metsa-hanno.com/'
    },
    {
        id: '39', name: '羊山公園 芝桜の丘', area: 'saitama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '春には一面の芝桜が広がる秩父の名所。見頃は4月中旬〜5月上旬。',
        locationLink: 'https://goo.gl/maps/hitsujiyama',
        imageUrl: 'https://images.unsplash.com/photo-1558277397-2a54911d3319?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '埼玉県秩父市大宮6360'
    },
    {
        id: '77', name: '東武動物公園', area: 'saitama', genre: 'activity', budget: 'mid', weather: 'sunny',
        description: '遊園地と動物園が融合したハイブリッドレジャーランド。ホワイトタイガーに会える。',
        locationLink: 'https://goo.gl/maps/tobuzoo',
        imageUrl: 'https://images.unsplash.com/photo-1575536340277-2c1f01c22d4a?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'family'],
        address: '埼玉県南埼玉郡宮代町須賀110',
        hpLink: 'https://www.tobuzoo.com/'
    },
    {
        id: '78', name: 'ジョンソンタウン', area: 'saitama', genre: 'shopping', budget: 'low', weather: 'sunny',
        description: '入間市にある米軍ハウス街。アメリカンなカフェや雑貨屋が並ぶ。',
        locationLink: 'https://goo.gl/maps/johnsontown',
        imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '埼玉県入間市東町1-6-1',
        hpLink: 'https://johnson-town.com/'
    },
    {
        id: '79', name: '長瀞ライン下り', area: 'saitama', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: '荒川の渓谷美を船から楽しむ。天然氷のかき氷も有名。',
        locationLink: 'https://goo.gl/maps/nagatoro',
        imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '埼玉県秩父郡長瀞町長瀞489-2',
        hpLink: 'https://www.chichibu-railway.co.jp/nagatoro/boat.html'
    },
    {
        id: '82', name: 'COSTCO 新三郷', area: 'saitama', genre: 'shopping', budget: 'mid', weather: 'rainy_ok',
        description: 'ららぽーと、IKEAと隣接する最強のショッピングエリア。',
        locationLink: 'https://goo.gl/maps/costco-misato',
        imageUrl: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '埼玉県三郷市新三郷ららシティ3-1-2',
        hpLink: 'https://www.costco.co.jp/store-finder/Shin%20Misato'
    },
    // --- New Spots (IDs 2000+) ---
    {
        id: '2001', name: '武蔵一宮 氷川神社', area: 'saitama', genre: 'cultural', budget: 'free', weather: 'sunny',
        description: '武蔵国一宮。2kmに及ぶ美しい参道は日本一の長さ。',
        locationLink: 'https://goo.gl/maps/hikawa',
        imageUrl: 'https://images.unsplash.com/photo-1601046643768-45e07663b652?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '埼玉県さいたま市大宮区高鼻町1-407',
        hpLink: 'https://musashiichinomiya-hikawa.or.jp/'
    },
    {
        id: '2002', name: '三峯神社', area: 'saitama', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: '秩父の山奥にある関東最強のパワースポット。雲海が見られることも。',
        locationLink: 'https://goo.gl/maps/mitsumine',
        imageUrl: 'https://images.unsplash.com/photo-1614757656641-5976249533f8?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '埼玉県秩父市三峰298-1',
        hpLink: 'https://www.mitsuminejinja.or.jp/'
    },
    {
        id: '2003', name: 'ところざわサクラタウン', area: 'saitama', genre: 'art', budget: 'mid', weather: 'rainy_ok',
        description: '角川武蔵野ミュージアムがあるクールジャパンの拠点。本棚劇場は圧巻。',
        locationLink: 'https://goo.gl/maps/sakuratown',
        imageUrl: 'https://images.unsplash.com/photo-1628581776518-2e06c27636e0?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '埼玉県所沢市東所沢和田3-31-3'
    },
    {
        id: '2004', name: '国営武蔵丘陵森林公園', area: 'saitama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '東京ドーム65個分の広大な公園。サイクリングやアスレチックが楽しめる。',
        locationLink: 'https://goo.gl/maps/musashikyuryo',
        imageUrl: 'https://images.unsplash.com/photo-1596706788879-16e6d0a79401?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'family'],
        address: '埼玉県比企郡滑川町山田1920',
        hpLink: 'https://www.shinrinkoen.jp/'
    },
    {
        id: '2005', name: '大宮公園', area: 'saitama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '桜の名所として知られる県営公園。小動物園も併設されている。',
        locationLink: 'https://goo.gl/maps/omiyapark',
        imageUrl: 'https://images.unsplash.com/photo-1558231872-4e0ab07ebf05?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'family'],
        address: '埼玉県さいたま市大宮区高鼻町4'
    },
    {
        id: '2006', name: '首都圏外郭放水路', area: 'saitama', genre: 'activity', budget: 'low', weather: 'rainy_ok',
        description: '「地下神殿」と呼ばれる巨大な地下放水路。見学会は要予約。',
        locationLink: 'https://goo.gl/maps/kasukabe',
        imageUrl: 'https://images.unsplash.com/photo-1579762677610-85f269438092?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'cultural'],
        address: '埼玉県春日部市上金崎720'
    },
    {
        id: '2007', name: '西武園ゆうえんち', area: 'saitama', genre: 'activity', budget: 'high', weather: 'sunny',
        description: '昭和の熱気を再現したリニューアルで話題。ゴジラ・ザ・ライドは必見。',
        locationLink: 'https://goo.gl/maps/seibuen',
        imageUrl: 'https://images.unsplash.com/photo-1543527265-5b8d002f231e?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'family'],
        address: '埼玉県所沢市山口2964',
        hpLink: 'https://www.seibu-leisure.co.jp/amusementpark/'
    },
    {
        id: '2008', name: 'イオンレイクタウン', area: 'saitama', genre: 'shopping', budget: 'mid', weather: 'rainy_ok',
        description: '日本最大級のショッピングモール。一日では回りきれない広さ。',
        locationLink: 'https://goo.gl/maps/laketown',
        imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?auto=format&fit=crop&q=80&w=800',
        vibes: ['family', 'exciting'],
        address: '埼玉県越谷市レイクタウン4-2-2',
        hpLink: 'https://www.aeon-laketown.jp/'
    },
    {
        id: '2009', name: '巾着田曼珠沙華公園', area: 'saitama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '秋には500万本の彼岸花（マンジュシャゲ）が咲き誇る真っ赤な絨毯。',
        locationLink: 'https://goo.gl/maps/kinchakuda',
        imageUrl: 'https://images.unsplash.com/photo-1568800161427-098555986861?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic'],
        address: '埼玉県日高市高麗本郷125-2'
    },
    {
        id: '2010', name: '権現堂堤（熊谷桜堤）', area: 'saitama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '春は桜と菜の花のコントラストが美しい。',
        locationLink: 'https://goo.gl/maps/gongendo',
        imageUrl: 'https://images.unsplash.com/photo-1490750967868-69c2201ea998?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '埼玉県幸手市内国府間887-3'
    },
    {
        id: '2011', name: '古代蓮の里', area: 'saitama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '行田蓮（古代蓮）が咲く公園。展望タワーからは田んぼアートも見られる（季節による）。',
        locationLink: 'https://goo.gl/maps/kodaihasu',
        imageUrl: 'https://images.unsplash.com/photo-1533604118092-235889608151?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '埼玉県行田市小針2375-1'
    },
    {
        id: '2012', name: '吉見百穴', area: 'saitama', genre: 'cultural', budget: 'low', weather: 'sunny',
        description: '古墳時代の横穴墓群。不思議な景観と、地下軍需工場跡も見学できる。',
        locationLink: 'https://goo.gl/maps/yoshimi',
        imageUrl: 'https://images.unsplash.com/photo-1599579048386-3532f504de22?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '埼玉県比企郡吉見町北吉見324'
    },
    {
        id: '2013', name: 'トーベ・ヤンソンあけぼの子どもの森公園', area: 'saitama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '北欧の童話の世界観で作られた公園。キノコの家が可愛い。',
        locationLink: 'https://goo.gl/maps/akebono',
        imageUrl: 'https://images.unsplash.com/photo-1543160472-35cb74169720?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'family'],
        address: '埼玉県飯能市阿須893-1',
        hpLink: 'https://www.city.hanno.lg.jp/akebono'
    },
    {
        id: '2014', name: 'ららぽーと富士見', area: 'saitama', genre: 'shopping', budget: 'mid', weather: 'rainy_ok',
        description: '県内最大級のショッピングモール。映画館やバーベキュー場もある。',
        locationLink: 'https://goo.gl/maps/lalaportfujimi',
        imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?auto=format&fit=crop&q=80&w=800',
        vibes: ['family', 'exciting'],
        address: '埼玉県富士見市山室1-1313',
        hpLink: 'https://mitsui-shopping-park.com/lalaport/fujimi/'
    },
    {
        id: '2015', name: '川越氷川神社', area: 'saitama', genre: 'cultural', budget: 'free', weather: 'sunny',
        description: '縁結びの神様。「縁むすび風鈴」や「鯛みくじ」がインスタ映えすると人気。',
        locationLink: 'https://goo.gl/maps/kawagoehikawa',
        imageUrl: 'https://images.unsplash.com/photo-1565593899-703a55877c8e?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'cultural'],
        address: '埼玉県川越市宮下町2-11-3',
        hpLink: 'https://www.kawagoehikawa.jp/'
    },
    {
        id: '2016', name: '行田クリップ（オートレストラン鉄剣タロー）', area: 'saitama', genre: 'cultural', budget: 'low', weather: 'rainy_ok',
        description: 'レトロ自販機の聖地として知られる（※鉄剣タローは閉店しましたが、周辺に類似あり）。',
        locationLink: 'https://goo.gl/maps/gyoda',
        imageUrl: 'https://images.unsplash.com/photo-1563203494-b7899ced7680?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'cultural'],
        address: '埼玉県行田市'
    },
    {
        id: '2017', name: 'さいたまスーパーアリーナ', area: 'saitama', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: 'コンサートやイベントの聖地。けやきひろばでの食事もおすすめ。',
        locationLink: 'https://goo.gl/maps/ssa',
        imageUrl: 'https://images.unsplash.com/photo-1470229722913-7ea251b94d4d?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '埼玉県さいたま市中央区新都心8',
        hpLink: 'https://www.saitama-arena.co.jp/'
    },
    {
        id: '2018', name: '秩父神社', area: 'saitama', genre: 'cultural', budget: 'free', weather: 'sunny',
        description: '秩父三社の一つ。豪華な彫刻が見どころ。12月の秩父夜祭はユネスコ無形文化遺産。',
        locationLink: 'https://goo.gl/maps/chichibujinja',
        imageUrl: 'https://images.unsplash.com/photo-1574519696207-68b2006733c3?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '埼玉県秩父市番場町1-3',
        hpLink: 'https://www.chichibu-jinja.or.jp/'
    },
    // Note: Added ~20 high quality spots.
    {
        id: '2019', name: '角川武蔵野ミュージアム', area: 'saitama', genre: 'art', budget: 'mid', weather: 'rainy_ok',
        description: '図書館と美術館が融合した文化複合施設。本棚劇場は圧巻。',
        locationLink: 'https://goo.gl/maps/kadokawa',
        imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '埼玉県所沢市東所沢和田3-31-3'
    },


    {
        id: '2022', name: 'さいたま市大宮盆栽美術館', area: 'saitama', genre: 'art', budget: 'low', weather: 'sunny',
        description: '世界初の公立盆栽美術館。「BONSAI」の聖地。',
        locationLink: 'https://goo.gl/maps/bonsai',
        imageUrl: 'https://images.unsplash.com/photo-1599579048386-3532f504de22?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '埼玉県さいたま市北区土呂町2-24-3',
        hpLink: 'https://www.bonsai-art-museum.jp/'
    },
    {
        id: '2023', name: 'メッツァビレッジ', area: 'saitama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '北欧のライフスタイルを体験できる施設。宮沢湖畔でカヌーも楽しめる。',
        locationLink: 'https://goo.gl/maps/metsa',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '埼玉県飯能市宮沢327-6'
    },

    {
        id: '2025', name: 'さいたま市青少年宇宙科学館', area: 'saitama', genre: 'activity', budget: 'low', weather: 'rainy_ok',
        description: 'プラネタリウムや宇宙飛行士体験ができる科学館。',
        locationLink: 'https://goo.gl/maps/spacecenter',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        vibes: ['family', 'cultural'],
        address: '埼玉県さいたま市浦和区駒場2-3-45',
        hpLink: 'http://www.kagakukan.urawa.saitama.jp/'
    },


    {
        id: '2028', name: '宝登山小動物公園', area: 'saitama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: 'ロープウェイで登れる山頂の動物園。サル山や鹿と触れ合える。',
        locationLink: 'https://goo.gl/maps/hodosan',
        imageUrl: 'https://images.unsplash.com/photo-1588652431872-466d3a95c474?auto=format&fit=crop&q=80&w=800',
        vibes: ['family', 'relax'],
        address: '埼玉県秩父郡長瀞町長瀞2209-6',
        hpLink: 'http://hodosan-ropeway.co.jp/zoo/'
    },
    {
        id: '2029', name: '美の山公園', area: 'saitama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '秩父市街や武甲山を一望できる絶景スポット。桜やアジサイの名所。',
        locationLink: 'https://goo.gl/maps/minoyama',
        imageUrl: 'https://images.unsplash.com/photo-1490750967868-69c2201ea998?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '埼玉県秩父郡皆野町皆野',
        hpLink: 'https://www.pref.saitama.lg.jp/soshiki/b0504/minoyamakouen-top/'
    },
    {
        id: '2030', name: '川越熊野神社', area: 'saitama', genre: 'cultural', budget: 'free', weather: 'sunny',
        description: '開運・縁結びの神社。足踏み健康ロードや銭洗弁財天もある。',
        locationLink: 'https://goo.gl/maps/kawagoekumano',
        imageUrl: 'https://images.unsplash.com/photo-1601997380295-8a2720d2d225?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '埼玉県川越市連雀町17-1',
        hpLink: 'https://kawagoe-kumano.jp/'
    }
];
