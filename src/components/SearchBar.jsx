import { useState } from "react";
import style from "./searchBar.module.css"



export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handledChange = (event) => {
      setId(event.target.value)

   }


   return (
      <div className={style.container}>
         
          <input type='search' onChange={handledChange} value={id} />
         <button onClick={() => {onSearch(id); setId("")}}>Agregar</button> 
      </div>
   );
}
