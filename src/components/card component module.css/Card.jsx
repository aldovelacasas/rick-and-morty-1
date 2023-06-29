import style from "./Card.module.css"


export default function Card({id ,name, status, species, gender, origin, image, onClose}) {

   return (
      <div className={style.container}>
          <div className={style.backgroundImage}></div>
           <div className={`${style.closeButton} ${style.hover}`}>
         <button onClick={() =>onClose(id)}>X</button>

         </div>
         <img src={image} alt='' className={style.image}/>
         <div className={style.dataContainer}>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         </div>
      
      </div>
   );
}