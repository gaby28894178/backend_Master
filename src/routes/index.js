// routes/index.js
const userRouter = require('./user.router');
const express = require('express');
const router = express.Router();

// Ruta de estado de la API
router.get('/status', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

// Ruta que recibe un parámetro 'id' en la URL
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     res.send(`Hola, su id de ingreso es el ID: ${id}`); // Se usa la interpolación de cadenas correctamente
// });

// Ruta para las rutas relacionadas con usuarios
router.use('/users', userRouter);

module.exports = router;
