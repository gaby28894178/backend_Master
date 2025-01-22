const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req,res)=>{
return res.json({msj:'Soy el get All'})
})

module.exports={getAll}