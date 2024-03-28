import { writeFileSync, mkdirSync, existsSync } from "fs";

// 定義要建立的資料夾路徑
const path = "./zero";

// 建立資料夾（如果不存在）
try {
  if (!existsSync(path)) {
    mkdirSync(path);
    console.log("資料夾建立成功");
  }
} catch (err) {
  console.log("資料夾建立發生錯誤");
}

// 迴圈產生 20 個 HTML 檔
for (let i = 1; i <= 20; i++) {
  // 補齊編號的零位
  const fileNum = i.toString().padStart(2, "0");
  const fileName = `./zero/work${fileNum}.html`;
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>這是第 ${i} 個 HTML 檔</h1>
</body>
</html>`;

  try {
    // 寫入檔案
    writeFileSync(fileName, content);
    console.log(`${fileName} 寫入成功`);
  } catch (err) {
    console.log(`${fileName} 寫入失敗:`);
  }
}

console.log("生成結束");
