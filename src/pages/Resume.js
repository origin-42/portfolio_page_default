import resumePdf from '../data/Resume_dave_plummer.pdf';
import proficiencies from '../data/tech.js'

const Resume = () => {

    return (
        <section id="resume">
            <div id="resume-container">
                <div id='resume-download'>
                    <a href={resumePdf} target="_blank" rel='noreferrer' download="Resume_dave_plummer.pdf">Download my resume..</a>
                </div>
                <article>
                    <div id='stack' className='technologies'>
                        
                        <article id='front-end'>
                            <h2>Front-end Proficiencies</h2>
                            <ul>

                                {proficiencies.fontEnd.map((item) => {
                                    return <li id={item.index} key={item.index}>{item.tech}</li>
                                })}

                            </ul>
                        </article>

                        <article id='back-end'>
                            <h2>Back-end Proficiencies</h2>
                            <ul>

                                {proficiencies.backEnd.map((item) => {
                                    return <li id={item.index} key={item.index}>{item.tech}</li>
                                })}

                            </ul>
                        </article>

                    </div>
                    <div id='back-end' className='technologies'></div>
                </article>
            </div>
        </section>
    )
}

export default Resume