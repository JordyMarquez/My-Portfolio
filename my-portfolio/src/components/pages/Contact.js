import React from 'react';


export default function Contact() {
    // const [input] = useState('')
    return (
        <div >
            <h1>Contact Us</h1>
            <form>
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
                    placeholder="must have a valid email"
                >
                </input>

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