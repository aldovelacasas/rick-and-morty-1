const validation = (userData) => {
    const errors ={};
       if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
          errors.email = "El email no es valido"
       }
       if(!userData.email){
        errors.email = "Debe ingresar un email"
       }
       if(userData.email.lenght > 35){
        errors.email = "Tiene mas de 35 caracteres"
       }

       if(!/.*\d+.*/.test(userData.password)){
             errors.password ="la contraseña debe contener un numero"
       }
       if(userData.password.lenght > 6 || userData.password.lenght > 10){
        errors.password = " la contraeña debe tener un tamaño entre 6 y 10 caracteres"
        
       }

       return errors;
  

}
export default validation;