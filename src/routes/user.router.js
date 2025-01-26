const { getAll,getOne,createUser,deleteUser,updateUser,login } = require('../controllers/user.controllers'); // Eliminar el espacio innecesario
const express = require('express'); // Espacios consistentes
const { verifyJwt } = require('../utils/verifyJWT');

const userRouter = express.Router(); // Consistencia en el nombre de la constante

// Define la ruta para obtener todos los usuarios
userRouter.route('/')
    .get(getAll)
    .post(createUser)
    .post(login)

userRouter.route('/:id')
    // .get(getOne)
    .delete(verifyJwt,deleteUser)
    .put(verifyJwt,updateUser)



module.exports = userRouter; // Exporta la ruta para ser utilizada en otros archivos
