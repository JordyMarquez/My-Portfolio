import React from 'react';
import avatar from '../pages/images/avatar.png'

export default function AboutMe() {
    return (
        <div className="column has-text-centered">
            <h1>Bloom Coding</h1>
            <img src={avatar} alt="typewriter" className="mt-4" style={{height:200, width:200, borderRadius:300/2 }}></img>
            
            <p className="mt-4"> Brought to you by Jordy M. an aspiring web developer. Bloom coding brings you all the beauty of nature's simplicity while hiding all the complexity and nuance. Created in 2023, this coding website was just the begining of bridging the tech world and healthcare. The creator of Bloom Coding was inspired by their experience working in the healthcare field. Realizing the untapped potential of web development in aiding healthcare workers with patient education, public health management, and advocacy, Bloom Coding was born.  </p>
        </div>
    );
}