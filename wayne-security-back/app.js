const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('KKKKKKKKK DEU ERROR AGAIN FUCK I GO KILL MYSELF', err);
        return;
    }
    console.log('CHUPA DEU CERTO TROUXA HJ NAO CONECTADO PAIZAO');
});

//idk how it work i only asked for chatgpt help me to test api and her give this code ok?
app.get('/', (req, ress) => {
    res.send('SECURITY TEST')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`ta rodando nesse canto aqui o ${PORT} thcau`));