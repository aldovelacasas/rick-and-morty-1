import './App.css';
import Card from './components/card component module.css/Card.jsx';
import Cards from './components/cards component module.css/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         
           {/* /* id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}*/ }
         
      </div>
   );
}

export default App;
