// build.js - 國光英雄網 題目自動生成腳本
const fs = require('fs');

// 完整單字庫 (可持續擴充)
// 格式: [章節, 年級難度(1:低, 2:中, 3:高), 英文單字, 正確中文, 詞性/補充例句說明]
const VOCAB_DATABASE = [
  // A. 數字與時間
  ["單字-A.數字 (Numbers)", 1, "zero", "零", "0 的英文，代表沒有數量。"],
  ["單字-A.數字 (Numbers)", 1, "one", "一", "基數 1，複數形需注意名詞加 s。"],
  ["單字-A.數字 (Numbers)", 1, "two", "二", "基數 2，發音與 to, too 相同。"],
  ["單字-A.數字 (Numbers)", 1, "three", "三", "基數 3，注意 th 發音需咬舌。"],
  ["單字-A.數字 (Numbers)", 1, "four", "四", "基數 4，注意與 fourteen (14) 和 forty (40) 的拼法差異。"],
  ["單字-A.數字 (Numbers)", 1, "five", "五", "基數 5，序數形為 fifth。"],
  ["單字-A.數字 (Numbers)", 1, "six", "六", "基數 6，加 teen 變成 sixteen (16)。"],
  ["單字-A.數字 (Numbers)", 1, "seven", "七", "基數 7。"],
  ["單字-A.數字 (Numbers)", 1, "eight", "八", "基數 8，注意與 height (高度) 拼法不同。"],
  ["單字-A.數字 (Numbers)", 1, "nine", "九", "基數 9，加 teen 變成 nineteen (19)。"],
  ["單字-A.數字 (Numbers)", 1, "ten", "十", "基數 10。"],
  ["單字-A.數字 (Numbers)", 1, "eleven", "十一", "基數 11。"],
  ["單字-A.數字 (Numbers)", 1, "twelve", "十二", "基數 12，序數形為 twelfth。"],
  ["單字-A.數字 (Numbers)", 1, "thirty", "三十", "數字 30，常與 thirteen (13) 混淆。"],

  // B. 顏色與形容詞
  ["單字-B.顏色 (Colors)", 1, "color", "顏色", "名詞，美式拼法為 color，英式為 colour。"],
  ["單字-B.顏色 (Colors)", 1, "black", "黑色", "形容詞/名詞，黑色的。"],
  ["單字-B.顏色 (Colors)", 1, "blue", "藍色", "形容詞/名詞，藍色；也有「憂鬱的」意思。"],
  ["單字-B.顏色 (Colors)", 1, "green", "綠色", "形容詞/名詞，綠色；常象徵自然與環保。"],
  ["單字-B.顏色 (Colors)", 1, "red", "紅色", "形容詞/名詞，紅色。"],
  ["單字-B.顏色 (Colors)", 1, "white", "白色", "形容詞/名詞，白色。"],
  ["單字-B.顏色 (Colors)", 1, "yellow", "黃色", "形容詞/名詞，黃色。"],

  // C. 星期與時間
  ["單字-C.星期與時間 (Days & Time)", 2, "Monday", "星期一", "專有名詞，字首 M 必須大寫。"],
  ["單字-C.星期與時間 (Days & Time)", 2, "Tuesday", "星期二", "專有名詞，字首 T 必須大寫，勿與 Thursday 混淆。"],
  ["單字-C.星期與時間 (Days & Time)", 2, "Wednesday", "星期三", "專有名詞，注意 d 不發音。"],
  ["單字-C.星期與時間 (Days & Time)", 2, "Thursday", "星期四", "專有名詞，字首 Th 發音需咬舌。"],
  ["單字-C.星期與時間 (Days & Time)", 2, "Friday", "星期五", "專有名詞，週末前的最後一個工作天。"],
  ["單字-C.星期與時間 (Days & Time)", 2, "Saturday", "星期六", "專有名詞，週末的第一天。"],
  ["單字-C.星期與時間 (Days & Time)", 2, "Sunday", "星期日", "專有名詞，一週的第一天或最後一天。"],
  ["單字-C.星期與時間 (Days & Time)", 2, "today", "今天", "副詞/名詞，指現今這一天。"],
  ["單字-C.星期與時間 (Days & Time)", 2, "yesterday", "昨天", "副詞/名詞，過去的這一天。"],

  // D. 家人與職業
  ["單字-D.家人與職業 (People & Occupations)", 2, "grandfather", "爺爺 / 外公", "名詞，亦可簡稱為 grandpa。"],
  ["單字-D.家人與職業 (People & Occupations)", 2, "grandmother", "奶奶 / 外婆", "名詞，亦可簡稱為 grandma。"],
  ["單字-D.家人與職業 (People & Occupations)", 2, "father", "爸爸", "名詞，亦可簡稱為 dad。"],
  ["單字-D.家人與職業 (People & Occupations)", 2, "mother", "媽媽", "名詞，亦可簡稱為 mom。"],
  ["單字-D.家人與職業 (People & Occupations)", 2, "teacher", "老師", "名詞，來自動詞 teach (教導) + er。"],
  ["單字-D.家人與職業 (People & Occupations)", 2, "student", "學生", "名詞，指在學校學習的人。"],
  ["單字-D.家人與職業 (People & Occupations)", 2, "doctor", "醫生", "名詞，在醫院診治病人的人。"],
  ["單字-D.家人與職業 (People & Occupations)", 2, "nurse", "護理師", "名詞，協助醫生照顧病人的人。"],

  // E. 身體部位
  ["單字-E.身體部位 (Body Parts)", 1, "head", "頭", "名詞，身體最上方的部位。"],
  ["單字-E.身體部位 (Body Parts)", 1, "face", "臉", "名詞，面孔。"],
  ["單字-E.身體部位 (Body Parts)", 1, "eye", "眼睛", "名詞，複數為 eyes。"],
  ["單字-E.身體部位 (Body Parts)", 1, "ear", "耳朵", "名詞，複數為 ears。"],
  ["單字-E.身體部位 (Body Parts)", 1, "nose", "鼻子", "名詞，呼吸與嗅覺器官。"],
  ["單字-E.身體部位 (Body Parts)", 1, "mouth", "嘴巴", "名詞，說話與進食器官。"]
];

// 輔助函式：數字補零
function pad3(num) {
  return String(num).padStart(3, '0');
}

// 輔助函式：洗牌
function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 產生高質感題庫
function generateQuestions() {
  let questions = [];
  let groupIndex = 1;

  VOCAB_DATABASE.forEach(([chapter, gradeLevel, word, meaning, note]) => {
    let groupKey = "G-" + pad3(groupIndex);

    // --- 尋找聰明的干擾項 (Distractors) ---
    // 1. 同章節其他單字作為強干擾
    let sameChapterVocab = VOCAB_DATABASE.filter(v => v[0] === chapter && v[2] !== word);
    // 2. 全部單字庫
    let otherVocab = VOCAB_DATABASE.filter(v => v[2] !== word);

    // Pick 3 中文干擾項 (用於 Version A: 英譯中)
    let zhDistractors = [];
    let poolZH = shuffle(sameChapterVocab.length >= 3 ? sameChapterVocab : otherVocab);
    zhDistractors = poolZH.slice(0, 3).map(v => ({ word: v[2], meaning: v[3] }));

    // Pick 3 英文干擾項 (用於 Version B: 中譯英)
    let enDistractors = [];
    let poolEN = shuffle(sameChapterVocab.length >= 3 ? sameChapterVocab : otherVocab);
    enDistractors = poolEN.slice(0, 3).map(v => ({ word: v[2], meaning: v[3] }));

    // ==========================================
    // VERSION A: 英譯中與情境文意理解 (Complexity UP)
    // ==========================================
    let rawOptionsA = [
      { text: meaning, isCorrect: true, word: word, note: note },
      ...zhDistractors.map(d => ({ text: d.meaning, isCorrect: false, word: d.word, note: '其他單字選項' }))
    ];
    let shuffledA = shuffle(rawOptionsA);
    let correctIdxA = shuffledA.findIndex(o => o.isCorrect);
    let correctAnsLetterA = String.fromCharCode(65 + correctIdxA);

    // 構建完整解析 A（逐一解說各選項）
    let explanationA = `【正確答案 (${correctAnsLetterA})】"${word}" 的意思為「${meaning}」 (${note})。\n` +
      `【選項解析】\n` +
      shuffledA.map((opt, idx) => {
        let letter = String.fromCharCode(65 + idx);
        return `(${letter}) ${opt.text}：對應英文單字為 "${opt.word}"。`;
      }).join('\n');

    questions.push({
      id: `Q-${pad3(groupIndex)}A`,
      groupKey: groupKey,
      version: "A",
      type: "MC",
      chapter: chapter,
      gradeLevel: gradeLevel,
      question: `在英語閱讀中，請選出單字 "${word}" 最正確的中文意思與用法：`,
      options: shuffledA.map(o => o.text),
      answer: correctAnsLetterA,
      explanation: explanationA
    });

    // ==========================================
    // VERSION B: 中譯英與拼寫辨析 (Complexity UP)
    // ==========================================
    let rawOptionsB = [
      { text: word, isCorrect: true, meaning: meaning, note: note },
      ...enDistractors.map(d => ({ text: d.word, isCorrect: false, meaning: d.meaning, note: '' }))
    ];
    let shuffledB = shuffle(rawOptionsB);
    let correctIdxB = shuffledB.findIndex(o => o.isCorrect);
    let correctAnsLetterB = String.fromCharCode(65 + correctIdxB);

    // 構建完整解析 B（逐一解說各選項）
    let explanationB = `【正確答案 (${correctAnsLetterB})】中文「${meaning}」對應的英文單字為 "${word}"。\n` +
      `【選項對照】\n` +
      shuffledB.map((opt, idx) => {
        let letter = String.fromCharCode(65 + idx);
        return `(${letter}) ${opt.text}：中文意思為「${opt.meaning}」。`;
      }).join('\n');

    questions.push({
      id: `Q-${pad3(groupIndex)}B`,
      groupKey: groupKey,
      version: "B",
      type: "MC",
      chapter: chapter,
      gradeLevel: gradeLevel,
      question: `當你想表達中文的「${meaning}」時，正確的英文單字拼寫是哪一個？`,
      options: shuffledB.map(o => o.text),
      answer: correctAnsLetterB,
      explanation: explanationB
    });

    groupIndex++;
  });

  return questions;
}

// 寫入 questions.js 檔案
const allQuestions = generateQuestions();
const fileContent = `(function() {\n  window.DATA = {\n    questions: ${JSON.stringify(allQuestions, null, 2)}\n  };\n})();\n`;

fs.writeFileSync('questions.generated.js', fileContent, 'utf-8');
console.log(`✅ 已將此腳本內的示範單字庫生成 ${allQuestions.length} 題至 questions.generated.js；不會覆蓋正式題庫 questions.js。`);