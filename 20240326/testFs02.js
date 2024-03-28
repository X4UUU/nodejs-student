const fs = require("fs");
const file1 = "./測試寫入2.txt";
const content1 = "松下問童子，言師採藥去";
// 同步的寫法
console.log("1寫入開始之前");
try {
    fs.writeFileSync(file1, content1);
    console.log("2寫入成功");
} catch (error) {
    console.log(error);
    console.log("2寫入失敗");
}

console.log("3寫入開始之後");