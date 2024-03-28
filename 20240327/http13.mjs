import http from "http";
import { readFile } from "fs/promises";
// import { readFile, readFileSync } from "fs";
import { resolve } from "path";
const __dirname = import.meta.dirname;

const mines = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp3: 'audio/mpeg',
    json: 'application/json'
};
// mp4: 'video/mp4',
// 把這個從媒體格式從 mines 中去除，瀏覽器將認不得媒體格式，進而啟動下載
// 正式的主機，這個要加進去 mines 物件中
// 物件不能用mark掉

// mines.jpg
// mines["jpg"]
// mines[extname().slice(1)]

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
    let ext = extname(filePath).slice(1);
    let type = mines[ext];
    if (type) {
        if (ext === "html") {
            res.setHeader("content-type", type + ";charset=utf-8");
        } else {
            res.setHeader("content-type", type);
        }
    } else {
        // 
        res.setHeader("content-type", "application/octet-stream");
    }
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
