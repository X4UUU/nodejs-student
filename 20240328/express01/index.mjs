import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("hello server!!!你好主機!");
});
app.get("/login", (req, res) => {
    res.send("歡迎登入");
});

app.get("/reg", (req, res) => {
    res.send("註冊頁面");
});



app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})