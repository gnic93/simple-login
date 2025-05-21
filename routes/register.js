const express = require('express');
const connection = require('../database/db');
const router = express.Router();

const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
    res.render('register');
});

router.post('/', async (req, res) => {
    try {
    const { user, name, rol, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    connection.query('INSERT INTO users SET ?', { user:user, name:name, rol:rol, password:hash }, async (error, results) => {
        if (error) {
            return res.render('register', {
                alert: true,
                alertTitle: "Error",
                alertMessage: "Error al registrar el usuario",
                alertIcon: "error",
                showConfirmButton: true,
                timer: 1500,
                ruta: 'register'
            })
        } else {
            return res.render('register', {
                alert: true,
                alertTitle: "Registro exitoso",
                alertMessage: "Usuario registrado correctamente",
                alertIcon: "success",
                showConfirmButton: true,
                timer: 1500,
                ruta: 'login'
            })
        }
    });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
