import http from "http";
import { readFileSync } from "fs";
import { resolve } from "path";
const server = http.createServer((req, res) => {
  const { method, url } = req;
  const { pathname } = new URL(url, "http://localhost");
  console.log(pathname);
  // /->test02.html
  ///test02.css->test02.css
  ///test02.js->test02.js
  // readFileSync(resolve(import.meta.dirname,"test02.html"));
  //上面的"test02.html"沒有加上/是要讓resolve去解析並組裝
  if (pathname === "/") {
    const htmlContent = readFileSync(resolve(import.meta.dirname,"test02.html"));
    res.end(htmlContent);
  }else if(pathname === "/test02.css"){
    const cssContent = readFileSync(resolve(import.meta.dirname,"test02.css"));
    res.end(cssContent);
  }else if(pathname === "/test02.js"){
    const jsContent = readFileSync(resolve(import.meta.dirname,"test02.js"));
    res.end(jsContent);
  }else{
    res.statusCode = 404;
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("<h1>404-找不到</h1>");
  };
});

server.listen(9000, () => {
  console.log("sever is running at http://localhost:9000");
});
