import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'placify'
});

app.get("/", (req, res) => {
    return res.json("From Backend Side");
  });

app.listen(8000, () => {
    console.log('Server started on port 3001');
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO tbl_users ('name', 'email', 'notelp', 'password') VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error : "Error for hassing password"});
        const values = [
            req.body.name,
            req.body.email,
            req.body.notelp,
            hash
        ]
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: err});
            return res.json({Status: "Success"});
        })
    })
})

