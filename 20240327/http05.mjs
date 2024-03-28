import http from "http";

const server = http.createServer((req, res) => {
  const url = new URL(req.url,"http://localhost");
  console.log(url.pathname);
  console.log(url.searchParams.get("name"));
  console.log(url.searchParams.get("pwd"));
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("你好主機~");
});

server.listen(9000, () => {
  console.log("sever is running at http://localhost:9000");
});
