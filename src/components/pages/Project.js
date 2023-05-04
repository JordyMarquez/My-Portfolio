import React from 'react';
import Movie from '../movie.png';
import Notes from '../notes.png';
import Phone from '../phone.png';
import Bed from '../bed.png';
import Money from '../money.png'
import Editor from '../editor.png';

// A single Project component that will be used multiple times in the Portfolio section

function Project() {
    return (

        <div className="columns mt-2 ml-2 is-multiline">
            <div className="box" style={{ backgroundImage: `url(${Notes})` }}>

                PWA Note Taker

                <div>
                    Heroku Link:
                    <a className="ml-1"
                        href="https://jordy-note-taker.herokuapp.com/">
                        https://jordy-note-taker.herokuapp.com/
                    </a>

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

            <div className="box" style={{ backgroundImage: `url(${Movie})` }}>

                Movie Reviewer

                <div>
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

            <div className="box" style={{ backgroundImage: `url(${Phone})` }}>

                Social Network API
                <div>


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

            <div className="box" style={{ backgroundImage: `url(${Bed})` }} >

                Bed & Booze API App

                <div>
                    Heroku Link:
                    <a className="ml-1"
                        href="https://binary-trio-movie-reviewer.herokuapp.com/">
                        https://binary-trio-movie-reviewer.herokuapp.com/.
                    </a>

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

            <div className="box" style={{ backgroundImage: `url(${Money})` }}>

                E-Commerce Back-End

                <div>


                    <div>
                        Github Repo:
                        <a
                            className="ml-1"
                            href="https://github.com/JordyMarquez/E-Commerce-Back-End">
                            https://github.com/JordyMarquez/E-Commerce-Back-End
                        </a>

                    </div>
                </div>
            </div>

            <div className="box mb-5 " style={{ backgroundImage: `url(${Editor})` }}>

                Day Scheduler
                
                <div>
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