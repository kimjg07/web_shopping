import React from "react";
import { useState, useEffect } from "react";
import './Nav.css' ;
import {Link} from 'react-router-dom';
function Nav() {
    

    return (
        <nav className="Navbar">
            <div>DOM<i className="fa-solid fa-house"/></div>
            <div><input type="text" ></input><i class="fa-solid fa-magnifying-glass"></i></div>
            
            
        </nav>
      );
}


export default Nav;