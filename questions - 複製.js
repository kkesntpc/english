(function() {
  const RAW_VOCAB = [
    // Level 1: 低年級
    ["單字-A.數字 (Numbers)", 1, "zero", "0", ["一", "二", "三"]],
    ["單字-A.數字 (Numbers)", 1, "one", "一", ["頭", "護理師", "牛"]],
    ["單字-A.數字 (Numbers)", 1, "two", "二", ["爺爺", "學校", "短褲"]],
    ["單字-A.數字 (Numbers)", 1, "three", "三", ["十二", "學生", "頭髮"]],
    ["單字-A.數字 (Numbers)", 1, "four", "四", ["二", "顏色", "九"]],
    ["單字-A.數字 (Numbers)", 1, "five", "五", ["一", "葡萄", "狐狸"]],
    ["單字-A.數字 (Numbers)", 1, "six", "六", ["銀行", "男孩", "香蕉"]],
    ["單字-A.數字 (Numbers)", 1, "seven", "七", ["兔子", "三明治", "美術"]],
    ["單字-A.數字 (Numbers)", 1, "eight", "八", ["母雞", "黑色", "貓"]],
    ["單字-A.數字 (Numbers)", 1, "nine", "九", ["十二", "科學", "美術"]],
    ["單字-A.數字 (Numbers)", 1, "ten", "十", ["週", "護理師", "貓"]],
    ["單字-A.數字 (Numbers)", 1, "eleven", "十一", ["茶", "貓", "蜜蜂"]],
    ["單字-A.數字 (Numbers)", 1, "twelve", "十二", ["青蛙", "白色", "六"]],
    ["單字-A.數字 (Numbers)", 1, "thirty", "三十", ["媽媽", "八", "天"]],

    ["單字-B.顏色 (Colors)", 1, "color", "顏色", ["國王", "男孩", "香蕉"]],
    ["單字-B.顏色 (Colors)", 1, "black", "黑色", ["山羊", "老虎", "四"]],
    ["單字-B.顏色 (Colors)", 1, "blue", "藍色", ["爸爸", "蛋", "洋裝"]],
    ["單字-B.顏色 (Colors)", 1, "green", "綠色", ["狐狸", "果汁", "媽媽"]],
    ["單字-B.顏色 (Colors)", 1, "red", "紅色", ["六", "洋裝", "駕駛員"]],
    ["單字-B.顏色 (Colors)", 1, "white", "白色", ["鼻子", "星期四", "黃色"]],
    ["單字-B.顏色 (Colors)", 1, "yellow", "黃色", ["二", "兄弟", "耳朵"]],

    ["單字-E.身體部位 (Body Parts)", 1, "head", "頭", ["斑馬", "紅色", "蜜蜂"]],
    ["單字-E.身體部位 (Body Parts)", 1, "face", "臉", ["七", "青蛙", "歌手"]],
    ["單字-E.身體部位 (Body Parts)", 1, "hair", "頭髮", ["狐狸", "黑色", "星期五"]],
    ["單字-E.身體部位 (Body Parts)", 1, "eye", "眼睛", ["週", "果汁", "果醬"]],
    ["單字-E.身體部位 (Body Parts)", 1, "ear", "耳朵", ["一", "桌子", "朋友"]],
    ["單字-E.身體部位 (Body Parts)", 1, "nose", "鼻子", ["鳥", "米飯", "男孩"]],
    ["單字-E.身體部位 (Body Parts)", 1, "mouth", "嘴巴", ["鳥", "洋裝", "十一"]],
    ["單字-E.身體部位 (Body Parts)", 1, "hand", "手", ["星期三", "裙子", "公園"]],
    ["單字-E.身體部位 (Body Parts)", 1, "leg", "腿", ["葡萄", "夜晚", "斑馬"]],
    ["單字-E.身體部位 (Body Parts)", 1, "neck", "脖子", ["音樂", "三", "醫院"]],
    ["單字-E.身體部位 (Body Parts)", 1, "bone", "骨頭", ["科學", "爸爸", "女孩"]],

    ["單字-H.動物 (Animals)", 1, "cat", "貓", ["姐妹", "腿", "背心"]],
    ["單字-H.動物 (Animals)", 1, "dog", "狗", ["鴨", "葡萄", "茶"]],
    ["單字-H.動物 (Animals)", 1, "bird", "鳥", ["圖書館", "牛", "鉛筆"]],
    ["單字-H.動物 (Animals)", 1, "fish", "魚", ["黑色", "筆", "牛奶"]],
    ["單字-H.動物 (Animals)", 1, "frog", "青蛙", ["星期四", "老鼠", "科學"]],
    ["單字-H.動物 (Animals)", 1, "turtle", "烏龜", ["週", "五", "手"]],
    ["單字-H.動物 (Animals)", 1, "rabbit", "兔子", ["可樂", "廚房", "橡皮擦"]],
    ["單字-H.動物 (Animals)", 1, "monkey", "猴子", ["爸爸", "火腿", "果醬"]],

    // Level 2: 中年級
    ["單字-C.星期與時間 (Days & Time)", 2, "Monday", "星期一", ["奶奶", "零", "孩子"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "Tuesday", "星期二", ["包包", "學生", "鳥"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "Wednesday", "星期三", ["烏龜", "筆", "熱狗"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "Thursday", "星期四", ["黑色", "桌子", "麥克筆"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "Friday", "星期五", ["頭髮", "市場", "爺爺"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "Saturday", "星期六", ["熱狗", "骨頭", "狐狸"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "Sunday", "星期日", ["三", "媽媽", "姐妹"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "day", "天 / 日子", ["學校", "葡萄", "魚"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "week", "週 / 星期", ["家", "山羊", "蘋果"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "morning", "早晨", ["柳橙", "科學", "斑馬"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "night", "夜晚", ["母雞", "烏龜", "柳橙"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "today", "今天", ["週", "火腿", "護理師"]],
    ["單字-C.星期與時間 (Days & Time)", 2, "yesterday", "昨天", ["駕駛員", "週", "長褲"]],

    ["單字-D.家人與職業 (People & Occupations)", 2, "grandfather", "爺爺 / 外公", ["十一", "四", "耳朵"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "grandmother", "奶奶 / 外婆", ["四", "臉", "頭髮"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "father", "爸爸", ["腿", "牛", "爺爺"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "mother", "媽媽", ["狗", "醫院", "果汁"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "brother", "兄弟", ["裙子", "市場", "狐狸"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "sister", "姐妹", ["豬", "黑色", "三十"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "boy", "男孩", ["體育", "橡皮擦", "十"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "girl", "女孩", ["臥室", "早餐", "早晨"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "child", "孩子", ["學生", "爺爺", "螞蟻"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "teacher", "老師", ["動物園", "二", "教堂"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "student", "學生", ["朋友", "十", "黑色"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "doctor", "醫生", ["腿", "茶", "學校"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "nurse", "護理師", ["零", "夜晚", "短褲"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "driver", "駕駛員", ["學生", "客廳", "醫生"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "singer", "歌手", ["市場", "椅子", "臉"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "player", "運動員", ["臥室", "豬", "蜘蛛"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "friend", "朋友", ["四", "背心", "臉"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "king", "國王", ["四", "桌子", "鉛筆"]],
    ["單字-D.家人與職業 (People & Occupations)", 2, "queen", "皇后", ["天", "山羊", "火腿"]],

    ["單字-F.衣物與穿著 (Clothes)", 2, "dress", "洋裝", ["眼睛", "白色", "葡萄"]],
    ["單字-F.衣物與穿著 (Clothes)", 2, "skirt", "裙子", ["桌子", "爸爸", "七"]],
    ["單字-F.衣物與穿著 (Clothes)", 2, "T-shirt", "T恤", ["電腦", "體育", "臉"]],
    ["單字-F.衣物與穿著 (Clothes)", 2, "pants", "長褲", ["馬", "美術", "牛仔褲"]],
    ["單字-F.衣物與穿著 (Clothes)", 2, "shorts", "短褲", ["朋友", "黃色", "醫院"]],
    ["單字-F.衣物與穿著 (Clothes)", 2, "jeans", "牛仔褲", ["音樂", "馬", "可樂"]],
    ["單字-F.衣物與穿著 (Clothes)", 2, "jacket", "夾克", ["數學", "青蛙", "藍色"]],
    ["單字-F.衣物與穿著 (Clothes)", 2, "vest", "背心", ["國王", "歌手", "頭"]],
    ["單字-F.衣物與穿著 (Clothes)", 2, "shoes", "鞋子", ["頭髮", "英文", "星期五"]],

    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "box", "箱子", ["橡皮擦", "斑馬", "二"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "bag", "包包", ["熱狗", "狐狸", "學校"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "book", "書", ["頭", "星期二", "蜘蛛"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "notebook", "筆記本", ["男孩", "家", "蜘蛛"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "pencil", "鉛筆", ["鼻子", "女孩", "浴室"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "pen", "筆", ["科學", "電腦", "藍色"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "marker", "麥克筆", ["漢堡", "米飯", "脖子"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "eraser", "橡皮擦", ["昨天", "週", "鞋子"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "ruler", "尺", ["十二", "三十", "螞蟻"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "computer", "電腦", ["裙子", "星期四", "猴子"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "chair", "椅子", ["老師", "圖書館", "米飯"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "desk", "書桌", ["牛", "桌子", "豬"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "table", "桌子", ["可樂", "蘋果", "貓"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "art", "美術", ["四", "科學", "鞋子"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "English", "英文", ["體育", "洋裝", "駕駛員"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "math", "數學", ["老師", "市場", "白色"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "music", "音樂", ["客廳", "顏色", "八"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "PE", "體育", ["青蛙", "國王", "黑色"]],
    ["單字-G.學校、用品與學科 (School, Supplies & Subjects)", 2, "science", "科學", ["爺爺", "蜘蛛", "皇后"]],

    ["單字-H.動物 (Animals)", 2, "ant", "螞蟻", ["烏龜", "腿", "媽媽"]],
    ["單字-H.動物 (Animals)", 2, "bee", "蜜蜂", ["十一", "狐狸", "音樂"]],
    ["單字-H.動物 (Animals)", 2, "duck", "鴨", ["一", "狐狸", "黑色"]],
    ["單字-H.動物 (Animals)", 2, "fox", "狐狸", ["裙子", "國王", "青蛙"]],
    ["單字-H.動物 (Animals)", 2, "goat", "山羊", ["脖子", "九", "星期五"]],
    ["單字-H.動物 (Animals)", 2, "hen", "母雞", ["鞋子", "黑色", "馬"]],
    ["單字-H.動物 (Animals)", 2, "horse", "馬", ["T恤", "筆", "蜜蜂"]],
    ["單字-H.動物 (Animals)", 2, "lion", "獅子", ["三十", "背心", "歌手"]],
    ["單字-H.動物 (Animals)", 2, "mouse", "老鼠", ["箱子", "茶", "狗"]],
    ["單字-H.動物 (Animals)", 2, "pig", "豬", ["蜜蜂", "鴨", "火腿"]],
    ["單字-H.動物 (Animals)", 2, "spider", "蜘蛛", ["公園", "星期一", "護理師"]],
    ["單字-H.動物 (Animals)", 2, "tiger", "老虎", ["皇后", "蜜蜂", "頭"]],
    ["單字-H.動物 (Animals)", 2, "zebra", "斑馬", ["脖子", "裙子", "昨天"]],
    ["單字-H.動物 (Animals)", 2, "ox", "公牛", ["孩子", "三", "漢堡"]],

    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "egg", "蛋", ["蘋果", "姐妹", "八"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "cake", "蛋糕", ["銀行", "早餐", "今天"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "pizza", "比薩", ["柳橙", "二", "書桌"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "rice", "米飯", ["鞋子", "學生", "奶奶"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "sandwich", "三明治", ["黃色", "奶奶", "箱子"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "hamburger", "漢堡", ["醫生", "運動員", "國王"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "hot dog", "熱狗", ["鴨", "學生", "四"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "milk", "牛奶", ["熱狗", "老鼠", "冰淇淋"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "tea", "茶", ["脖子", "駕駛員", "烏龜"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "juice", "果汁", ["果醬", "鴨", "熱狗"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "water", "水", ["姐妹", "尺", "果汁"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "cola", "可樂", ["早餐", "兔子", "學校"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "ice cream", "冰淇淋", ["猴子", "脖子", "八"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "ham", "火腿", ["科學", "蘋果", "兄弟"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "jam", "果醬", ["星期六", "比薩", "歌手"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "breakfast", "早餐", ["公園", "白色", "鼻子"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "apple", "蘋果", ["星期三", "早餐", "蜜蜂"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "banana", "香蕉", ["醫院", "可樂", "狐狸"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "orange", "柳橙", ["孩子", "漢堡", "黑色"]],
    ["單字-I.食物、飲料與水果 (Food, Drinks & Fruits)", 2, "grape", "葡萄", ["市場", "桌子", "老師"]],

    // Level 3: 高年級
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "home", "家", ["二", "早餐", "頭髮"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "school", "學校", ["週", "米飯", "爸爸"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "zoo", "動物園", ["運動員", "醫院", "銀行"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "park", "公園", ["媽媽", "美術", "尺"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "kitchen", "廚房", ["筆", "耳朵", "星期三"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "bedroom", "臥室", ["母雞", "姐妹", "星期四"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "bathroom", "浴室", ["猴子", "美術", "爸爸"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "living room", "客廳", ["護理師", "橡皮擦", "八"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "bank", "銀行", ["耳朵", "駕駛員", "水"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "church", "教堂", ["學校", "早晨", "夾克"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "hospital", "醫院", ["蘋果", "奶奶", "紅色"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "library", "圖書館", ["科學", "書桌", "山羊"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "market", "市場", ["公園", "客廳", "麵包"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "supermarket", "超級市場", ["圖書館", "醫院", "銀行"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "post office", "郵局", ["教堂", "學校", "廚房"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "shop", "店鋪 / 商店", ["動物園", "臥室", "早晨"]],
    ["單字-J.地點與場所 (Places, Rooms & Buildings)", 3, "store", "店家 / 商店", ["浴室", "公園", "牛奶"]]
  ];

  const RAW_CLASSROOM = [
    ["Look!", "看", ["早安", "排隊", "做得好"]],
    ["Listen!", "聽", ["看", "停", "坐下"]],
    ["Stop.", "停", ["聽", "請", "小心"]],
    ["Sorry. / Excuse me.", "對不起 / 不好意思", ["謝謝", "不客氣", "再見"]],
    ["Stand up.", "站起來", ["坐下", "舉手", "手放下"]],
    ["Sit down.", "坐下", ["站起來", "排隊", "安靜"]],
    ["Raise your hand.", "舉手", ["手放下", "站起來", "坐下"]],
    ["Be quiet!", "安靜", ["做得好", "小心", "準備好了嗎?"]],
    ["Open your book.", "打開書", ["關上書", "把書拿出來", "把書收起來"]],
    ["Close your book.", "關上書", ["打開書", "把書拿出來", "把書收起來"]],
    ["Good job!", "做得好", ["早安", "把書收起來", "讓我們來玩吧"]],
    ["Try again.", "再試試看", ["看", "過來這裡", "站起來"]],
    ["Take out your book.", "把書拿出來", ["再試試看", "謝謝", "看"]],
    ["Good morning.", "早安", ["再見", "哈囉/嗨/嘿", "午安"]],
    ["Put your book away.", "把書收起來", ["小心", "做得好", "你還好嗎?"]],
    ["Good afternoon.", "午安", ["停", "排隊", "把書拿出來"]],
    ["Are you OK?", "你還好嗎?", ["打開書", "午安", "關上書"]],
    ["Thank you.", "謝謝", ["舉手", "聽", "午安"]],
    ["Are you ready?", "準備好了嗎?", ["坐下", "讓我們來玩吧", "我不知道"]],
    ["You're welcome.", "不客氣", ["安靜", "做得好", "小心"]],
    ["Please.", "請", ["再試試看", "哈囉/嗨/嘿", "關上書"]],
    ["Let's play.", "讓我們來玩吧", ["站起來", "不客氣", "過來這裡"]],
    ["Be careful.", "小心", ["手放下", "舉手", "哈囉/嗨/嘿"]],
    ["Hello! / Hi! / Hey!", "哈囉/嗨/嘿", ["坐下", "你還好嗎?", "準備好了嗎?"]],
    ["Bye! / Good-bye. / See you.", "再見", ["過來這裡", "手放下", "請"]],
    ["I don't know.", "我不知道", ["排隊", "請", "再試試看"]],
    ["Line up.", "排隊", ["哈囉/嗨/嘿", "站起來", "把書收起來"]],
    ["Nice to meet you.", "很高興認識你", ["小心", "把書收起來", "做得好"]],
    ["Come here.", "過來這裡", ["很高興認識你", "讓我們來玩吧", "謝謝"]],
    ["Put down your hand.", "手放下", ["打開書", "很高興認識你", "坐下"]]
  ];

  const RAW_SENTENCES = [
    ["How are you?", "I'm fine. Thank you.", "你感覺如何?", ["I'm ten years old.", "My name is Bob.", "It's Monday."]],
    ["How old are you?", "I'm ten years old.", "你幾歲?", ["I can swim.", "I'm in the kitchen.", "It is sunny."]],
    ["How's the weather?", "It is sunny and hot.", "天氣如何?", ["My name is Bob.", "Yes, I am.", "It's a pencil."]],
    ["What's your name?", "My name is Bob.", "你的名字是什麼?", ["I'm fine. Thank you.", "I can draw.", "It's five o'clock."]],
    ["What's this?", "It's an eraser.", "這是什麼?", ["It's red.", "It's five o'clock.", "He is my dad."]],
    ["What color is it?", "It's red.", "它是什麼顏色?", ["It's five o'clock.", "I like pizza.", "No, it isn't."]],
    ["What time is it?", "It's five o'clock.", "現在幾點?", ["I'm in the living room.", "It is sunny.", "I want an orange."]],
    ["Who's he?", "He is my father.", "他是誰?", ["She is my mother.", "My name is Bob.", "It's a cat."]],
    ["Is she a student?", "Yes, she is.", "她是不是一個學生?", ["Yes, he is.", "Yes, she can.", "Yes, I am."]],
    ["Are you happy?", "No, I'm not.", "你快樂嗎?", ["No, I don't.", "No, I can't.", "No, it isn't."]],
    ["Is this a pencil?", "Yes, it is.", "這是不是一枝鉛筆?", ["Yes, I do.", "Yes, I can.", "Yes, she is."]],
    ["Where is the cat?", "It's in the box.", "貓在哪裡?", ["It's on the box.", "It's under the box.", "It's by the box."]],
    ["Where are you?", "I'm in the living room.", "你在哪裡?", ["I'm reading.", "I like pizza.", "I want an orange."]],
    ["What are you doing?", "I'm reading.", "你正在做什麼?", ["What can you do?", "What do you want?", "What do you like?"]],
    ["What can you do?", "I can draw.", "你會做什麼?", ["I'm reading.", "I want an orange.", "I like pizza."]],
    ["Can you swim?", "No, I can't.", "你會不會游泳?", ["Yes, I do.", "No, I'm not.", "Yes, I can."]],
    ["What do you want?", "I want an orange.", "你想要什麼?", ["I can draw.", "I'm fine.", "She is my mother."]],
    ["What do you like?", "I like pizza.", "你喜歡什麼?", ["I want pizza.", "I can make pizza.", "I have pizza."]],
    ["Do you like apples?", "Yes, I do.", "你喜不喜歡蘋果?", ["Yes, I can.", "Yes, I am.", "Yes, it is."]],
    ["What day is today?", "It's Monday.", "今天星期幾?", ["It's five o'clock.", "It's sunny.", "It's red."]]
  ];

  function pad3(num) { return String(num).padStart(3, '0'); }

  function sortOpts(arr, correct) {
    let sorted = [...arr].sort((a, b) => a.length - b.length || a.localeCompare(b));
    let idx = sorted.indexOf(correct);
    return { options: sorted, answer: String.fromCharCode(65 + idx) };
  }

  let questions = [];
  let qId = 1;

  RAW_VOCAB.forEach(([ch, levelNum, w, c, distractors]) => {
    let gKey = "G-" + pad3(qId);

    let optA = sortOpts([c, ...distractors], c);
    questions.push({
      id: "Q-" + pad3(qId) + "A", groupKey: gKey, version: "A", type: "MC",
      chapter: ch, gradeLevel: Number(levelNum),
      question: `請問英文單字 "${w}" 的中文意思是？`,
      options: optA.options, answer: optA.answer,
      explanation: `【版本A解析】"${w}" 的中文意思是「${c}」。`
    });

    let otherWords = Array.from(new Set(RAW_VOCAB.filter(x => x[2] !== w).map(x => x[2])));
    let distB = [
      otherWords[(qId * 3) % otherWords.length],
      otherWords[(qId * 7 + 1) % otherWords.length],
      otherWords[(qId * 11 + 2) % otherWords.length]
    ];
    let optB = sortOpts([w, ...distB], w);
    questions.push({
      id: "Q-" + pad3(qId) + "B", groupKey: gKey, version: "B", type: "MC",
      chapter: ch, gradeLevel: Number(levelNum),
      question: `請問中文「${c}」對應的英文單字是哪一個？`,
      options: optB.options, answer: optB.answer,
      explanation: `【版本B解析】「${c}」的英文單字是 "${w}"。`
    });

    qId++;
  });

  RAW_CLASSROOM.forEach(([phrase, meaning, distractors]) => {
    let gKey = "G-" + pad3(qId);

    let optA = sortOpts([meaning, ...distractors], meaning);
    questions.push({
      id: "Q-" + pad3(qId) + "A", groupKey: gKey, version: "A", type: "MC",
      chapter: "第二部分：教室日常用語", gradeLevel: 1,
      question: `當聽到或看到英文 "${phrase}" 時，意思是？`,
      options: optA.options, answer: optA.answer,
      explanation: `【版本A解析】"${phrase}" 在教室用語中的意思是「${meaning}」。`
    });

    let optB = sortOpts(["Listen!", "Look!", "Stop.", phrase], phrase);
    questions.push({
      id: "Q-" + pad3(qId) + "B", groupKey: gKey, version: "B", type: "MC",
      chapter: "第二部分：教室日常用語", gradeLevel: 1,
      question: `當你想表達「${meaning}」時，英文應該說：`,
      options: optB.options, answer: optB.answer,
      explanation: `【版本B解析】表達「${meaning}」為 "${phrase}"。`
    });

    qId++;
  });

  RAW_SENTENCES.forEach(([qStr, aStr, qZh, distractors]) => {
    let gKey = "G-" + pad3(qId);

    let optA = sortOpts([aStr, ...distractors.slice(0, 3)], aStr);
    questions.push({
      id: "Q-" + pad3(qId) + "A", groupKey: gKey, version: "A", type: "MC",
      chapter: "第三部分：基本問答核心句型", gradeLevel: 3,
      question: `問句「${qStr}」請問下列何者為最適當的回答？`,
      options: optA.options, answer: optA.answer,
      explanation: `【版本A解析】"${qStr}" 的適當回答為 "${aStr}"。`
    });

    let optB = sortOpts(["How old are you?", "How's the weather?", "What's your name?", qStr], qStr);
    questions.push({
      id: "Q-" + pad3(qId) + "B", groupKey: gKey, version: "B", type: "MC",
      chapter: "第三部分：基本問答核心句型", gradeLevel: 3,
      question: `當別人回答 "${aStr}" 時，對應的問句是：`,
      options: optB.options, answer: optB.answer,
      explanation: `【版本B解析】回答 "${aStr}" 對應的問句為 "${qStr}"。`
    });

    qId++;
  });

  window.DATA = { questions: questions };
})();