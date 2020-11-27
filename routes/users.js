const express = require('express');
const router = express.Router();
const users = require('../models/users');
const middleware = require('./middleware');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

router.get('/',async(req,res)=>{
  const users = await Users.getAll();
  res.json(users);
});

// const createToken =(user)=>{
//   let playload ={
//     userId:user.idDocUsuario,
//     createdat: moment().unix(), 
//     expirestat:moment().add(1,'day').unix()
//   }
//   return jwt.encode(playload, process.env.TOKEN_KEY);
// };

//Registro de usuarios
router.post('/registro',async(res,req)=>{
  console.log(req.body);
  req.body.clave = bcrypt.hashSync(req.body.clave,10);
  const result  = await users.insert(req.body);
  res.json(result);

});

// Logueo de Ususarios
// router.post('/login',async(req,res)=>{
//   const user = await Users.getEmail(req.body.email)

//   if(user === undefined){
//     res.json({
//       error:' ERROR, Email o contraseña invalida'
//     });
//   }else{
//     const equals = bcrypt.compareSync(req.body.clave, user.clave);
//     if (!equals) {
//        res.json({
//       error:' ERROR, Email o contraseña invalida'
//     });
//     }else{
//       res.json({
//      succesfull: createToken(user),
//      done:'Logueo exitoso'
//     });
//     }
//   }
// });

// router.use(middleware.checkToken);

// router.use('./mainuser',(req,res)=>{
//   Users.getId(req.userId).then(rows =>{
//     res.json(rows);
//   }).catch(err=> console.log(err));
// });


module.exports = router;