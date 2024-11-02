import './Footer/Footer.css';
import { SiGithub, SiLinkedin, SiStackoverflow } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icon-placeholder">
                <a href="https://github.com/maherhosn?tab=repositories" rel="noopener noreferrer">
                    <SiGithub  size={30} />
                </a>
                <a href="https://www.linkedin.com/in/maher-aboul-hosn/" rel="noopener noreferrer">
                    <SiLinkedin  size={30} />
                </a>
                <a href="https://stackoverflow.com/?newreg=13d04bac495b4125950a61341bc37f1d" rel="noopener noreferrer">
                    <SiStackoverflow  size={30} />
                </a>
            </div>
        </footer>
    );
};


export default Footer;