import http from "http";
const server = http.createServer((req,res)=>{
    res.end("Server is here !@#$");
})
server.listen(9000,()=>{
    console.log(" is running at http://localhost:9000");
})