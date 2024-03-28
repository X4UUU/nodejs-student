import { log } from "console";
import { unlink , rm } from "fs";
// unlink在多個版本都能適用，但不能刪除根目錄
// unlink("./測試寫入.txt", err =>{
//     if (err) {
//         console.log("刪除失敗");
//         console.log(err);
//         return false;
//     }
//     console.log("刪除成功");
// })

rm("./測試寫入2.txt", err =>{
    if (err) {
        console.log("刪除失敗");
        console.log(err);
        return false;
    }
    console.log("刪除成功");
})
