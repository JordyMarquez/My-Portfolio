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
        <div className="mb-2 column" >
            <h1>Contact Us</h1>
            <form className="ml-2 is-centered">
                <label className='label mt-2'>Name</label>
                <input
                    type="text"
                    placeholder="your name goes here"

                    name="text"
                >
                </input>
                <label className="label mt-2">Email</label>
                <input
                    type="text"
                    placeholder="enter email here"
                    onChange={(e) => validateEmail(e)}
                >
                </input>

                <label className="label mt-2">Message</label>
                <input
                    type="message"
                    placeholder="message"
                >
                </input>
                <div mt-2>

                    <span className="tag is-white is-small mt-2 is-centered">
                        {message}
                    </span>

                </div>
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