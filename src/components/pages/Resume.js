import React from 'react';
import resume from '../resume.pdf'

export default function Resume() {
    return (
        <div className="column  has-text-centered">

            <div className="column">
                <h1 className="mt-4  is-centered has-text-weight-bold is-size-4">Capabilities</h1>
                <div className="columns mt-3">
                    <div className="column">
                        <ul className="mt-3 is-half is-size-5"> 
                        <span className="has-text-weight-semibold	">

                        Front-End Proficiencies:
                        </span>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>responsive design</li>
                            <li>React</li>
                            <li>Bulma</li>

                        </ul>
                    </div>

                    <div className="column">
                        <ul className="mt-3 is-half is-size-5 "> 
                        <span className="has-text-weight-semibold	">

                        Back-End Proficiencies:
                        </span>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>

                        </ul>
                    </div>
                </div>

            </div>

            <div className="mt-5 is-size-5 has-text-weight-semibold	">

                <p>

                    Click here for a downloadable resume:
                </p>
                <a
                    href={resume}>Resume</a>
            </div>
        </div>
    )
}

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies