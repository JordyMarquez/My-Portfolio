import React from 'react';
import Project from './Project'

export default function Portfolio() {
    return (
        <div className="column">
            <h1 className="has-text-centered has-text-weight-bold is-size-4 mt-4">Portfolio</h1>
            <p className="has-text-centered mt-3 is-size-5">Our most visited projects are below, feel free to click on each project's deployed link or github repo to learn more:  </p>
            <Project />
        </div>
    )
}

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository