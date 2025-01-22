// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

router.get('/:id',(req,res)=>{
    const {id}= req.params;
    res.send("Hola su id de ingreso es el ID: {id}")
})


module.exports = router;
