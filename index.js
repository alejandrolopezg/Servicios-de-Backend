const express = require('express');
const app = express();
const routes = require('./routes/routes'); 
const usuarios = require('./routes/users'); 
const cors = require('cors');

app.use(cors({origin: '*'}));


// Ajustes
app.set('port', process.env.PORT || 3001);
app.set('json spaces',2);
require('dotenv').config;



// Middlewares
app.use(express.json());

//Routes
app.use('/api',routes);
app.use('/api/usuarios',usuarios);

app.get('/',(req,res)=>{
  res.send('Hola chicos de la JL - Esta es nuestra de NodeJS - Express y MySql')
});

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 