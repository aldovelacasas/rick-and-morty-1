import './App.css';
import Cards from './components/cards.component.module/Cards.jsx';
import Nav from './components/Nav components/Nav';
import About from './components/About components/Aboutcomponentes';
import Detail from './components/Detail components/Detail_component';
import { useState, useEffect} from 'react'
import axios from 'axios';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Form from './components/Form_components/Form';
import Favorites from './components/favorites/favorites';



function App() {

   const ubicacion = useLocation();
   const [characters, setCharacters] = useState([]);

   const onSearch=(id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
         
      }).catch((error) => {
         alert('No se encontró el ID!!!');
       });  /*.catch(error => alert("No se encontró el ID!!!"));*/
   }

      //tambien se puede con concat :
      // setCharacters(characters.concat(example));
     const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== Number(id))
         setCharacters(charactersFiltered)
      }


      
          //Estado local 
            const navigate = useNavigate ()
            const [access, setAccess] = useState(false)

         const email = "aldo251_@hotmail.com"
         const password = "naruto251"
   
      

 // Esta función tiene que preguntar si el email y 
 //password que declaraste más arriba
 //son iguales a los que les está llegando por parámetro
 /*userData = {
   email:"",
   password:""
}*/
         const login = (userData) => {
            if(email ===  userData.email && password === userData.password ){
            setAccess(true);
            navigate('/home')};
            
         
         }
      
         useEffect(() => {
            !access && navigate('/');
         }, [access]);
   

   return (
      
      
      <div className='App'>
        {

   ubicacion.pathname === "/" ?  null: <Nav onSearch={onSearch}/> 

}

         <Routes>
           <Route path='/home' element={ <Cards characters={characters}  onClose={onClose}/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/detail/:id' element={<Detail/>} />
           <Route path="/" element={<Form login={login} />} />
           <Route path='/favorites' element={<Favorites/>} />
         </Routes>
     
         
         
      
      
         
         </div>
   );
};

export default App;
