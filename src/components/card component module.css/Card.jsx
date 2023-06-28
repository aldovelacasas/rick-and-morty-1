import style from "./Card.module.css"


export default function Card(props) {
   const {name, status, species, gender, origin, image} = props;
   return (
      <div className={style.container}>
           <div className={`${style.closeButton} ${style.hover}`}>
         <button onClick={()=> onclose()}>X</button>

         </div>
         <img src={image} alt='' />
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