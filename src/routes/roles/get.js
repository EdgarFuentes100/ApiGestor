// src/routes/usuarios/get.js
const express = require('express');
const router = express.Router();
const db = require('../../database/configdb.js'); // Asegúrate que este archivo existe y exporta db

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM roles;';
    db.query(sql, (error, resultSet) => {
        if (error) {
            console.log("Error: ", error);
            res.json({
                estado: false,
                mensaje: error.message,
                datos: null
            });
        } else {
            res.json({
                estado: true,
                mensaje: "Usuarios encontrados",
                datos: resultSet  // Se devuelve la lista de usuarios
            });
        }
    });
});

module.exports = router;
