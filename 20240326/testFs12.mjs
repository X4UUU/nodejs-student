import { mkdir, readdir, rm } from "fs";

if (process.argv[2] === "mk") {
  mkdir("./a/b/c", { recursive: true }, (err) => {
    if (err) {
      console.log("建立資料夾失敗");
      console.log(err);
      return false;
    }
    console.log("建立資料夾成功");
  });
} else if (process.argv[2] === "rd") {
  readdir("./movie", (err, files) => {
    if (err) {
      console.log("讀取資料夾失敗");
      console.log(err);
      return false;
    }
    console.log(files);
  });
} else if (process.argv[2] === "rm") {
  rm("./a/b/c", (err) => {
    if (err) {
      console.log("刪除資料夾失敗");
      console.log(err);
      return false;
    }
    console.log("刪除資料夾成功");
  });
}
console.log("完畢");
