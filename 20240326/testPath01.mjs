// import { resolve, join, sep } from "path";
// join只作拚接、不作確認存在與否
//輔助模組運作用

// console.log(resolve("text", "..", "aa.txt"));
// console.log(join("text", "..", "aa.txt"));
// console.log(resolve(import.meta.dirname,"fff.mp4"));
// console.log(sep);
// console.log(parse(import.meta.filename));
import { join, resolve ,sep, parse, dirname, basename, extname} from "path";
import {fileURLToPath} from "url";
console.log(basename(import.meta.filename));
console.log(extname(import.meta.filename));

// 早期DIRNAME的製作方式
// node v20.11.1 開始有 meta 下的 filename 和 dirname
// 在此之前要使用 __dirname 要用底下這個方法取得
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = dirname(__filename);
console.log(__dirname);
// 結合join和resolve去組合出所需的路徑


// console.log(sep);
// console.log(parse(import.meta.url));
// console.log(parse(import.meta.filename));
//常見的寫法
// console.log(join(".","test"));

// console.log(join("/test"));
// console.log(resolve("/test"));

// console.log(join(import.meta.dirname,"test"));
// console.log(resolve(import.meta.dirname,"test"));

// console.log(import.meta.url);
// console.log(import.meta.filename);
// console.log(import.meta.dirname);