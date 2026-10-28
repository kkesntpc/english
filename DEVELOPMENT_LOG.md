# 英語英雄網 - 系統重構與開發歷程紀錄 (Development Log)

## 1. 專案背景與重構原因
* **原問題發現**：原本系統之 `questions_exam.js` 並非真實考題，而是僅有 14 題純文字克漏字複製 12 遍而成的佔位假題庫，且存在第 09 題「吃粽子划龍舟答案竟設為萬聖節」等嚴重邏輯矛盾與選項缺漏問題。
* **重構目標**：全面導入 110～115 學年度四、五年級全部 12 套官方學力檢測題本之真實閱讀理解題庫，並修復跨平台檔名編碼錯亂問題。

## 2. 檔案編碼與亂碼修復歷程
* 原始上傳之 Excel 檔案因 Windows Big5 (CP950) 壓縮後在非 Unicode 環境解壓縮產生亂碼：
  * `870├Dº╣╛π├D«w╣∩╖╙¬φ_questions_870.xlsx` ➔ `questions_870_cross_reference_table.xlsx`
  * `GuoGuang_110-115_Master_Bank-Ñ■├D«w - ╜╞╗s.xlsx` ➔ `GuoGuang_110-115_Master_Bank_Full.xlsx`
  * `░ΩÑ·░Ωñp_110-115├D«w_║δ┬▓ºt┐∩╢╡╕╤¬R¬⌐.xlsx` ➔ `GuoGuang_110-115_Question_Bank_Simplified.xlsx`
  * `├D«wÑi╜s┐Φ.csv` ➔ `question_bank_editable.csv`
* 全數提供標準英文字符檔名包，確保 Mac、Windows 與 Linux 跨平台解壓永不亂碼。

## 3. 題庫雙軌架構整合
1. **基礎核心題庫 (`questions.js`)**：
   * 包含 14 大核心主題、435 組（A/B 卷共 870 題），作為基礎單字背誦與集章認證使用。
2. **歷屆全真題庫 (`questions_exam.js`)**：
   * 依據 110～115 學年度 12 份真實檢測題本重新編撰。
   * 題目涵蓋日常生活情境、圖表菜單、時鐘時區、月曆行程推算、健康醫療與短篇故事。
   * 答案與各學年度官方答案卡 100% 比對一致，並附上詳盡解題關鍵與考點剖析。
