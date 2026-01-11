import { Spot } from '../types';

export const mockSpots: Spot[] = [
    // --- Established Spots (Part 1: 1-30) ---
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
        vibes: ['exciting'],
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
        vibes: ['exciting'],
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
    },
    {
        id: '31', name: '日原鍾乳洞', area: 'tama', genre: 'nature', budget: 'low', weather: 'rainy_ok',
        description: '奥多摩にある関東最大級の鍾乳洞。ライトアップされた幻想的な地下空間。',
        locationLink: 'https://goo.gl/maps/nippara',
        imageUrl: 'https://images.unsplash.com/photo-1499244571973-2e2e89136ca1?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '東京都西多摩郡奥多摩町日原1052'
    },
    {
        id: '32', name: '等々力渓谷', area: '23ku', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '23区内唯一の渓谷。駅近ながら都会の喧騒を忘れる静寂な空間。',
        locationLink: 'https://goo.gl/maps/todoroki',
        imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax'],
        address: '東京都世田谷区等々力1-22'
    },
    {
        id: '33', name: 'かっぱ橋道具街', area: '23ku', genre: 'shopping', budget: 'low', weather: 'rainy_ok',
        description: 'プロ用調理器具や精巧な食品サンプルが並ぶ専門店街。見ているだけで楽しい。',
        locationLink: 'https://goo.gl/maps/kappabashi',
        imageUrl: 'https://images.unsplash.com/photo-1590214619714-a906236b704c?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '東京都台東区松が谷3-18-2'
    },
    {
        id: '34', name: '鋸山（日本寺）', area: 'chiba_saitama', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: '断崖絶壁の「地獄のぞき」はスリル満点。ハイキングと絶景を楽しめる千葉の名所。',
        locationLink: 'https://goo.gl/maps/nokogiriyama',
        imageUrl: 'https://images.unsplash.com/photo-1579603091069-c6e3d233c7f9?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '千葉県安房郡鋸南町元名184'
    },
    {
        id: '35', name: '大宮精機・盆栽村', area: 'chiba_saitama', genre: 'art', budget: 'low', weather: 'sunny',
        description: '世界的に有名な盆栽の聖地。美術館や盆栽園を巡り、「BONSAI」の奥深さに触れる。',
        locationLink: 'https://goo.gl/maps/bonsai',
        imageUrl: 'https://images.unsplash.com/photo-1599598425947-4903a74636f3?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '埼玉県さいたま市北区盆栽町'
    },
    {
        id: '36', name: '東京都庭園美術館', area: '23ku', genre: 'art', budget: 'mid', weather: 'rainy_ok',
        description: '旧朝香宮邸を利用したアール・デコ様式の美術館。建物自体が芸術作品。',
        locationLink: 'https://goo.gl/maps/teien',
        imageUrl: 'https://images.unsplash.com/photo-1605634568656-7848c783c58f?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax', 'romantic'],
        address: '東京都港区白金台5-21-9'
    },
    {
        id: '37', name: '神保町古書店街', area: '23ku', genre: 'shopping', budget: 'low', weather: 'rainy_ok',
        description: '世界最大級の古書店街。レトロな喫茶店で買ったばかりの本を読む休日。',
        locationLink: 'https://goo.gl/maps/jinbocho',
        imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都千代田区神田神保町'
    },
    {
        id: '38', name: '六義園', area: '23ku', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '和歌の趣味を基調とした回遊式築山泉水庭園。しだれ桜や紅葉が有名。',
        locationLink: 'https://goo.gl/maps/rikugien',
        imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都文京区本駒込6-16-3'
    },
    {
        id: '39', name: '角川武蔵野ミュージアム', area: 'chiba_saitama', genre: 'art', budget: 'mid', weather: 'rainy_ok',
        description: '隈研吾建築の岩のような博物館。高さ8mの本棚「本棚劇場」は圧巻。',
        locationLink: 'https://goo.gl/maps/kadokawa',
        imageUrl: 'https://images.unsplash.com/photo-1524311583145-d519d77f80f6?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '埼玉県所沢市東所沢和田3-31-3'
    },
    {
        id: '40', name: '蔵前カフェ巡り', area: '23ku', genre: 'gourmet', budget: 'low', weather: 'rainy_ok',
        description: '「東京のブルックリン」と呼ばれるお洒落エリア。文房具屋やチョコレート工場も。',
        locationLink: 'https://goo.gl/maps/kuramae',
        imageUrl: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都台東区蔵前'
    },
    {
        id: '41', name: '小石川後楽園', area: '23ku', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '水戸黄門ゆかりの大名庭園。四季折々の景色が美しい都会のオアシス。',
        locationLink: 'https://goo.gl/maps/koishikawa',
        imageUrl: 'https://images.unsplash.com/photo-1558231872-4e0ab07ebf05?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都文京区後楽1-6-6'
    },
    {
        id: '42', name: '戸越銀座商店街', area: '23ku', genre: 'gourmet', budget: 'low', weather: 'sunny',
        description: '全長1.3kmの関東有数の長い商店街。コロッケや焼き鳥を食べ歩き。',
        locationLink: 'https://goo.gl/maps/togoshiginza',
        imageUrl: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '東京都品川区戸越'
    },
    {
        id: '43', name: '東京都現代美術館 (MOT)', area: '23ku', genre: 'art', budget: 'mid', weather: 'rainy_ok',
        description: '現代アートを中心に展示。清澄白河駅からのアプローチもお洒落な店が多い。',
        locationLink: 'https://goo.gl/maps/mot',
        imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3969105?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都江東区三好4-1-1'
    },
    {
        id: '44', name: '自由が丘スイーツフォレスト', area: '23ku', genre: 'gourmet', budget: 'low', weather: 'rainy_ok',
        description: 'スイーツのテーマパーク。韓国スイーツや有名パティシエの店が集結。',
        locationLink: 'https://goo.gl/maps/sweetsforest',
        imageUrl: 'https://images.unsplash.com/photo-1551024601-569d6f7e156d?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '東京都目黒区緑が丘2-25-7'
    },
    {
        id: '45', name: '東京ジャーミイ', area: '23ku', genre: 'art', budget: 'free', weather: 'rainy_ok',
        description: '日本最大級のモスク。オスマン様式の美しい建築とステンドグラスは必見。',
        locationLink: 'https://goo.gl/maps/camii',
        imageUrl: 'https://images.unsplash.com/photo-1588665046200-c9a8ac301908?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'romantic'],
        address: '東京都渋谷区大山町1-19'
    },
    {
        id: '46', name: '豪徳寺', area: '23ku', genre: 'activity', budget: 'free', weather: 'sunny',
        description: '招き猫発祥の地と言われるお寺。大小１０００体以上の招き猫が奉納されている。',
        locationLink: 'https://goo.gl/maps/gotokuji',
        imageUrl: 'https://images.unsplash.com/photo-1591870104675-5da2c8b0e719?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '東京都世田谷区豪徳寺2-24-7'
    },
    {
        id: '47', name: '代々木公園', area: '23ku', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '週末はイベントも多い広大な公園。ドッグランやサイクリングコースも完備。',
        locationLink: 'https://goo.gl/maps/yoyogipark',
        imageUrl: 'https://images.unsplash.com/photo-1596120536551-396a9282363d?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'relax'],
        address: '東京都渋谷区代々木神園町2-1'
    },
    {
        id: '48', name: '中野ブロードウェイ', area: '23ku', genre: 'shopping', budget: 'low', weather: 'rainy_ok',
        description: 'サブカルチャーの聖地。まんだらけ等のホビーショップが密集する混沌とした空間。',
        locationLink: 'https://goo.gl/maps/nakano',
        imageUrl: 'https://images.unsplash.com/photo-1620641113279-d170a4a6825c?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'cultural'],
        address: '東京都中野区中野5-52-15'
    },
    {
        id: '49', name: 'すみだ水族館', area: '23ku', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: 'スカイツリータウン内にある都市型水族館。クラゲ万華鏡トンネルが幻想的。',
        locationLink: 'https://goo.gl/maps/sumida-aq',
        imageUrl: 'https://images.unsplash.com/photo-1549488497-2965612d7c00?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '東京都墨田区押上1-1-2'
    },
    {
        id: '50', name: '不忍池弁天堂', area: '23ku', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '上野公園内にあるお堂。夏は蓮の花が一面に咲き誇る。',
        locationLink: 'https://goo.gl/maps/shinobazu',
        imageUrl: 'https://images.unsplash.com/photo-1565619624098-e7a935d25953?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都台東区上野公園2-1'
    },
    {
        id: '51', name: '国立科学博物館', area: '23ku', genre: 'art', budget: 'low', weather: 'rainy_ok',
        description: '日本館と地球館で一日中楽しめる。恐竜の化石や忠犬ハチ公の剥製がある。',
        locationLink: 'https://goo.gl/maps/kahaku',
        imageUrl: 'https://images.unsplash.com/photo-1518558997970-4ddc236affcd?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '東京都台東区上野公園7-20'
    },
    {
        id: '52', name: '浜離宮恩賜庭園', area: '23ku', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '潮入の池と二つの鴨場をもつ江戸時代の代表的な大名庭園。',
        locationLink: 'https://goo.gl/maps/hamarikyu',
        imageUrl: 'https://images.unsplash.com/photo-1590924409384-a4f6d4d12b07?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都中央区浜離宮庭園1-1'
    },
    {
        id: '53', name: 'おしなりくんの家', area: '23ku', genre: 'activity', budget: 'free', weather: 'rainy_ok',
        description: '押上・業平橋エリアのキャラクター「おしなりくん」の休憩所。下町ほっこりスポット。',
        locationLink: 'https://goo.gl/maps/oshinari',
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax'],
        address: '東京都墨田区業平2-15-6'
    },
    {
        id: '54', name: '世田谷パン祭り', area: '23ku', genre: 'gourmet', budget: 'low', weather: 'sunny',
        description: '世田谷公園周辺は美味しいパン屋の激戦区。パン屋巡りの散歩に。',
        locationLink: 'https://goo.gl/maps/setagaya-bread',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax'],
        address: '東京都世田谷区池尻1-5-27'
    },
    {
        id: '55', name: '東京ドームシティ アトラクションズ', area: '23ku', genre: 'activity', budget: 'mid', weather: 'sunny',
        description: '入園無料の遊園地。ジェットコースターや観覧車を都心で気軽に楽しめる。',
        locationLink: 'https://goo.gl/maps/tokyodome',
        imageUrl: 'https://images.unsplash.com/photo-1543527265-5b8d002f231e?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '東京都文京区後楽1-3-61'
    },
    {
        id: '56', name: '恵比寿ガーデンプレイス', area: '23ku', genre: 'shopping', budget: 'mid', weather: 'rainy_ok',
        description: '大人の街恵比寿のランドマーク。東京都写真美術館やヱビスビール記念館も隣接。',
        locationLink: 'https://goo.gl/maps/ebisu',
        imageUrl: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'shopping'],
        address: '東京都渋谷区恵比寿4-20'
    },
    {
        id: '57', name: '目黒川の桜並木', area: '23ku', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '春は桜の名所だが、新緑の季節の散歩も気持ちが良い。お洒落なカフェが沿道に多い。',
        locationLink: 'https://goo.gl/maps/meguroriver',
        imageUrl: 'https://images.unsplash.com/photo-1491795328994-3a521ce62c1e?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '東京都目黒区大橋から下目黒周辺'
    },
    {
        id: '58', name: '品川アクアパーク', area: '23ku', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: '音・光・映像と生きものが融合した最先端エンタメ水族館。イルカショーが凄い。',
        locationLink: 'https://goo.gl/maps/aquapark',
        imageUrl: 'https://images.unsplash.com/photo-1570119437936-f04b1c312788?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'romantic'],
        address: '東京都港区高輪4-10-30'
    },
    {
        id: '59', name: '神楽坂散策', area: '23ku', genre: 'gourmet', budget: 'mid', weather: 'sunny',
        description: '石畳の路地が残る粋な街。和カフェやフレンチの名店が多い。',
        locationLink: 'https://goo.gl/maps/kagurazaka',
        imageUrl: 'https://images.unsplash.com/photo-1542095360-1b2c4e207d57?auto=format&fit=crop&q=80&w=800',
        vibes: ['gourmet', 'cultural'],
        address: '東京都新宿区神楽坂'
    },
    {
        id: '60', name: '国立天文台三鷹キャンパス', area: 'tama', genre: 'activity', budget: 'free', weather: 'sunny',
        description: '緑豊かなキャンパス内で、大正時代の観測塔や最新の望遠鏡を見学できる。',
        locationLink: 'https://goo.gl/maps/naoj',
        imageUrl: 'https://images.unsplash.com/photo-1507421974799-281b676f2512?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都三鷹市大沢2-21-1'
    },
    {
        id: '61', name: '江戸東京博物館', area: '23ku', genre: 'art', budget: 'low', weather: 'rainy_ok',
        description: '江戸・東京の歴史と文化を実物大模型などで体感できる巨大博物館。',
        locationLink: 'https://goo.gl/maps/edotokyo',
        imageUrl: 'https://images.unsplash.com/photo-1597735399587-8c5c3756c2d1?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural'],
        address: '東京都墨田区横網1-4-1'
    },
    {
        id: '62', name: '多摩六都科学館', area: 'tama', genre: 'activity', budget: 'low', weather: 'rainy_ok',
        description: '世界最大級のプラネタリウムドームがある。体験型展示も充実。',
        locationLink: 'https://goo.gl/maps/tamarokuto',
        imageUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都西東京市芝久保町5-10-64'
    },
    {
        id: '63', name: 'よみうりランド', area: 'tama', genre: 'activity', budget: 'high', weather: 'sunny',
        description: '冬のジュエルミネーションは関東最大級。夏はプールも人気。',
        locationLink: 'https://goo.gl/maps/yomiuriland',
        imageUrl: 'https://images.unsplash.com/photo-1511222927054-d830b561c21d?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'romantic'],
        address: '東京都稲城市矢野口4015-1'
    },
    {
        id: '64', name: 'サンリオピューロランド', area: 'tama', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: '全天候型屋内テーマパーク。キティちゃんに会える。',
        locationLink: 'https://goo.gl/maps/puroland',
        imageUrl: 'https://images.unsplash.com/photo-1559419614-257a07747b08?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '東京都多摩市落合1-31'
    },
    {
        id: '65', name: '高幡不動尊', area: 'tama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '関東三大不動の一つ。あじさい祭りや紅葉の名所としても知られる。',
        locationLink: 'https://goo.gl/maps/takahatafudoson',
        imageUrl: 'https://images.unsplash.com/photo-1557409257-2e1d7436b76c?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '東京都日野市高幡733'
    },
    {
        id: '66', name: '野川公園', area: 'tama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '広大な芝生広場と自然観察園がある。のんびりピクニックに最適。',
        locationLink: 'https://goo.gl/maps/nogawapark',
        imageUrl: 'https://images.unsplash.com/photo-1563514227147-6d2ff63439b7?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax'],
        address: '東京都調布市野水1-2'
    },
    {
        id: '67', name: '京王百草園', area: 'tama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '梅の名所として有名。四季折々の草花と日本庭園を楽しめる。',
        locationLink: 'https://goo.gl/maps/mogusaen',
        imageUrl: 'https://images.unsplash.com/photo-1463321556093-6af950435150?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都日野市百草560'
    },
    {
        id: '68', name: 'COSTCO 多摩境', area: 'tama', genre: 'shopping', budget: 'mid', weather: 'rainy_ok',
        description: '会員制倉庫型店。巨大なピザやホットドッグを食べ、大量の食品を買う非日常感。',
        locationLink: 'https://goo.gl/maps/costco-tamasakai',
        imageUrl: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '東京都町田市小山ヶ丘3-6-1'
    },
    {
        id: '69', name: '小金井公園', area: 'tama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '都立公園の中でも最大規模。サイクリング、BBQ、ドッグランがある。',
        locationLink: 'https://goo.gl/maps/koganeipark',
        imageUrl: 'https://images.unsplash.com/photo-1565551227-2c1f01c22d4a?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'exciting'],
        address: '東京都小金井市関野町1-13-1'
    },
    {
        id: '70', name: '八景島シーパラダイス', area: 'yokohama', genre: 'activity', budget: 'high', weather: 'sunny',
        description: '水族館と遊園地が一体になった複合施設。海の上に突き出るジェットコースター。',
        locationLink: 'https://goo.gl/maps/seapara',
        imageUrl: 'https://images.unsplash.com/photo-1534064047402-ebcb5ceb969c?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'romantic'],
        address: '神奈川県横浜市金沢区八景島'
    },
    {
        id: '71', name: '野毛飲み歩き', area: 'yokohama', genre: 'gourmet', budget: 'mid', weather: 'rainy_ok',
        description: '横浜のディープな飲み屋街。焼鳥、ホルモン、個性的なバーがひしめく。',
        locationLink: 'https://goo.gl/maps/noge',
        imageUrl: 'https://images.unsplash.com/photo-1569650125816-e5704d9c4de4?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'gourmet'],
        address: '神奈川県横浜市中区野毛町'
    },
    {
        id: '72', name: '港の見える丘公園', area: 'yokohama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '横浜港を見下ろす絶好のロケーション。バラ園も有名。',
        locationLink: 'https://goo.gl/maps/minatonomieru',
        imageUrl: 'https://images.unsplash.com/photo-1589139268393-37604394017f?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'relax'],
        address: '神奈川県横浜市中区山手町114'
    },
    {
        id: '73', name: 'ズーラシア', area: 'yokohama', genre: 'activity', budget: 'low', weather: 'sunny',
        description: '世界の気候帯別に動物を展示する広大な動物園。オカピがいる。',
        locationLink: 'https://goo.gl/maps/zoorasia',
        imageUrl: 'https://images.unsplash.com/photo-1505148230895-7163565545a5?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'exciting'],
        address: '神奈川県横浜市旭区上白根町1175-1'
    },
    {
        id: '74', name: '新横浜ラーメン博物館', area: 'yokohama', genre: 'gourmet', budget: 'low', weather: 'rainy_ok',
        description: '昭和レトロな街並みの中で、全国の有名ラーメンを食べ比べできる。',
        locationLink: 'https://goo.gl/maps/raumen',
        imageUrl: 'https://images.unsplash.com/photo-1560233066-6f81c9ce13fa?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'gourmet'],
        address: '神奈川県横浜市港北区新横浜2-14-21'
    },
    {
        id: '75', name: '川崎工場夜景クルーズ', area: 'yokohama', genre: 'activity', budget: 'mid', weather: 'rainy_ok',
        description: 'SF映画のような工場地帯の夜景を船から鑑賞。',
        locationLink: 'https://goo.gl/maps/kawasakifactory',
        imageUrl: 'https://images.unsplash.com/photo-1565675004791-c5db1670942e?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'exciting'],
        address: '神奈川県川崎市川崎区'
    },
    {
        id: '76', name: '海ほたるPA', area: 'chiba_saitama', genre: 'gourmet', budget: 'low', weather: 'sunny',
        description: '東京湾アクアライン上のパーキングエリア。360度のオーシャンビュー。',
        locationLink: 'https://goo.gl/maps/umihotaru',
        imageUrl: 'https://images.unsplash.com/photo-1627736601449-366580554c46?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'relax'],
        address: '千葉県木更津市中島地先 海ほたる'
    },
    {
        id: '77', name: '鉄道博物館', area: 'chiba_saitama', genre: 'activity', budget: 'low', weather: 'rainy_ok',
        description: '実物車両の展示や運転シミュレータがある、鉄道ファンの聖地。',
        locationLink: 'https://goo.gl/maps/teppaku',
        imageUrl: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '埼玉県さいたま市大宮区大成町3-47'
    },
    {
        id: '78', name: 'ジョンソンタウン', area: 'chiba_saitama', genre: 'shopping', budget: 'mid', weather: 'sunny',
        description: '入間市にある米軍ハウス街。アメリカンなカフェや雑貨屋が並ぶ。',
        locationLink: 'https://goo.gl/maps/johnsontown',
        imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax'],
        address: '埼玉県入間市東町1-6-1'
    },
    {
        id: '79', name: '羊山公園', area: 'chiba_saitama', genre: 'nature', budget: 'low', weather: 'sunny',
        description: '秩父にある芝桜の名所。春にはピンクの絨毯が広がる。',
        locationLink: 'https://goo.gl/maps/hitsujiyama',
        imageUrl: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'romantic'],
        address: '埼玉県秩父市大宮6360'
    },
    {
        id: '80', name: 'マザー牧場', area: 'chiba_saitama', genre: 'nature', budget: 'mid', weather: 'sunny',
        description: '動物との触れ合い、味覚狩り、フラワー鑑賞が楽しめる観光牧場。',
        locationLink: 'https://goo.gl/maps/motherfarm',
        imageUrl: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting', 'relax'],
        address: '千葉県富津市田倉940-3'
    },
    {
        id: '81', name: 'IKEA Tokyo-Bay', area: 'chiba_saitama', genre: 'shopping', budget: 'mid', weather: 'rainy_ok',
        description: '北欧家具を見て回り、フードコートでミートボールを食べる。',
        locationLink: 'https://goo.gl/maps/ikea',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '千葉県船橋市浜町2-3-30'
    },
    {
        id: '82', name: 'メッツァビレッジ', area: 'chiba_saitama', genre: 'nature', budget: 'free', weather: 'sunny',
        description: '北欧のライフスタイルを体験できる施設。湖畔でカヌーやBBQができる。',
        locationLink: 'https://goo.gl/maps/metsa',
        imageUrl: 'https://images.unsplash.com/photo-1504280506508-36f20c01a5eb?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax'],
        address: '埼玉県飯能市宮沢327-6'
    },
    {
        id: '83', name: '箱根 彫刻の森美術館', area: 'other', genre: 'art', budget: 'mid', weather: 'sunny',
        description: '野外彫刻を中心とした美術館。自然の中でアートに触れる。足湯も。',
        locationLink: 'https://goo.gl/maps/hakone-openair',
        imageUrl: 'https://images.unsplash.com/photo-1566208594248-be24921503e0?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'relax'],
        address: '神奈川県足柄下郡箱根町二ノ平1121'
    },
    {
        id: '84', name: '熱海駅前足湯・商店街', area: 'other', genre: 'gourmet', budget: 'mid', weather: 'sunny',
        description: '新幹線ですぐ行ける温泉地。駅前で揚げかまぼこを食べ、足湯に浸かる。',
        locationLink: 'https://goo.gl/maps/atami',
        imageUrl: 'https://images.unsplash.com/photo-1572455919420-1a76f2d25080?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax'],
        address: '静岡県熱海市田原本町'
    },
    {
        id: '85', name: '国営ひたち海浜公園', area: 'other', genre: 'nature', budget: 'low', weather: 'sunny',
        description: 'ネモフィラやコキアの絶景で有名。レンタルサイクルで広い園内を回ろう。',
        locationLink: 'https://goo.gl/maps/hitachi',
        imageUrl: 'https://images.unsplash.com/photo-1490750967868-69c2201ea998?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic'],
        address: '茨城県ひたちなか市馬渡605-4'
    },
    {
        id: '86', name: '吉祥寺 ハモニカ横丁', area: 'tama', genre: 'gourmet', budget: 'low', weather: 'rainy_ok',
        description: '戦後の闇市ルーツの飲み屋街。細い路地に小さな店がひしめく。',
        locationLink: 'https://goo.gl/maps/harmonica',
        imageUrl: 'https://images.unsplash.com/photo-1582236359526-17b5b5c93c4e?auto=format&fit=crop&q=80&w=800',
        vibes: ['exciting'],
        address: '東京都武蔵野市吉祥寺本町1'
    },
    {
        id: '87', name: '下北沢 古着屋巡り', area: '23ku', genre: 'shopping', budget: 'low', weather: 'sunny',
        description: '数え切れないほどの古着屋が集まる街。カレーや演劇も有名。',
        locationLink: 'https://goo.gl/maps/shimokita',
        imageUrl: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=800',
        vibes: ['cultural', 'exciting'],
        address: '東京都世田谷区北沢'
    },
    {
        id: '88', name: '東京ミッドタウン日比谷', area: '23ku', genre: 'shopping', budget: 'mid', weather: 'rainy_ok',
        description: '日比谷公園を望むテラスがある複合施設。映画鑑賞の前後におすすめ。',
        locationLink: 'https://goo.gl/maps/hibiya-midtown',
        imageUrl: 'https://images.unsplash.com/photo-1502014822147-1aed80613797?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic'],
        address: '東京都千代田区有楽町1-1-2'
    },
    {
        id: '89', name: 'ブルーノート東京', area: '23ku', genre: 'activity', budget: 'high', weather: 'rainy_ok',
        description: '南青山にあるジャズクラブ。一流アーティストの演奏と食事を楽しめる大人の空間。',
        locationLink: 'https://goo.gl/maps/bluenote',
        imageUrl: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800',
        vibes: ['romantic', 'cultural'],
        address: '東京都港区南青山6-3-16'
    },
    {
        id: '90', name: 'BOOK AND BED TOKYO', area: '23ku', genre: 'relax', budget: 'mid', weather: 'rainy_ok',
        description: '「泊まれる本屋」がコンセプト。本棚の中で読書しながら寝落ちする幸せ。',
        locationLink: 'https://goo.gl/maps/bookandbed',
        imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
        vibes: ['relax', 'cultural'],
        address: '東京都新宿区歌舞伎町1-27-5'
    }
];
