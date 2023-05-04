import React from 'react';

// A single Project component that will be used multiple times in the Portfolio section

function Project() {
    return (

        <div className="column">
            <div>

                PWA Note Taker

            </div>

            <div>
                Heroku Link: 
                <a
                    href="https://jordy-note-taker.herokuapp.com/">
                    https://jordy-note-taker.herokuapp.com/
                </a>


            </div>
            <div>
                Github Repo: 
                <a
                    href="https://github.com/JordyMarquez/Text-Editor">
                    https://github.com/JordyMarquez/Text-Editor
                </a>

            </div>

        </div>

    )
};

export default Project; 