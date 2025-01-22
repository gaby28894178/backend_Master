const { getAll } = require('../controllers/user.controllers'); // Eliminar el espacio innecesario
const express = require('express'); // Espacios consistentes

const userRouter = express.Router(); // Consistencia en el nombre de la constante

// Define la ruta para obtener todos los usuarios
userRouter.route('/').get(getAll);

module.exports = userRouter; // Exporta la ruta para ser utilizada en otros archivos
