const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');

//registro #2
router.post('/registro2',(req,res) =>{
  const {idDocUsuario, email, nombre_cliente,usuario,clave} =req.body;

  let usuariO = [idDocUsuario,email,nombre_cliente,usuario,clave];

  let nuevousu = 'INSERT INTO usuario (idDocUsuario,email,nombre_cliente,usuario,clave)  VALUES(?,?,?,?,?)';

  mysqlConnection.query(nuevousu, usuariO, (err, results, fields)=>{
if (err) {
    return console.error(err.message);
  }
  res.json({ message:`usuario nuevo` })
  });
}); 


// Página principal
router.get('/principal', (req, res) => {
  mysqlConnection.query('SELECT usuario, km , puntos FROM usuario ', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
})



module.exports = router;