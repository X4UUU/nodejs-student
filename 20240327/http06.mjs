import http from "http";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const { pathname } = new URL(url, "http://localhost");
  res.setHeader("content-type", "text/html;charset=utf-8");
  if (method === "GET" && pathname === "/login") {
      res.end("你好,登入頁");
    } else if (method === "GET" && pathname === "/reg") {
        res.end("你好,註冊頁");
    }else if (method === "GET" && pathname === "/"){
        res.end("你好,主頁");
    }else{
        res.end("找不到")
    }
});

server.listen(9000, () => {
  console.log("sever is running at http://localhost:9000");
});
