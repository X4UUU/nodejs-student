import express from "express";
import conn from "./db.mjs"
const app = express();


app.get("/", (req, res) => {
    res.send("網站首頁");
})
app.get("/dd/:id", (req, res) => {
    // 用promise方式寫
});

app.get("/d/:id", (req, res) => {
    let id = req.params.id;

});








app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})

function getData(id) {
    return new Promise((resolve, reject) => {
        conn.execute(
            "SELECT *  FROM `sort` WHERE `id` = ?",
            [id],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                // let data = results.map(item => {
                //     return {id: item.id, name: item.name}
                // });
                const { isvalid, ...data } = results[0];
                return resolve(data);
            }
        );
    });
}