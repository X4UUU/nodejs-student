import http from "http";
import { readFile } from "fs/promises";
// import { readFile, readFileSync } from "fs";
import { resolve } from "path";
const __dirname = import.meta.dirname;
// 跟講義上的12不一樣
const server = http.createServer(async (req, res) => {
    const { url } = req;
    let { pathname } = new URL(url, "http://localhost");
    if (pathname === "/") {
        pathname = "/index.html";
    }

    let root = resolve(__dirname, "pages");
    // root = resolve(__dirname , "public");

    let filePath = resolve(root, pathname.slice(1));
    const data = await readFile(filePath)
        .then(result => result)
        .catch(error => undefined);
    if (!data) {
        res.statusCode = 500;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("<h1>500-文件讀取失敗</h1>");
        return false;
    }
    res.end(data);
});

server.listen(9000, () => {
    console.log("sever is running at http://localhost:9000");
});
