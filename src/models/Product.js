const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection')


const Product = sequelize.define('product',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:true
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:true
    },
    categoria:{
        type:DataTypes.STRING,
        allowNull:true
    },
    departamento:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:true
    },
    marca:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:true
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    precio:{
        type:DataTypes.FLOAT,
        allowNull:true
    }
})

module.exports = Product