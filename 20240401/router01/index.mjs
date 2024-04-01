import express from "express";
import usersRouter from "./routes/users.mjs"
const app = express();

app.get("/", (req, res) => {
    res.send("首頁")
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})