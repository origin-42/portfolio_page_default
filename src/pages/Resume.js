import resumePdf from '../data/Resume_dave_plummer.pdf';
import proficiencies from '../data/tech.js'

const Resume = () => {

    return (
        <section id="resume">
            <div id="resume-container" className='container'>
                <div id='resume-download'>
                    <a href={resumePdf} target="_blank" rel='noreferrer' download="Resume_dave_plummer.pdf">Download my resume..</a>
                </div>
                <article id='profs-wrapper'>
                    <div id='stack' className='technologies'>
                        
                        <article id='front-end' className='stack-wrapper'>
                            <h2>Front-end Proficiencies</h2>
                            <ul>

                                {proficiencies.fontEnd.map((item) => {
                                    return <li id={item.index} key={item.index}>{item.tech}</li>
                                })}

                            </ul>
                        </article>

                        <article id='back-end' className='stack-wrapper'>
                            <h2>Back-end Proficiencies</h2>
                            <ul>

                                {proficiencies.backEnd.map((item) => {
                                    return <li id={item.index} key={item.index}>{item.tech}</li>
                                })}

                            </ul>
                        </article>

                    </div>
                </article>
            </div>
        </section>
    )
}

export default Resume