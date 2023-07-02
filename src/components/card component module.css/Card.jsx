import style from "./Card.module.css"
import {Link} from "react-router-dom"


export default function Card({id ,name, status, species, gender, origin, image, onClose}) {

   return (
      <div className={style.container}>
        <button className={style.closeButton} onClick={() => onClose(id)}>
          X
        </button>
        <div className={style.backgroundImage}></div>
        <div className={style.buttonPosition}></div>
        <img src={image} alt='' className={`${style.image} ${style.imageBorder}`} />
        <div className={style.dataContainer}>
          <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
          </Link>
          <div className={style.cardData}>
          <p>{status}</p>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{origin}</p>
        </div>
        </div>
      </div>
    );
   }    