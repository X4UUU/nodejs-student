// 建立讓人可以連進來的模組
import http from "http";

const server = http.createServer((req, res) => {
  //   console.log(req.httpVersion);
  const { method, url, httpVersion, headers } = req;
  //   console.log(method);
  //   console.log(url);
  //   console.log(httpVersion);
  console.log(headers);
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("你好主機");
});

server.listen(9000, () => {
  console.log("server is running http://localhost:9000");
});
