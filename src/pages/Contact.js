import React, { useState } from 'react';

const Contact = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const handleChange = (e, input) => {
        if (input === 'name') {
            setNameInput(e.target.value)
        } else if (input === 'email') {
            setEmailInput(e.target.value)
        } else if (input === 'message') {
            setMessageInput(e.target.value)
        }
    };  

    const mailto = `mailto:d.plummer89@hotmail.com?%0D%0Asubject=Message from portfolio page from ${nameInput}&%0D%0Abody=${messageInput}`;

    return (
        <section id="contact">
            <div id="contact-container">

                <form 
                className="contact-form" 
                action={mailto}
                method='post'
                encType='text/plain'
                >
                    <input 
                        type="text"
                        placeholder="Enter name"
                        value={nameInput}
                        name="name"
                        onChange={(e) => handleChange(e, 'name')}
                        id="name"
                        >
                    </input>

                    <input
                        type="email"
                        placeholder="Enter an email"
                        value={emailInput}
                        name="email"
                        id="email"
                        onChange={(e) => handleChange(e, 'email')}
                        >
                    </input>

                    <input
                        type="text"
                        placeholder="Enter a message"
                        value={messageInput}
                        name="message"
                        id="message"
                        onChange={(e) => handleChange(e, 'message')}
                        >
                    </input>

                    <input
                        type="submit"
                        id='submit'
                        name='submit'
                        value="Send Message"
                        >
                    </input>
                </form>

            </div>
        </section>
    )
}

export default Contact