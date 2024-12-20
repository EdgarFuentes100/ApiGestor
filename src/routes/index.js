// src/routes/index.js
const express = require('express');
const router = express.Router();

const app = express()

app.get('/', (req, res)=>{
    console.log("Soy el principal");
    res.json({
        estado: true,
        mensaje: "Mensaje",
        datos: []
    }
    );
})


// Rutas de usuarios
router.use('/usuarios', require('./usuarios'));  // Aquí se agrupan las rutas de usuarios
router.use('/roles', require('./roles'));  // Aquí se agrupan las rutas de usuarios

module.exports = router;
