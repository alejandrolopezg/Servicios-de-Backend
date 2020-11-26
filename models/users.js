const getAll = ()=>{
  return new Promise((resol,refec)=>{
    db.query('SELECT * FROM usuario',(err,rows)=>{
      if(err) refec(err)
      resol(rows);
    });
  });
};


// Registro usuarios 

const insert = ({idDocUsuario, tipoDoc, email, nacimiento, nombre_cliente, clave}) =>{
 return new Promise((resol,rejec)=>{
 db.query('INSERT INTO usuario (idDocUsuario,email,nombre_cliente,usuario,clave)  VALUES(?,?,?,?,?,?)',[idDocUsuario,email,nacimiento,nombre_cliente,usuario,clave],(err,result)=>{
    if(err) rejec(err)
    if(result){
        resol(result)
    };
  });
 });
};

// obtener usuarios por su Email

const getEmail = (nEmail)=>{
  return new Promise ((resol,rejec)=>{
    db.query('SELECT * FROM usuario WHERE email = ?',[nEmail],(err,rows)=>{
      if(err) rejec(err)
      resol(rows[0])
    });
  });
}; 

// obtener usuarios por su Id

const getId = (nId)=>{
  return new Promise ((resol,rejec)=>{
    db.query('SELECT * FROM usuario WHERE 	idDocUsuario = ?',[nId],(err,rows)=>{
      if(err) rejec(err)
      resol(rows[0])
    });
  });
}; 


module.exports = {
  getAll: getAll,
  insert: insert,
  getEmail: getEmail,
  getId: getId

}