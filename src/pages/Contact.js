import React, { useState } from 'react';

const Contact = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    

    const handleContact = async (e) => {

        e.preventDefault();

        let emailValidation = document.querySelector("#email-error")
        emailInput? 
            emailValidation.setAttribute("data-message-valid", "true") :
            emailValidation.setAttribute("data-message-valid", "false");

        let messageValidation = document.querySelector("#message-error")
        messageInput? 
            messageValidation.setAttribute("data-email-valid", "true") :
            messageValidation.setAttribute("data-email-valid", "false");

        if (emailInput && messageInput) {
            document.querySelector("#submit").style.backgroundColor = "Green"
            setNameInput('')
            setEmailInput('')
            setMessageInput('')
            setTimeout(() => {
                document.querySelector("#submit").style.backgroundColor = "#efefef"
            }, 2000)
        }

    }

    const handleChange = (e, input) => {
        if (input === 'name') {
            setNameInput(e.target.value)
        } else if (input === 'email') {
            setEmailInput(e.target.value)
        } else if (input === 'message') {
            setMessageInput(e.target.value)
        }
    };  

    return (
        <section id="contact">
            <div id="contact-container" className='container'>

                <form 
                className="contact-form" 
                method='post'
                encType='text/plain'
                onSubmit={(e) => handleContact(e)}
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

                <div id='email-error' data-email-valid="true">Please enter a valid email</div>
                <div id='message-error' data-message-valid="true">Please enter a message</div>
            </div>
        </section>
    )
}

export default Contact