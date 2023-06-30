import style from "./Card.module.css"
import {Link} from "react-router-dom"


export default function Card({id ,name, status, species, gender, origin, image, onClose}) {

   return (
      <div className={style.container}>
         <button className={style.closeButton} onClick={() =>onClose(id)}>X</button>
          <div className={style.backgroundImage}></div>
           <div className={style.buttonPosition}>

         </div>
         <img src={image} alt='' className={style.image}/>
         <div className={style.dataContainer}>
            <Link to={`/detail/${id}`} >
         <h2 className={style.name}>{name}</h2>
            </Link>
            
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         </div>
      
      </div>
   );
}