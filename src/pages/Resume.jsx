import myrResume from './ResumePage/Resume20241005.pdf'
import './ResumePage/Resume.css'
import './../css/style.css'

const Resume = () => {
    const frontEndProficiencies = [
        'JavaScript',
        'React',
        'HTML',
        'XML',
        'CSS',
        'Git',
        'Java',
        'C#',
    ];

    const backEndProficiencies = [
        'Node.js',
        'RESTful APIs',
        'PostgreSQL',
        'MySQL',
        'Express',
        'BASH scripting',
        'Shell scripting',
        'Unix/Linix Administration',
        'Version Control with CICD depoloyment',
        'Containerization / Kubernetes',
        'Geo-Redundancy Configuration'
    ];

    return (
        <div className="resume-section">
            <h1>Resume</h1>
            <h6>
                <a href={myrResume} download="Resume20241005.pdf">
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