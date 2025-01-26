const { DataTypes } = require('sequelize'); // Corrige el nombre de DataTypes
const sequelize = require('../utils/connection'); // Importa la instancia de conexión configurada
const bcrypt = require('bcrypt')
// Define el modelo `User`
const User = sequelize.define('user', {
    nombre: {
        type: DataTypes.STRING, // Tipo STRING para texto
        unique: true, // El valor debe ser único
        allowNull: false // No permite valores nulos
    },
    apellido: {
        type: DataTypes.STRING, // Tipo STRING para texto
        allowNull: false // No permite valores nulos
    },
    email: {
        type: DataTypes.STRING, // Tipo STRING para texto
        unique: true, // El valor debe ser único
        allowNull: false // No permite valores nulos
    },
    fecha_nacimiento:{
        type:DataTypes.DATEONLY,
        // unique:true,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING, // Tipo STRING para texto
        allowNull: false // No permite valores nulos
    },
    dni: {
        type: DataTypes.STRING,
        unique: true, // El valor debe ser único
        allowNull: false // No permite valores nulos
    },
    imagen_Url:{
        type: DataTypes.STRING,
        allowNull:true
    },
    //!id productos 
}, 

{

    timestamps: false // Desactiva los campos automáticos createdAt y updatedAt
});


//hooks de sequelizer  antes encripto la contraseña
User.beforeCreate(async(user)=>{
    const password = user.password
    const hashPassword = await bcrypt.hash(password,10)
    user.password = hashPassword
    
  })

// Exporta el modelo para su uso en otras partes de la aplicación
module.exports = User;
