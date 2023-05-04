import React from 'react';
import resume from '../resume.pdf'

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <a
            href={resume}>Resume</a>
        </div>
    )
}

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies