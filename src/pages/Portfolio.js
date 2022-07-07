import projects from '../data/portfolios'

const Portfolio = () => {

    return (
        <section id='portfolio'>
            <div id='portfolio-container'>
                <div id='portfolios'>
                    <h2>Portfolio Section</h2>

                    {/* Return all portfolio items */}
                    {projects.map((item) => {

                        return (
                            <article className='project' key={item.id}>
                                <img src={item.image} alt={item.name}></img>
                                <div className='project-content'>
                                    <h3>{item.name} {item.releaseDate}</h3>
                                    <p>{item.longDescription}</p>
                                    <button><a href={item.githubUrl}>Learn More</a></button>
                                </div>
                            </article>
                        )

                    })}

                </div>
            </div>
        </section>
    )
}

export default Portfolio