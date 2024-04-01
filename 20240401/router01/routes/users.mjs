import express from "express";
// 執行前的結果
const router = express.Router();

router.get("/", (req, res) => {
    res.send("使用者列表頁面");
})

router.get("/:id", (req, res) => {
    res.send(`使用者${req.parse.id}的個人頁面`);
})

router.get("/:id/form", (req, res) => {
    res.send(`使用者${req.parse.id}的個人頁面-修改`);
})

router.post("/:id/form", (req, res) => {
    res.send(`使用者${req.parse.id}的個人頁面-進入修改`);
})

export default router;