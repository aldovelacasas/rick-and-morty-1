import React from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  style from "./Detail.css"

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
      <div className="detail-container">
      <div className="text-container">
        <h1 className="detail-name">{character?.name}</h1>
        <h2 className="detail-text">{character?.status}</h2>
        <h2 className="detail-text">{character?.species}</h2>
        <h2 className="detail-text">{character?.gender}</h2>
        <h2 className="detail-text">{character?.origin?.name}</h2>
      </div>
      <div className="circle-container">
        <img
          src={character?.image}
          alt={character?.name}
          className="character-image"
        />
      </div>
    </div>
    )
}

export default Detail;