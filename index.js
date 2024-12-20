require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const apiroutes = require('./src/routes/index.js');

const app = express();

// Configurar CORS para permitir solicitudes desde http://localhost:3001
app.use(cors({
  origin: `http://localhost:3000`
}));

// Middleware para parsear el cuerpo de las solicitudes
// Configura el tamaño máximo del cuerpo a 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Rutas de la API
app.use('/apiGestor/v1', apiroutes);

app.set("port", 8012);
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
  console.log("Estoy listo..., hola");
});
