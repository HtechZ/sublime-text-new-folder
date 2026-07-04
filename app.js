import express from "express"
import cors from "cors"
import mysql from "mysql2/promise"
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const database = mysql.createPool({
    user: "sql7832120",
    password: "gWeuLJ7u4U",
    host: "sql7.freesqldatabase.com",
    database: "sql7832120"
})
const port = 3000


app.post("/register", async (req, res) => {
    const { name, lastName } = req.body
    try {
        const result = await database.query(
            "INSERT INTO users (name, last_name) VALUES (?, ?)", [name, lastName]
        )
        res.send("ثبت نام شدید")
    } catch (err) { return console.log(err) }
})




app.listen(port, () => { })