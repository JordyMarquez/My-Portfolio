import React from 'react'
import icon from '../components/logo192.png'
// import Navigation from './Navigation'
// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio



function Header() {

    return (
        <div>
            <img src={icon} alt=""/>
            <p>This image is for the header</p> 
            
        </div>
        
    );
}

export default Header;