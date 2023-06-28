import style from "./searchBar.module.css"
export default function SearchBar(props) {
   const {onSearch} = props;
   return (
      <div className={style.container}>
         
          <input type='search' />
         <button onClick={onSearch}>Agregar</button> 
      </div>
   );
}
