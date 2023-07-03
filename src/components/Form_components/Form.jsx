import React from "react";
import { useState } from "react";
import validation from "../validation/validation";
import  style from "./Forms.module.css"


const Form = () => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
/*es una prodpiedad del objeto que es variable []*/  
 [event.target.name]: event.target.value
        })

           setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value

        }))

        

    }
return(

  <form  className={style.formcontainer}>
  <label htmlFor="email" className={style.emailfield}>
    Email
    <input placeholder="email" type="text" name="email" value={userData.email} onChange={handleChange} />
  </label>
  {errors.email && <p className={style.errormessage}>{errors.email}</p>}

  <label htmlFor="password" className={style.passwordfield}>
    Password
    <input placeholder="password" type="text" name="password" value={userData.password} onChange={handleChange} />
  </label>
  {errors.password && <p className={style.errormessage}>{errors.password}</p>}

  <button className={style.submitbutton}>Login</button>
</form>


  /* <form >

    <label htmlFor="email">Email</label>
    <input placeholder="email" type="text" name="email" value={userData.email}
    onChange={handleChange} />
    {errors.email && <p style={{color:"white"}}>{errors.email}</p>}

    <label htmlFor="password"></label>
    <input placeholder="password" type="text" name="password" value={userData.password}
    onChange={handleChange}/>
    {errors.password && <p style={{color:"white"}}>{errors.password}</p>}

    <button>Submit</button>
    
    
    </form>*/
)
}

export default Form;