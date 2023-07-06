import {ADD_FAV, FILTER, REMOVE_FAV, ORDER} from "./action-types"

// initialState
const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharactersFav, action.payload],
      
      };
    case REMOVE_FAV:
     
      return {
        ...state,
        myFavorites: state.myFavorites.filter((pepe) => pepe.id !== Number(action.payload))
      };
      case FILTER:
       const allCharactersFiltered = state.allCharactersFav.filter
       ((char)=> char.gender === action.payload)
      return{
        ...state,
        myFavorites:allCharactersFiltered

      }
      case ORDER:
        const allCharactersFavCopy = [...state.allCharactersFav];
        return{
          ...state,
          allCharactersFav:
          action.payload === "A"
          ? allCharactersFavCopy.sort((a, b) => a.id < b.id)
          : allCharactersFavCopy.sort((a, b) => b.id - a.id)

        }
      
      
      default:
        return {...state};
    }
};

export default reducer;
