import {readFile} from "fs";
let textData;
readFile("./測試寫入ESM2.txt", (error, data)=>{
    if(error){
        console.log("讀取失敗");
        return false;
    }
    textData = data.toString();
    getData();
    // console.log(data.toString());
});
const getData = () => {
    console.log(textData);
}