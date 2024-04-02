import express from "express";
import conn from "./db2.mjs"
const app = express();


app.get("/", (req, res) => {
    res.send("網站首頁");
})

app.get("/gg/:id", async (req, res) => {
    const [results, fields] = await conn.execute(
        "SELECT *  FROM `sort` WHERE `id` = ?",
        [req.params.id]
    ).catch(error => [undefined]);
    if (results) {
        res,json(results);
    }else{
        res.json({error: "查無此資料"});
    }
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})


