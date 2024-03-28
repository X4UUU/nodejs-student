import http from "http";
// 用模組解析
import { parse } from "url";
//開始分流
const server = http.createServer((req, res) => {
  const { url } = req;
  let ress = parse(url, true);
  const { pathname, query } = ress;
  console.log(pathname);
  console.log(query);
  console.log(query.name);
  console.log(pathname.pwd);
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("你好主機~");
});

server.listen(9000, () => {
  console.log("sever is running at http://localhost:9000");
});
