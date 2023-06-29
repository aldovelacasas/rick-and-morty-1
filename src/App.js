import './App.css';
import Cards from './components/cards component module.css/Cards.jsx';
import characters, { Rick } from './data.js';
import Nav from './components/Nav';
import { useState } from 'react'
import axios from 'axios';





function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch=(id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

      //tambien se puede con concat :
      // setCharacters(characters.concat(example));
     const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== Number(id))
         setCharacters(charactersFiltered)

     }
   

   return (
      <div className='App'>
     
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
         
         
      </div>
   );
}

export default App;
