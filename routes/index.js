const express = require('express');

// Rutas
const homeRouter = require('./home');
const loginRouter = require('./login');
const registerRouter = require('./register');
const authRouter = require('./auth');
const logoutRouter = require('./logout');

function routerApi(app) {
    const router = express.Router();
    app.use('/', router);
    router.use('/', homeRouter);
    router.use('/login', loginRouter);
    router.use('/register', registerRouter);
    router.use('/auth', authRouter);
    router.use('/logout', logoutRouter);
}

module.exports = routerApi;
