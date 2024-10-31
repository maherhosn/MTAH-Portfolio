// Asked Xpert Learning assistance to help me create the project component


const Project = ({
    title, description,liveLink,repoLink}) => {

    return (
        <section className="flex-item">
        <div>
            <h3>{title}</h3>
            <a className="live" href={liveLink} target="_blank" rel="noopener noreferrer">View Web</a>
            <a className="git" href={repoLink} target="_blank" rel="noopener noreferrer">View Git</a>
        </div>
        <img className={description} />
        </section>
    );
};

export default Project;