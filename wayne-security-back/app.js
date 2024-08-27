const express = require('express');
const path = require('path')
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelize = require('./config/db');
const User = require('./models/user');
const Role = require('./models/roles');
const Resource = require('./routes/resource');

dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname , './wayne-security-front/public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname , './wayne-security-front/public', 'index.html'));
});

sequelize.sync({ force: true }).then(() => {
    console.log("Database & tables created!");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`ta rodando nesse canto aqui o ${PORT} thcau`));

//AH MAS PQ TU N COMENTOU EM NADA NO FRONT? IRMAO EU TO DOIDO JA SE EU COMENTAR ALGO VOU PRESO ENTAO LE SO A README