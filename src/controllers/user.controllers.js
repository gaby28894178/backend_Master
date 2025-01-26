const catchError = require('../utils/catchError');
const User = require('../models/User');

const createUser = catchError(async (req, res) => {
    // Patrón para validar emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Desestructuración de los campos recibidos
    const { nombre, apellido, email, password, dni, fecha_nacimiento } = req.body;

    // Lista de claves requeridas
    const requiredFields = ["nombre", "apellido", "email", "password", "dni", "fecha_nacimiento"];
    const missingFields = [];

    // Verifica si hay campos faltantes
    requiredFields.forEach((field) => {
        if (!req.body[field]) {
            missingFields.push(field);
        }
    });

    // Verifica si el formato del email es válido
    if (email && !emailRegex.test(email)) {
        missingFields.push("email (formato inválido)");
    }

    // Verifica si el formato de fecha_nacimiento es válido (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (fecha_nacimiento && !dateRegex.test(fecha_nacimiento)) {
        missingFields.push("fecha_nacimiento (formato inválido)");
    }

    // Si hay campos faltantes o inválidos, responde con un error
    if (missingFields.length > 0) {
        return res.status(400).json({
            msj: "Faltan datos requeridos o son inválidos.",
            missingFields,
        });
    }

    // Combina los datos controlados con los demás datos recibidos
    const allData = { nombre, apellido, email, password, dni, fecha_nacimiento };

    // Crea un nuevo usuario con los datos combinados
    const newUser = await User.create(allData);

    // Devuelve el usuario creado
    return res.status(201).json(newUser);
});




const getAll = catchError(async (req, res) => {
    const datos = await User.findAll();
    return res.json(datos)
    // if (datos.length > 0) {
    //     return res.json({ mes: "Usuarios obtenidos", Users: datos });
    // } else {
    //     return res.json({ msj: "No se encontraron usuarios",usuarios:datos });
    // }
});

const getOne = catchError(async(req,res)=>{
    const {id}=req.params;
    const  datos = await User.findByPk(id)
    if (datos.length>0){
        return res.json({ mes: "Usuarios obtenidos", Users: datos });
    }
    else {
        return res.json({msj:"No tenemos nada para postrar el usuario ID ${id}, no Existe"})
    }

})



const deleteUser = catchError(async (req, res) => {
    const { id } = req.params;
    // Intenta eliminar el usuario
    const deleted = await User.destroy({ where: { id } });
    // Si no se encuentra el usuario, devuelve un mensaje de error
    if (!deleted) {
        return res.status(404).json({ message: "No se encontró el usuario" });
    }
    // Si se elimina correctamente, devuelve un mensaje de éxito
    return res.status(200).json({ message: "El usuario se eliminó correctamente" });
});

const updateUser = catchError(async (req, res) => {
    const { id } = req.params;
    const listaNoEditable = ["email", "dni"]; // Campos que no deben ser actualizados

    // Eliminar los campos no editables del cuerpo de la solicitud
    listaNoEditable.forEach((campo) => {
        delete req.body[campo];
    });

    // Realiza la actualización con los datos que quedan en req.body
    const result = await User.update(req.body, { where: { id }, returning: true });

    // Verificar si el usuario fue encontrado y actualizado
    if (result[0] === 0) {
        return res.sendStatus(404); // Si no se encuentra el usuario
    } else {
        return res.json(result[1][0]); // Devolver el usuario actualizado
    }
});



const login = catchError(async(req, res)=>{
    const {email, password}= req.body
    const user = await User.findOne({where:{ email }})
    if (!user) return res.status(401).json({msg:"User Not Found "})

    const isValid = await bcrypt.compare(password,user.password)
    if(!isValid)return res.sendStatus(401)
    const token = jwt.sign(
        {user},
        process.env.TOKEN_SECRET,
        {expiresIn:'1d'}
    )
    return res.status(200).json({user,token})
})

const me = catchError(async(req, res)=>{
    
})

module.exports = { getAll,getOne,createUser,deleteUser,updateUser,login  };
