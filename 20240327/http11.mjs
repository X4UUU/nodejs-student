import http from "http";
import { readFile, readFileSync } from "fs";
import { resolve } from "path";
const __dirname = import.meta.dirname;
// 內容為講義11、12合在一起
const server = http.createServer((req, res) => {
    const { url } = req;
    let { pathname } = new URL(url, "http://localhost");
    if (pathname === "/") {
        pathname = "/index.html";
    }
    let root = (__dirname , "pages");
    root = resolve(__dirname , "public");

    let filePath = resolve(root, pathname.slice(1));

    readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.setHeader("content-type", "text/html;charset=utf-8");
            res.end("<h1>500-文件讀取失敗</h1>");
            return false;
        }
        res.end(data);
    });
    //   console.log(filePath);
    //   if (pathname === "/test02.html") {
    //     const content = readFileSync(resolve(__dirname, "pages", filePath));
    //     res.end(content);
    //   } else if (pathname === "/css/test02.css") {
    //     const content = readFileSync(resolve(__dirname, "pages", filePath));
    //     res.end(content);
    //   } else if (pathname === "/js/test02.js") {
    //     const content = readFileSync(resolve(__dirname, "pages", filePath));
    //     res.end(content);
    //   } else if (pathname === "/images/bg.jpg") {
    //     const content = readFileSync(resolve(__dirname, "pages", filePath));
    //     res.end(content);
    //   } else {
    //     res.statusCode = 404;
    //     res.setHeader("content-type", "text/html;charset=utf-8");
    //     res.end("<h1>404-找不到</h1>");
    //   }
});

server.listen(9000, () => {
    console.log("sever is running at http://localhost:9000");
});
