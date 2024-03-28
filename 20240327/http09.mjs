import http from "http";
import { readFileSync } from "fs";
import { resolve } from "path";
const server = http.createServer((req, res) => {
  const { method, url } = req;
  const { pathname } = new URL(url, "http://localhost");
  const htmlContent = readFileSync(resolve(import.meta.dirname,"test01.html"))
//   res.setHeader("content-type", "text/html;charset=utf-8");
  res.end(htmlContent);
});

server.listen(9000, () => {
  console.log("sever is running at http://localhost:9000");
});
