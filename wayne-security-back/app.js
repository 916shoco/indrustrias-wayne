const express = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelize = require('./config/database');
const User = require('./models/User');
const Role = require('./models/Role');
const Resource = require('./models/Resource');

dotenv.config();

const app = express();
app.use(express.json());

sequelize.sync({ force: true }).then(() => {
    console.log("Database & tables created!");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`ta rodando nesse canto aqui o ${PORT} thcau`));