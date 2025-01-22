const { DataTypes } = require('sequelize'); // Corrige el nombre de DataTpes a DataTypes
const sequelize = require('../utils/connection'); // Importa la instancia de conexión configurada

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
    password: {
        type: DataTypes.STRING, // Tipo STRING para texto
        allowNull: false // No permite valores nulos
    },
    dni:{
        type: DataTypes.STRING,
        allowNull:false
    }
}, 
{
    indexes: [
        {
            unique: true,
            fields: ['dni', 'email','nombre']
        }
    ]
        
},
{
    timestamps: false // Opciones del modelo, desactiva los campos automáticos createdAt y updatedAt
});

// Exporta el modelo para su uso en otras partes de la aplicación
module.exports = User;
