import './App.css';
import Cards from './components/cards component module.css/Cards.jsx';
import Nav from './components/Nav components/Nav';
import About from './components/About components/Aboutcomponentes';
import Detail from './components/Detail components/Detail_component';
import { useState } from 'react'
import axios from 'axios';
import {Routes, Route, useLocation} from 'react-router-dom'
import Form from './components/Form_components/Form';




function App() {
   

    const location = useLocation();
    


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
        {
  // Verifica si la ruta actual no es la raíz ("/")
  location.pathname !== "/"
  ? <Nav onSearch={onSearch}/> // Si no es la raíz, renderiza el componente Nav con la prop onSearch
  : null // Si es la raíz, no se renderiza nada (null)

  /*La condición location.pathname !== "/" verifica si la ruta actual es diferente a la raíz ("/").
  Si la condición no se cumple (es decir, la ruta es la raíz), se renderiza null,
   lo que indica que no se renderiza ningún contenido.*/
}

         <Routes>
           <Route path='/home' element={ <Cards characters={characters}  onClose={onClose}/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/detail/:id' element={<Detail/>} />
           <Route path="/" element={<Form/>} />
           
         </Routes>
     
         
         
      
      
         
         </div>
   );
}

export default App;
