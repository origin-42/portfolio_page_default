const Header = ({currentPage, changePage}) => {

    return (
        <section id="header">
            <div id="header-container">
                <div className="title headerDiv">
                    <h1>DAVID PLUMMER</h1>
                    <h4>Web Developer</h4>
                </div>
                <div id="navigation" className="headerDiv">
                    <nav>
                        <ul>
                            <li className={ currentPage === 'about'? `nav-list-selected`: `nav-list` } onClick={ () => changePage('about') }>About</li>
                            <li className={ currentPage === 'portfolio'? `nav-list-selected`: `nav-list` } onClick={ () => changePage('portfolio') }>Portfolio</li>
                            <li className={ currentPage === 'resume'? `nav-list-selected`: `nav-list` } onClick={ () => changePage('resume') }>Resume</li>
                            <li className={ currentPage === 'contact'? `nav-list-selected`: `nav-list` } onClick={ () => changePage('contact') }>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Header