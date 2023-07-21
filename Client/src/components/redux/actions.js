import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-types";
import axios from "axios";
// Action Creators
export const addFav = (character) => {
try {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    const {data} = await axios.post(endpoint, character)
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
    
  };
} catch (error) {
  console.log(error.message);
  
}
};

export const removeFav = (id) => {
  try {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      const {data} = await axios.delete(endpoint)
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
      
    };

} catch (error) {
  console.log(error.message)
}

};

export const filterCards = (gender) => {
  return {
    type: FILTER_CARDS,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};
