import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {

    return (
        <section id="footer">
            <div id="footer-container">
                <ul>
                    <li><FaGithub /></li>
                    <li><FaLinkedin /></li>
                    <li><FaStackOverflow /></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer