import React from 'react'
import icon from '../components/pages/images/flowers.png'
// import Navigation from './Navigation'
// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio



function Header() {

    return (
        <div className="mt-3 mb-5 ml-6 columns">
        
        <a
       style={{ backgroundImage: `url(${icon})`, height: 100, width: 100, borderRadius: 100/2, backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
        href="https://jordymarquez.github.io/My-Portfolio/"
        >

        <p className="has-text-white mt-2 has-text-centered has-text-weight-bold is-size-4">
        Bloom Coding

        </p>
        
        </a>
            
           
            
        </div>
        
    );
}

export default Header;