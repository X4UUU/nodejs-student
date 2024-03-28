import { rename, renameSync ,createReadStream, createWriteStream} from "fs";

rename("./數字遞增2.txt", "./test/數字遞增2.txt", err =>{
    if (err) {
        console.log("操作失敗");
        return false;
    }
    console.log("操作成功");
});
// 實際應用是寫成一支log
// renameSync("./test/數字遞增2.txt", "./test/數字遞增.txt");