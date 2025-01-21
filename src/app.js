const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler'); // lo importamos
const router = require('./routes'); // Aquí se importa router
require('dotenv').config();

// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

// Rutas
app.use('/api/v1', router); // Usa router después de importarlo
app.get('/', (req, res) => {
    return res.send("Bienvenidos a la app Acceso Get ");
});

// middlewares después de las rutas
app.use(errorHandler);

module.exports = app;
