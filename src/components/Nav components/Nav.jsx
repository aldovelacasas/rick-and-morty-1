import SearchBar from "../search bar components/SearchBar";
import { Link } from "react-router-dom"
import "./Nav.css";

const Nav = ({onSearch}) => {
    return (
        <nav className="nav-container">
            <SearchBar onSearch={onSearch}/>

            <button>
                <Link to= '/about'>About</Link> 
            </button>

             <button>
                <Link to= '/home'>Home</Link> 
             </button>


           
        </nav>
    )
}
export default Nav;