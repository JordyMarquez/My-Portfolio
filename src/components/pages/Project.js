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

        <div className="columns mt-5 ml-6 is-multiline has-text-centered is-size-5">
            <div className="box mr-4 has-text-centered" style={{ backgroundImage: `url(${Notes})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: 400 }}>

                <span className="box has-text-weight-bold" >

                    PWA Note Taker

                </span>

                <div className="mt-3 mt-5 box has-text-weight-semibold is-link">

                    <a className=""
                        href="https://jordy-note-taker.herokuapp.com/">

                        Heroku Link

                    </a>

                    <div>

                        <a
                            className=""
                            href="https://github.com/JordyMarquez/Text-Editor">

                            Github Repo

                        </a>

                    </div>
                </div>
            </div>

            <div className="box has-text-centered mr-4" style={{ color: "black", backgroundImage: `url(${Movie})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: 400 }}>

                <span className="box has-text-weight-bold">

                    Movie Reviewer

                </span>

                <div className="mt-5 box has-text-weight-semibold is-link">
                    <a className=""
                        href="https://binary-trio-movie-reviewer.herokuapp.com/">

                        Heroku Link

                    </a>

                    <div>
                        <a
                            className=""
                            href="https://github.com/JordyMarquez/Group-Project-2">

                            Github Repo

                        </a>

                    </div>
                </div>
            </div>

            <div className="box mr-4 has-text-centered" style={{ color: "black", backgroundImage: `url(${Phone})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: 400 }}>

                <span className="box has-text-weight-bold">
                    Social Network API

                </span>

                <div className="mt-5 box has-text-weight-semibold is-link">
                    <div>
                        <a
                            className=""
                            href="https://github.com/JordyMarquez/Text-Editor">

                            Github Repo

                        </a>

                    </div>
                </div>
            </div>

            <div className="box has-text-centered mr-4" style={{ color: "white", backgroundImage: `url(${Bed})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: 400 }} >

                <span className="box has-text-weight-bold">

                    Bed & Booze API App

                </span>

                <div className="mt-3 mt-5 box has-text-weight-semibold is-link">
                    <a className=""
                        href="https://tylerdins88.github.io/traveler-project/">

                        Deployed Link

                    </a>

                    <div>
                        <a
                            className=""
                            href="https://github.com/tylerdins88/traveler-project">

                            Github Repo

                        </a>

                    </div>
                </div>
            </div>

            <div className="box mr-4 has-text-centered" style={{ color: "black", backgroundImage: `url(${Money})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: 400 }}>

                <span className="box has-text-weight-bold">

                    E-Commerce Back-End

                </span>

                <div>


                    <div className="mt-3 mt-5 box has-text-weight-semibold is-link">
                        <a
                            className=""
                            href="https://github.com/JordyMarquez/E-Commerce-Back-End">

                            Github Repo

                        </a>

                    </div>
                </div>
            </div>

            <div className="box mb-5 has-text-centered" style={{ color: "black", backgroundImage: `url(${Editor})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: 400 }}>

                <span className="box has-text-weight-bold">

                    Day Scheduler

                </span>


                <div className="mt-3 mt-5 box has-text-weight-semibold is-link">
                    <a className=""
                        href="https://jordymarquez.github.io/Day-Scheduler/">

                        Deployed Link

                    </a>

                    <div>
                        <a
                            className=""
                            href="https://github.com/JordyMarquez/Day-Scheduler">

                            Github Repo

                        </a>

                    </div>
                </div>
            </div>


        </div>

    )
};

export default Project; 