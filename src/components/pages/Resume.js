import React from 'react';
import resume from '../resume.pdf'

export default function Resume() {
    return (
        <div className="column  has-text-centered">
            <div>

                <p>

                    Click here for a donwloadable resume:
                </p>
                <a
                    href={resume}>Resume</a>
            </div>

            <div className="column">
                <h1 className="mt-4  is-centered">Capabilities</h1>
                <div className="columns mt-3">
                    <div className="column">
                        <ul className="mt-3 is-half"> Front-End Proficiencies:
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
                        <ul className="mt-3 is-half "> Back-End Proficiencies:
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

        </div>
    )
}

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies