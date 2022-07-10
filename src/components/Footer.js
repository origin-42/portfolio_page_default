import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {

    return (
        <section id="footer">
            <div id="footer-container">
                <ul>
                    <li><a href='https://github.com/origin-42' target="_blank" rel='noreferrer'><FaGithub /></a></li>
                    <li><a href='https://www.linkedin.com/in/david-plummer-630a46a7/' target="_blank" rel='noreferrer'><FaLinkedin /></a></li>
                    <li><a href='https://stackoverflow.com/users/11477746/dplumbonline' target="_blank" rel='noreferrer'><FaStackOverflow /></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer