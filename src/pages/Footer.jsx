import './Footer/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icon-placeholder">
                <a href="https://github.com/maherhosn?tab=repositories" rel="noopener noreferrer">
                    <i className="fa-github"></i>
                    github
                </a>
                <a href="https://www.linkedin.com/in/maher-aboul-hosn/" rel="noopener noreferrer">
                    <i className="fa-linkedin"></i>
                    LinkedIn
                </a>
                <a href="https://stackoverflow.com/?newreg=13d04bac495b4125950a61341bc37f1d" rel="noopener noreferrer">
                    <i className="fa-stackOverflow"></i>
                    StackOverFlow
                </a>
            </div>
        </footer>
    );
};


export default Footer;