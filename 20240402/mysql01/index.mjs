import express from "express";
import conn from "./db.mjs"
const app = express();


app.get("/", (req, res) => {
    res.send("網站首頁");
})
app.get("/dd/:id", async (req, res) => {
    let sql = "SELECT *  FROM `sort` WHERE `id` = ?";
    let dataAry = [req.params.id];
    // 用promise方式寫
    let data = await getData(sql, dataAry).then(results => {
        if (results.length === 0) {
            return undefined;
        } else {
            const { isvalid, ...others } = results[0];
            return others;
        }
    }).catch(err => undefined);
    console.log(data);
    if (data) {
        res.json(data)
    } else {
        res.json({ err: "查無此資料" })
    }
});

app.get("/d/:id", (req, res) => {
    let id = req.params.id;

});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})

function getData(sql, dataAry) {
    return new Promise((resolve, reject) => {
        conn.execute(
            sql,
            dataAry,
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
                // if (results.length !== 0) {
                //     const { isvalid, ...data } = results[0];
                //     return resolve(data);
                // } else {
                //     return resolve(undefined);
                // }
                // let data = results.map(item => {
                //     return {id: item.id, name: item.name}
                // });

            }
        );
    });
}