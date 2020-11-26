const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next )=>{
  if (!req.headers ['user_token'])
  return res.json({
       error:'debes incluir el encabezado' 
  });

  const token =req.headers['user_token'];
  let payload = null;
  try{
    payload = jwt.decode(token, process.env.TOKEN_KEY)
    }catch(err){
      return res.json({
        error: 'token invalido'
      });
    }

    if(moment().unix() > playload.expiresAt) {
        return res.json({err:'token expirado'})
    };

    req.userId = payload.userId;

    next();
};

module.exports = {
  checkToken: checkToken
}