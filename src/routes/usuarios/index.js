// src/routes/usuarios/index.js
const express = require('express');
const router = express.Router();

// Importar las rutas específicas de GET, POST, PUT, DELETE
router.use('/get', require('./get'));   // Ruta GET
router.use('/post', require('./post')); // Ruta POST
router.use('/put', require('./put'));   // Ruta PUT
router.use('/delete', require('./delete')); // Ruta DELETE

module.exports = router;
