const { log } = require("console");
const fs = require("fs");
const file1 = "./測試寫入.txt";
const content1 = "松下問童子，言師採藥去";
console.log("1寫入開始之前");
fs.writeFile(file1, content1, (error) => {
    if(error){
        console.log("2寫入失敗");
        return;
    }
        console.log("2寫入成功");
});
console.log("3寫入開始之後");