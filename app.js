import express from "express"
import cors from "cors"
import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const database = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
})


app.post("/register", async (req, res) => {
    const { name, lastName } = req.body
    try {
        const result = await database.query(
            "INSERT INTO users (name, last_name) VALUES (?, ?)", [name, lastName]
        )
        res.send("ثبت نام شدید")
    } catch (err) { return console.log(err) }
})




app.listen(process.env.PORT || 3000, () => { })