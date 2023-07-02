import './App.css';
import Cards from './components/cards component module.css/Cards.jsx';
import Nav from './components/Nav components/Nav';
import About from './components/About components/Aboutcomponentes';
import Detail from './components/Detail components/Detail_component';
import { useState } from 'react'
import axios from 'axios';
import {Routes, Route, } from 'react-router-dom'





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
         
      });/*.catch(error=>alert("No se encontró el ID!!!"));*/             ;
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

         <Routes>
           <Route path='/home' element={ <Cards characters={characters}  onClose={onClose}/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/detail/:id' element={<Detail/>} />

         </Routes>
     
         
         
      
      
         
         </div>
   );
}

export default App;
