import {writeFileSync} from "fs";
const file1 = "./測試寫入ESM2.txt";
const content1 = "松下問童子，言師採藥去";
// const content1 = "只在此山中，雲深不知處";
//測試路徑流程
// try{
//     檢查file1路徑是否存在
// (只有針對單獨一件事情去測試，切記:不要把try catch 當作 if else 寫)
// }catch(){
//     當檢查有不存在的路徑，就在 catch 當中建立並補完
// }
writeFileSync(file1, content1);
console.log("1寫入開始之前");