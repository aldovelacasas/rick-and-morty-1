import Card from '../card component module.css/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const {characters} = props
   return <div className={style.cardList}>{
      characters.map(element=>(<Card
         key={element.id}
         id={element.id}
         name={element.name}
         status={element.status}
         species={element.species}
         gender={element.gender}
         origin={element.origin.name}
         image={element.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
      />))
      }
   </div>;
}
