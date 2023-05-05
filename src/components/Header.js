import React from 'react'
import icon from '../components/pages/images/flowers.png'
// import Navigation from './Navigation'
// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio



function Header() {

    return (
        <header className="mt-5 ml-6">
            <a href="#AboutMe"
            >

            <img src={icon} alt="" style={{width:100, height:100, borderRadius: 100/2}}/>
            
            </a>
            <p></p> 
            
        </header>
        
    );
}

export default Header;