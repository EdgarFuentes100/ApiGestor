// src/routes/usuarios/index.js
const express = require('express');
const router = express.Router();

// Importar las rutas específicas de GET, POST, PUT, DELETE
router.use('/get', require('./get'));   // Ruta GET

module.exports = router;
