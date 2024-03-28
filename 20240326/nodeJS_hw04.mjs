import { writeFileSync, mkdirSync, existsSync } from "fs";

const path = "./zero";

// 判斷資料夾存在與否
try {
  if (!existsSync(path)) {
    mkdirSync(path);
    console.log("資料夾建立成功");
  }
} catch (err) {
  console.log("資料夾建立發生錯誤");
}

for (let i = 1; i <= 20; i++) {
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
    writeFileSync(fileName, content);
    console.log(`${fileName} 寫入成功`);
  } catch (err) {
    console.log(`${fileName} 寫入失敗:`);
  }
}

console.log("生成結束");
