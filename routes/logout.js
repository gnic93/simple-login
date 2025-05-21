const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error al cerrar sesión');
        }
        res.render('login', {
            alert: true,
            alertTitle: "Sesión cerrada",
            alertMessage: "Hasta luego",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 1500,
            ruta: ''
        });
    });
});

module.exports = router;
