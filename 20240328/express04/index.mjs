import express from "express";

const app = express();


app.get("/", (req, res) => {
    res.send("網站首頁");
})

// http://localhost:3000/p/CvZP-PIguWG/
// http://localhost:3000/p/CvRz0e3Awmi/

// app.get("/p/:id", (req, res) => {
//     let content = "";
//     if (req.params.id === "CvZP-PIguWG") {
//         content = "Ig test"
//     } else if (req.params.id === "CvRz0e3Awmi") {
//         content = "Ig test111"
//     }
//     res.send(content);
// })

app.get("/users/:userID", (req, res) => {
    const { userID } = req.params;
    res.send(`<h1>${userID}的首頁</h1>`);
})

app.get("/books/:categoryID/:bookID", (req, res) => {
    const { categoryID, bookID } = req.params;
    res.send(`分類是: ${categoryID}, 書本的編號是: ${bookID}`);
})
// 路由字串先空格
app.get("/user/:name?", (req, res) => {
    if (req.params.name) {
        res.send(`你好,${req.params.name}`);
    } else {
        res.send("你好~訪客");
    }
});

app.get("/use/:id([0-9]+)", (req, res) => {
    res.send(`user id is ${res.params.id}`);
});

app.get("/files/*", (req, res) => {
    let filePath = req.params[0];
    res.send(`file path: ${filePath}`);
});





app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})
