import http from "http";

const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", (chunk) => {
    body += chunk;
    console.log(body);
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("你好主機~");
  });
});
server.listen(9000, () => {
  console.log("sever is running at http://localhost:9000");
});
