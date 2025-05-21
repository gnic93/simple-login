const express = require('express');
const router = express.Router();
const connection = require('../database/db');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
    const user = req.body.user;
    const password = req.body.password;

    if (user && password) {
        try {
            const [results] = await new Promise((resolve, reject) => {
                connection.query('SELECT * FROM users WHERE user = ?', [user], (error, results) => {
                    if (error) return reject(error);
                    resolve([results]);
                });
            });

            const invalidMsg = {
                alert: true,
                alertTitle: "Error",
                alertMessage: "Usuario o contraseña incorrectos",
                alertIcon: "error",
                showConfirmButton: true,
                timer: 1500,
                ruta: 'login'
            };

            if (results.length === 0) {
                return res.render('login', invalidMsg);
            }
            const userFromDb = results[0];
            const match = await bcrypt.compare(password, userFromDb.password);
            if (!match) {
                return res.render('login', invalidMsg);
            }
            req.session.loggedin = true;
            req.session.name = results[0].name;
            res.render('coming', {
                alert: true,
                alertTitle: "Login",
                alertMessage: "Login correcto",
                alertIcon: "success",
                showConfirmButton: false,
                timer: 1500,
                ruta: ''
            });
        } catch (err) {
            return res.status(500).send('Error al procesar la autenticación');
        }
    } else {
        res.status(400).send('Faltan datos');
    }
});

module.exports = router;
