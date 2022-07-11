import avatar from '../images/avatar.png'

const About = ({changePage}) => {

    return (
        <section id='about'>
            <div id='about-container' className='container'>
                <img src={avatar} alt="avatar"></img>
                <article id='about-description'>
                    <h2>About Me</h2>
                        <p>
                            Hello! I'm a web developer from Australia. 
                            Interested in front end and back end design, 
                            creating awesome apps and learning new technologies where possible.
                            I hope to be able to create progressive applications to help connect 
                            the less initiated to the web in a helpful and meaningful way.
                        </p>
                        <button onClick={() => changePage('portfolio')}>EXPLORE MY PORTFOLIO</button>
                </article>
            </div>
        </section>
    )
}

export default About