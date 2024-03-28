const fs = require("fs");
// for (let i = 1; i <= 10; i++) {
//   const file = `myfile${i}.html`;
//   const content = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>這是第${i}個html</h1>
// </body>
// </html>`;
//   //寫入檔案
//   fs.writeFile(file, content, (err) => {
//     if (err) throw err;
//     console.log("寫入成功");
//   });
//   //搬移檔案
//   const file1 = `./myfile${i}.html`;
//   const content1 = `./manyhtml/myfile${i}.html`;
//   fs.rename(file1, content1, (err) => {
//     if (err) throw err;
//     console.log("搬移成功");
//   });
// }
//讀取檔案
fs.readFile("myfile.txt", "utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})
