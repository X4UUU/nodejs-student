import mysql from "mysql2";
const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "nodejsdb"
});

export default conn;