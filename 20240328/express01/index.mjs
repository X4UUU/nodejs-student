import express from "express";
const app = express();
// all()必須妥善使用，尤其是"*""

app.get("/", (req, res) => {
    res.send("hello server!!!你好主機!");
});

app.get("/login", (req, res) => {
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form action="/login" method="post">
                <button type="submit">送出表單</button>
            </form>
        </body>
        </html>`);
});

app.get("/reg", (req, res) => {
    res.send("註冊頁面");
});

app.post("/login", (req, res) => {
    res.send("進入登入流程");
});

app.all("/test", (req, res) => {
    res.send("符合所有的方式");
})

app.all("*", (req, res) => {
    res.send("<h1>404 - NOT FOUND</h1>");
})













app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})