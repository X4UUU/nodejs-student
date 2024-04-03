import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// createPool好處是連線更為彈性,對於多人專案開發較有效率
const conn = await mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
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