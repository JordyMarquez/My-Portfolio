import React from 'react';
import Icon from '../components/pages/images/github.png'

// A single Footer component that appears on multiple pages
function Footer() {
    return (
        <div className="content has-text-centered mt-6">
            <a href="https://github.com/JordyMarquez">

                <img src={Icon} alt="github" style={{ height: 50, width: 50 }}>

                </img>

            </a>

            <p>©️ Bloom Coding 2023</p>
        </div>
    )
}

export default Footer;

// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)