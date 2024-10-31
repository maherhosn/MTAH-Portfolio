import '../css/style.css'

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div>
            <header>
                <h1>Maher AboulHosn</h1>
                <nav>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#portfolio"
                                onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#resume"
                                onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div class="hero-banner">
                <h3>System & Software Engineer</h3>
            </div>
        </div>
    )
}

export default NavTabs;