import React from 'react';
import logo from '../apple-notes-493153.webp'
function Header(){
    return (
      <header>
        <h1>
         <img src={logo} alt="logo" style={{height:'40px'}}/> <span>PSP Notes App</span> 
        </h1>
        
      </header>
    );

}

export default Header;