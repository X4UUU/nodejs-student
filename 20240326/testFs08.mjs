import { readFileSync, writeFileSync, readFile, writeFile } from "fs";
// 用SYNC的寫法
let data = readFileSync("./movie.mp4");
writeFileSync("./movie1.mp4", data);

// 不用SYNC的寫法
// const write = (data) => {
//   writeFile("./movie2.mp4", data, (err) => {
//     if (err) {
//       console.log(err);
//       return false;
//     }
//   });
// };

// readFile("./movie.mp4", (err, data) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }
//   write(data);
// });
