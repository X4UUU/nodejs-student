import http from "http";
//引入兩個參數請求、回應
 const server = http.createServer((req,res)=>{
    // res.write();
    // res.write();
    // res.write();
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("你好伺服器!");
 });
//  port number
 server.listen(9000,()=>{
    console.log("伺服器已啟動於 http://localhost:9000");
 });