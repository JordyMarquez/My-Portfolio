import React, { useState } from 'react';
// import {render} from "react-dom";
import validator from "validator";

export default function Contact() {
    const [message, setMessage] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
            setMessage('Got it!');
        }
        else {
            setMessage('Please enter a valid email')
        }
    }
    return (
        <div className="column is-half" >
            <h1>Contact Us</h1>
            <form className="column">
                <label className='label'>Name</label>
                <input
                    type="text"
                    placeholder="your name goes here"

                    name="text"
                >
                </input>
                <label className="label">Email</label>
                <input
                    type="text"
                    placeholder="enter email here"
                    onChange={(e) => validateEmail(e)}
                >
                </input>

                <label className="label">Message</label>
                <input
                    type="text"
                    placeholder="message"
                >
                </input>

                <span className="tag is-small">
                {message}
                </span>
            </form>
        </div>
    )
}

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address