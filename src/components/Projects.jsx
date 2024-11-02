// Asked Xpert Learning assistance to help me create the project component
import { SiGithub } from 'react-icons/si';
import { FcGoogle } from "react-icons/fc";

const Project = ({
    title, description, liveLink, repoLink }) => {

    return (
        <section className="flex-item">
            <div>
                <h3>{title}</h3>
                {liveLink && (
                    <a className="live" href={liveLink} target="_blank" rel="noopener noreferrer">
                        <FcGoogle size={30} /> View Web
                    </a>
                )}
                {repoLink && (
                    <a className="git" href={repoLink} target="_blank" rel="noopener noreferrer">
                        <SiGithub size={30} /> View Git
                    </a>
                )}
            </div>
            <img className={description} />
        </section>
    );
};

export default Project;