
const usuarios = require ("../utils/user")


const login = (request,response ) => {
   
     const {email, password} = request.query;
     if (usuarios.some((user) => user.password === password && email == user.email))
        {
         return   response.status(200).send({access: true})

        }

        else {
             return response.status(200).send({access:false})
        }
     }
     

     






module.exports = {login};