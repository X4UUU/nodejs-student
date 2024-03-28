// 影片邊讀取邊寫入
import {createReadStream} from "fs";
const rs = createReadStream("./movie.mp4", );
//開始註冊
// chunk代表區塊
rs.on("data", (chunk) =>{
    console.log(chunk.length);
});
rs.on("end", () =>{
    console.log("讀取結束");
})