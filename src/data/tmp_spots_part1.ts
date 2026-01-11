import { Spot } from '../types';

export const mockSpots: Spot[] = [
    // --- Established Spots ---
    {
        id: '1', name: '新宿御苑', area: '23ku', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '四季折々の自然を楽しめる都会のオアシス。ピクニックに最適。',
        locationLink: 'https://goo.gl/maps/shinjukugyoen',
        imageUrl: 'https://images.unsplash.com/photo-1584832502622-c824c6e94993?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '東京都新宿区内藤町11'
    },
    {
        id: '2', name: '国立新美術館', area: '23ku', genre: 'art', budget: 'mid', weather: 'rainy_ok',
        description: '国内最大級の展示スペースを持つ美術館。曲線的な建築も魅力。',
        locationLink: 'https://goo.gl/maps/nact',
        imageUrl: 'https://images.unsplash.com/photo-1545939268-38c207901366?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都港区六本木7-22-2'
    },
    {
        id: '3', name: '横浜赤レンガ倉庫', area: 'yokohama', genre: 'shopping', budget: 'mid', weather: 'rainy_ok',
        description: '歴史的建造物でショッピングとグルメを楽しめる。海沿いの散歩もおすすめ。',
        locationLink: 'https://goo.gl/maps/akarenga',
        imageUrl: 'https://images.unsplash.com/photo-1629858602923-d90060017109?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'exciting'],
        address: '神奈川県横浜市中区新港1-1'
    },
    {
        id: '4', name: '高尾山', area: 'tama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '都心からアクセス抜群の霊山。初心者でも気軽に登山が楽しめる。',
        locationLink: 'https://goo.gl/maps/takao',
        imageUrl: 'https://images.unsplash.com/photo-1596707328574-e3fb6b87638d?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'relax'],
        address: '東京都八王子市高尾町'
    },
    {
        id: '5', name: 'スパ・ラクーア', area: '23ku', genre: 'onsen', budget: 'mid', weather: 'rainy_ok',
        description: '東京ドームシティ内の天然温泉。リラックスラウンジで一日中だらだらできる。',
        locationLink: 'https://goo.gl/maps/laqua',
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax'],
        address: '東京都文京区春日1-1-1'
    },
    {
        id: '6', name: '江ノ島', area: 'other', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: '神社参拝、しらす丼、シーキャンドル。海を感じる小旅行。',
        locationLink: 'https://goo.gl/maps/enoshima',
        imageUrl: 'https://images.unsplash.com/photo-1550756972-e56ca6349942?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'exciting'],
        address: '神奈川県藤沢市江の島'
    },
    {
        id: '7', name: '井の頭恩賜公園', area: 'tama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: 'スワンボートと動物園。吉祥寺での買い物ついでに散策。',
        locationLink: 'https://goo.gl/maps/inokashira',
        imageUrl: 'https://images.unsplash.com/photo-1546816565-d0c3d9a16f2c?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '東京都武蔵野市御殿山1-18-31'
    },
    {
        id: '8', name: '三鷹の森ジブリ美術館', area: 'tama', genre: 'art', budget: 'low', weather: 'rainy_ok',
        description: 'ジブリの世界に迷い込む。完全予約制なので注意。',
        locationLink: 'https://goo.gl/maps/ghibli',
        imageUrl: 'https://images.unsplash.com/photo-1533282960533-51328aa49d1d?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都三鷹市下連雀1-1-83'
    },
    {
        id: '9', name: '川越氷川神社', area: 'chiba_saitama', genre: 'activity', budget: 'low', weather: 'sunny',
        description: '縁結びの神様。小江戸川越の街並み散策とセットで。',
        locationLink: 'https://goo.gl/maps/kawagoe',
        imageUrl: 'https://images.unsplash.com/photo-1579456534571-0857ef5db05b?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'cultural'],
        address: '埼玉県川越市宮下町2-11-3'
    },
    {
        id: '10', name: '葛西臨海公園', area: '23ku', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '観覧車と水族館がある広大な公園。海風が気持ちいい。',
        locationLink: 'https://goo.gl/maps/kasai',
        imageUrl: 'https://images.unsplash.com/photo-1543788304-4b4767db3e11?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '東京都江戸川区臨海町6'
    },
    {
        id: '11', name: '清澄白河カフェ巡り', area: '23ku', genre: 'gourmet', budget: 'low', weather: 'rainy_ok',
        description: 'ブルーボトルコーヒーなど、こだわりのロースタリーが点在するエリア。',
        locationLink: 'https://goo.gl/maps/kiyosumi',
        imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都江東区平野周辺'
    },
    {
        id: '12', name: 'チームラボプラネッツ', area: '23ku', genre: 'art', budget: 'high', weather: 'rainy_ok',
        description: '水に入るミュージアム。圧倒的な没入体験。',
        locationLink: 'https://goo.gl/maps/teamlab',
        imageUrl: 'https://images.unsplash.com/photo-1563292770-3d719b35b4c1?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'romantic'],
        address: '東京都江東区豊洲6-1-16'
    },
    {
        id: '13', name: 'お台場海浜公園', area: '23ku', genre: 'nature', budget: 'free', weather: 'sunny',
        description: 'レインボーブリッジと東京タワーを一望できる絶景スポット。夕暮れ時がおすすめ。',
        locationLink: 'https://goo.gl/maps/odaiba',
        imageUrl: 'https://images.unsplash.com/photo-1549692996-2244bbd9073e?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '東京都港区台場1'
    },
    {
        id: '14', name: 'カップヌードルミュージアム', area: 'yokohama', genre: 'activity', budget: 'low', weather: 'rainy_ok',
        description: '自分だけのオリジナルカップヌードルを作れる体験型ミュージアム。',
        locationLink: 'https://goo.gl/maps/cupnoodle',
        imageUrl: 'https://images.unsplash.com/photo-1596459341490-a292d3f38930?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '神奈川県横浜市中区新港2-3-4'
    },
    {
        id: '15', name: '代官山T-SITE', area: '23ku', genre: 'shopping', budget: 'free', weather: 'rainy_ok',
        description: '本、映画、音楽に囲まれた大人の文化施設。蔦屋書店でのんびり過ごす。',
        locationLink: 'https://goo.gl/maps/daikanyama',
        imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax', 'romantic'],
        address: '東京都渋谷区猿楽町16-15'
    },
    {
        id: '16', name: '昭和記念公園', area: 'tama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '広大な敷地で四季の花々やサイクリングが楽しめる。',
        locationLink: 'https://goo.gl/maps/showakinen',
        imageUrl: 'https://images.unsplash.com/photo-1590466416182-4aa8b671a520?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'exciting'],
        address: '東京都立川市緑町3173'
    },
    {
        id: '17', name: '東京スカイツリータウン', area: '23ku', genre: 'shopping', budget: 'low', weather: 'rainy_ok',
        description: '展望台だけでなく、ソラマチでの買い物や水族館も楽しめる複合施設。',
        locationLink: 'https://goo.gl/maps/skytree',
        imageUrl: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'shopping'],
        address: '東京都墨田区押上1-1-2'
    },
    {
        id: '18', name: '上野動物園', area: '23ku', genre: 'activity', budget: 'low', weather: 'sunny',
        description: 'パンダに会える日本最古の動物園。不忍池周辺の散策も良い。',
        locationLink: 'https://goo.gl/maps/uenozoo',
        imageUrl: 'https://images.unsplash.com/photo-1564639907106-2cb039c279a3?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'exciting'],
        address: '東京都台東区上野公園9-83'
    },
    {
        id: '19', name: '横浜中華街', area: 'yokohama', genre: 'gourmet', budget: 'mid', weather: 'rainy_ok',
        description: '食べ歩きや本格中華料理を楽しめる日本最大の中華街。',
        locationLink: 'https://goo.gl/maps/chinatown',
        imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'gourmet'],
        address: '神奈川県横浜市中区山下町'
    },
    {
        id: '20', name: 'サンシャイン水族館', area: '23ku', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: '「天空のオアシス」をコンセプトにした都会の水族館。空飛ぶペンギンは必見。',
        locationLink: 'https://goo.gl/maps/sunshine',
        imageUrl: 'https://images.unsplash.com/photo-1571474929767-17e997dc69a0?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '東京都豊島区東池袋3-1 サンシャインシティ ワールドインポートマートビル 屋上'
    },
    {
        id: '21', name: '鎌倉・小町通り', area: 'other', genre: 'gourmet', budget: 'mid', weather: 'sunny',
        description: '鶴岡八幡宮へ続く賑やかな通り。食べ歩きグルメやお土産選びが楽しい。',
        locationLink: 'https://goo.gl/maps/kamakura',
        imageUrl: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'cultural'],
        address: '神奈川県鎌倉市小町'
    },
    {
        id: '22', name: 'ムーミンバレーパーク', area: 'chiba_saitama', genre: 'activity', budget: 'mid', weather: 'sunny',
        description: '北欧の童話の世界を再現したテーマパーク。宮沢湖畔の自然も美しい。',
        locationLink: 'https://goo.gl/maps/moomin',
        imageUrl: 'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '埼玉県飯能市宮沢327-6'
    },
    {
        id: '23', name: '大江戸温泉物語 浦安万華郷', area: 'chiba_saitama', genre: 'onsen', budget: 'mid', weather: 'rainy_ok',
        description: '水着で入れる露天風呂エリアが充実。家族やカップルで楽しめる温泉テーマパーク。',
        locationLink: 'https://goo.gl/maps/urayasu',
        imageUrl: 'https://images.unsplash.com/photo-1563693998336-d8d472c9d266?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'relax'],
        address: '千葉県浦安市日の出7-3-12'
    },
    {
        id: '24', name: '根津美術館', area: '23ku', genre: 'art', budget: 'mid', weather: 'rainy_ok',
        description: '国宝・重要文化財を多数収蔵。美しい日本庭園も見どころ。',
        locationLink: 'https://goo.gl/maps/nezu',
        imageUrl: 'https://images.unsplash.com/photo-1621619856624-42fd0daf55e3?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都港区南青山6-5-1'
    },
    {
        id: '25', name: '東京タワー', area: '23ku', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: '東京のシンボル。メインデッキからの夜景や、足元のガラス床体験。',
        locationLink: 'https://goo.gl/maps/tokyotower',
        imageUrl: 'https://images.unsplash.com/photo-1542379653-b92dcb320087?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'exciting'],
        address: '東京都港区芝公園4-2-8'
    },
    {
        id: '26', name: '目黒寄生虫館', area: '23ku', genre: 'activity', budget: 'free', weather: 'rainy_ok',
        description: '世界でも珍しい寄生虫専門の博物館。マニアックだが知的好奇心が刺激される。',
        locationLink: 'https://goo.gl/maps/kiseichu',
        imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb07ee19810?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural'],
        address: '東京都目黒区下目黒4-1-1'
    },
    {
        id: '27', name: '谷中銀座商店街', area: '23ku', genre: 'gourmet', budget: 'low', weather: 'sunny',
        description: '下町情緒あふれる商店街。メンチカツを食べ歩きしながら、猫を探して散策。',
        locationLink: 'https://goo.gl/maps/yanaka',
        imageUrl: 'https://images.unsplash.com/photo-1579601700683-1466a9089f64?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都台東区谷中3-13-1'
    },
    {
        id: '28', name: '深大寺', area: 'tama', genre: 'gourmet', budget: 'low', weather: 'sunny',
        description: '調布にある古刹。湧き水が豊富で、周辺の「深大寺そば」は絶品。鬼太郎茶屋も。',
        locationLink: 'https://goo.gl/maps/jindaiji',
        imageUrl: 'https://images.unsplash.com/photo-1506456093867-b5ff8546fd2a?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都調布市深大寺元町5-15-1'
    },
    {
        id: '29', name: '猿島', area: 'yokohama', genre: 'activity', budget: 'mid', weather: 'sunny',
        description: '横須賀沖の無人島。旧軍施設の廃墟と自然が融合したラピュタのような世界観。',
        locationLink: 'https://goo.gl/maps/sarushima',
        imageUrl: 'https://images.unsplash.com/photo-1596395816997-6a2dc48d70b5?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'cultural'],
        address: '神奈川県横須賀市猿島'
    },
    {
        id: '30', name: '江戸東京たてもの園', area: 'tama', genre: 'art', budget: 'low', weather: 'rainy_ok',
        description: '歴史的建築物を移築・保存。ジブリ映画の参考にされた建物も多い。',
        locationLink: 'https://goo.gl/maps/tatemono',
        imageUrl: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都小金井市桜町3-7-1'
    }
];
