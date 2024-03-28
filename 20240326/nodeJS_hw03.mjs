import { readdir, rename } from "fs";
//作業3 html流水號更名
readdir("./work", (err, datas) => {
  if (err) {
    console.log("讀取失敗:", err);
    return false;
  }
  datas.forEach((data, i) => {
    //流水號補足兩位數
    const fileNum = (i + 1).toString().padStart(2, "0");
    const newData = `work${fileNum}.html`;
    // console.log(newData);
    rename(`./work/${data}`, `./work/${newData}`, (err) => {
      if (err) {
        console.log("html更名失敗");
        return false;
      }
      console.log("html更名成功");
    });
  });
});
