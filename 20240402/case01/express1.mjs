import express from "express";
import moment from "moment";
import connection from "../db2.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  // res.send("導向今天日期")
  const date = moment().format("YYYY-MM-DD");
  res.redirect("/expe/d/" + date);
});

router.get("/d/:date", async (req, res) => {
  // res.send("讀取指定日期的所有消費: " + req.params.date);
  let date = req.params.date;
  const sort = await connection.execute("SELECT * FROM `sort`").then(datas => {
    return datas[0].map(r => {
      return {id: r.id, name: r.name};
    })
  });

  res.render("index", {date, sort})
});

router.post("/", async (req, res) => {
  let title = req.body.title;
  let money = parseInt(req.body.money);
  let sort = parseInt(req.body.sort);
  let date = req.body.date;
  let result = await connection.execute(
    "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);",
    [title, sort, money, date]
  ).then(results => {
    if(results[0].insertId){
      return true;
    }else{
      return false;
    }
  }).catch(error => false);
  console.log(result);
  if(result){
    res.redirect("/expe/d/"+date);
  }else{
    res.send("新增錯誤，請洽管理人員")
  }
});

router.put("/", (req, res) => {
  res.send("修改指定日期的消費");
});

router.delete("/", (req, res) => {
  res.send("刪除指定日期的消費");
});

export default router;
