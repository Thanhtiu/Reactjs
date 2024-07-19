import React from "react"; 
import { Link } from "react-router-dom";
function Header(){
    return (
        <header>
           <nav>
            <li>
                <Link to="/client">Home</Link>
            </li>
            <li>
                <Link to="/client/about">About</Link>
            </li>
           </nav>
        </header>
    )
}

export default Header;
