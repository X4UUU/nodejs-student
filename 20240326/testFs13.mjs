import { stat } from "fs";
// 使用情境為判別檔案
stat("./a",(err, stats)=>{
    if (err) {
        console.log("讀取狀態失敗");
        console.log(err);
        return false;
    }
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
});