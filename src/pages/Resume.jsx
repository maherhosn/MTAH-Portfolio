import myrResume from './ResumePage/Resume20250120.pdf'
import './ResumePage/Resume.css'
import './../css/style.css'

const Resume = () => {
    const frontEndProficiencies = [
        'JavaScript',
        'Typescript',
        'React',
        'Redux',
        'HTML',
        'XML',
        'CSS',
        'Git',
        'Java',
        'C#',
        'Python',
        'Material-UI',
        'Bootstrap'
    ];

    const backEndProficiencies = [
        'Node.js',
        'RESTful APIs',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Express',
        'Cypress',
        'BASH/Shell scripting',
        'Unix/Linix Administration',
        'Version Control with CICD depoloyment',
        'CircleCI',
        'gitHub Actions',
        'AWS',
        'Containerization / Kubernetes',
        'Geo-Redundancy Configuration'
    ];

    return (
        <div className="resume-section">
            <h1>Resume</h1>
            <h6>
                <a href={myrResume} download="Resume20250120.pdf">
                    <button>Download Resume</button>
                </a>
            </h6>
            <div className='flex-resume'>
                <section className="proficiency-list">
                    <h3>Front-End Proficiencies</h3>
                    <ul className="proficiency-list">
                        {frontEndProficiencies.map((proficiency, index) => (
                            <li key={index}>{proficiency}</li>
                        ))}
                    </ul >
                </section>
                <section className="proficiency-list">
                    <h3>Back-End Proficiencies</h3>
                    <ul className="proficiency-list">
                        {backEndProficiencies.map((proficiency, index) => (
                            <li key={index}>{proficiency}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Resume;