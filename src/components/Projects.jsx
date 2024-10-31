// Asked Xpert Learning assistance to help me create the project component


const Project = ({
    title, description,liveLink,repoLink}) => {

    return (
        <section class="flex-item">
        <div>
            <h3>{title}</h3>
            <a class="live" href={liveLink} target="_blank" rel="noopener noreferrer">View Web</a>
            <a class="git" href={repoLink} target="_blank" rel="noopener noreferrer">View Git</a>
        </div>
        <img class={description} />
        </section>
    );
};

export default Project;