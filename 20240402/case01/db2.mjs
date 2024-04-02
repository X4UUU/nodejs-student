import mysql from "mysql2/promise";
// createPool好處是連線更為彈性,對於多人專案開發較有效率
const conn = await mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "nodejsdb",
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});
export default conn;
// queueLimit隊列限制
// const [results, fields] = await conn.execute(
//     "SELECT *  FROM `sort` WHERE `id` = ?",
//     [9]
// ).catch(error => [undefined, undefined]);
// console.log(results);