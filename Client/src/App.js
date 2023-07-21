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
import { removeFav } from './components/redux/actions';


function App() {

   const ubicacion = useLocation();
   const [characters, setCharacters] = useState([]);

   async function onSearch (id) {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
          }
         
      } catch (error) {
         console.log(error);
      }   
     }

      
     const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== Number(id))
         setCharacters(charactersFiltered)
         removeFav(id)
      }


      
          
            const navigate = useNavigate ()
            const [access, setAccess] = useState(false)

            
         
   const login = async (userData) => {
      try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const {data} = await axios(URL + `?email=${email}&password=${password}`)
        const { access } = data;
        setAccess(data);
        access && navigate('/home');
      
     } catch (error) {
      console.log(error.message)
      
     }
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
