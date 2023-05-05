import React from 'react';
import Movie from './images/movie.png';
import Notes from './images/notes.png';
import Phone from './images/phone.png';
import Bed from './images/bed.png';
import Money from './images/money.png'
import Editor from './images/editor.png';

// A single Project component that will be used multiple times in the Portfolio section

function Project() {
    return (

        <div className="columns mt-2 ml-6 is-multiline has-text-centered">
            <div className="box mr-4 has-text-centered" style={{ backgroundImage: `url(${Notes})`, backgroundRepeat: "no-repeat", backgroundSize: "", width: 400 }}>

                <span style={{ color: "white" }}>

                    PWA Note Taker

                </span>

                <div className="has-text-left">

                    <span style={{ color: "white" }}>

                        Heroku Link:
                    </span>
                    <a className="ml-1"
                        href="https://jordy-note-taker.herokuapp.com/">
                        https://jordy-note-taker.herokuapp.com/
                    </a>

                    <div>

                        <span style={{ color: "white" }}>

                            Github Repo:
                        </span>
                        <a
                            className="ml-1"
                            href="https://github.com/JordyMarquez/Text-Editor">
                            https://github.com/JordyMarquez/Text-Editor
                        </a>

                    </div>
                </div>
            </div>

            <div className="box has-text-centered mr-4" style={{ color: "black", backgroundImage: `url(${Movie})`, backgroundRepeat: "no-repeat", backgroundSize: "", width: 400 }}>

                Movie Reviewer

                <div className="has-text-left">
                    Heroku Link:
                    <a className="ml-1"
                        href="https://binary-trio-movie-reviewer.herokuapp.com/">
                        https://binary-trio-movie-reviewer.herokuapp.com/
                    </a>

                    <div>


                        Github Repo:
                        <a
                            className="ml-1"
                            href="https://github.com/JordyMarquez/Group-Project-2">
                            https://github.com/JordyMarquez/Group-Project-2
                        </a>

                    </div>
                </div>
            </div>

            <div className="box mr-4 has-text-centered" style={{ color: "white", backgroundImage: `url(${Phone})`, backgroundRepeat: "no-repeat", backgroundSize: "", width: 400 }}>

                Social Network API

                <div className="has-text-left">
                    <div>
                        Github Repo:
                        <a
                            className="ml-1"
                            href="https://github.com/JordyMarquez/Text-Editor">
                            https://github.com/JordyMarquez/Text-Editor
                        </a>

                    </div>
                </div>
            </div>

            <div className="box has-text-centered mr-4" style={{ color: "white", backgroundImage: `url(${Bed})`, backgroundRepeat: "no-repeat", backgroundSize: "", width: 400 }} >

                Bed & Booze API App

                <div className="has-text-left">
                    Heroku Link:
                    <a className="ml-1"
                        href="https://tylerdins88.github.io/traveler-project/">
                        https://tylerdins88.github.io/traveler-project/.
                    </a>

                    <div>
                        Github Repo:
                        <a
                            className="ml-1"
                            href="https://github.com/tylerdins88/traveler-project">
                            https://github.com/tylerdins88/traveler-project
                        </a>

                    </div>
                </div>
            </div>

            <div className="box mr-4 has-text-centered" style={{ color: "black", backgroundImage: `url(${Money})`, backgroundRepeat: "no-repeat", backgroundSize: "", width: 400 }}>

                E-Commerce Back-End

                <div>


                    <div className="has-text-left">
                        Github Repo:
                        <a
                            className="ml-1"
                            href="https://github.com/JordyMarquez/E-Commerce-Back-End">
                            https://github.com/JordyMarquez/E-Commerce-Back-End
                        </a>

                    </div>
                </div>
            </div>

            <div className="box mb-5 has-text-centered" style={{ color: "black", backgroundImage: `url(${Editor})`, backgroundRepeat: "no-repeat", backgroundSize: "", width: 400 }}>


                    Day Scheduler

                <div className="has-text-left">
                    Deployed Link:
                    <a className="ml-1"
                        href="https://jordymarquez.github.io/Day-Scheduler/">
                        https://jordymarquez.github.io/Day-Scheduler/
                    </a>

                    <div>
                        Github Repo:
                        <a
                            className="ml-1"
                            href="https://github.com/JordyMarquez/Day-Scheduler">
                            https://github.com/JordyMarquez/Day-Scheduler
                        </a>

                    </div>
                </div>
            </div>


        </div>

    )
};

export default Project; 