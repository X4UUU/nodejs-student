const fs = require("fs");

//作業2 轉移檔案
for (let i = 1; i <= 20; i++) {
  const file1 = `./work${i}.html`;
  const content1 = `<!DOCTYPE html>
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
  const file2 = `./work${i}.html`; 
  const content2 = `./work/work${i}.html`;
  fs.rename(file2, content2 ,(error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("html轉移成功");
  });
}
