const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const router = express.Router();
// GET OUT HERE AUGUSTO!!!!!!!! NAO TOQUE NESSE ARQUVIO AUGUSTO FOI FEITO NO CHATGPT TENHA PIEDADE DE MIM PORRA
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Rsponde tudo ai namoral (la ele tinha quase escrevi "bota tudo" kk)'});
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) throw err;

        if (result.lenght > 0) {
            return res.status(400).json({ msg: 'Usuario ja existente'});
        }

        //to gostando desse projeto n ta lembrando minha ex
        const hasehdPassword = await bcrypt.hash(password, 10);

        //e se eu estourar o cartao dela? sera que ela vai saber q foi eu?
        db.query('INSERT INTO users (username, email, password) VALUES (?, ?,?)', [username, email, hasehdPassword], (err, result) => {
            if (err) throw err;
            res.status(201).json({ msg: 'Usuario resgistrado.' });
        });
    });
    
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ msg: 'Responda todos os campos!' });
    }
    
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) throw err;
    
        if (result.lenght === 0) {
            return res.status(400).json({ msg: 'Usuario nao foi encontrado' });
        }
    
        const user = result[0];
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Senha invalida tente novamente' });
        }
    
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {expiresIN: '1h' });
            
        res.json({ token });
        });
    });
});
// feito pelo chatgpt (nao eu AINDA n fiz nada com minha ex)
module.exports = router;