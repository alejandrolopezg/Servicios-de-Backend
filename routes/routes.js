const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');


// Página principal
router.get('/principal', (req, res) => {
  mysqlConnection.query('SELECT nombre_cliente, km , puntos FROM usuario ', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
})

//  Configuración

module.exports = router;