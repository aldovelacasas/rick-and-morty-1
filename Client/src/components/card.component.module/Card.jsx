import style from "./Card.module.css"
import {Link} from "react-router-dom"
import { addFav, removeFav } from '../redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card({id ,name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  
  const [isFav, setIsFav] = useState(false);

  const handleFavorite =( ) => {
    if(isFav){
      setIsFav(false);
      removeFav(id);
    }
    else{
      setIsFav(true);
      addFav({id ,name, status, species, gender, origin, image, onClose})
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if(fav.id === id) {
        setIsFav(true);
      }
    });
    
  }, [myFavorites]);



  

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
        {
        isFav ? (
        <button onClick={handleFavorite}>❤️</button>
         ) : (
        <button onClick={handleFavorite}>🤍</button>
         )}
        </div>
      </div>
    )
         }    

         const mapStateToProps = (state) => {
          return {
            myFavorites: state.myFavorites
          }
         }



   const mapDispatchToProps = (dispatch) =>{
    return{
      addFav:(character) => {dispatch(addFav(character))},
      
      removeFav:(id) => {dispatch(removeFav(id))}
    }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Card);