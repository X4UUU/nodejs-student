import {appendFile, appendFileSync, writeFile} from "fs";

const file1 = "./測試寫入ESM2.txt";
const content1 = "\r\n只在此山中，雲深不知處";
//執行參數控制
if (process.argv[2] === "w") {
    writeFile(file1, content1, {flag: "a"},error => {
        if(error){
            console.log("檔案增加失敗");
            return false;
        }
        console.log("檔案增加成功");
    });
    
}else if(process.argv[2] === "a"){
    //附加檔案的方式
appendFile(file1, content1, error => {
    if(error){
        console.log("檔案增加失敗");
        return false;
    }
    console.log("檔案增加成功");
});
}else if(process.argv[2] === "as"){
    appendFileSync(file1, content1);
}

