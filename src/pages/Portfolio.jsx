import Project from '../components/Projects'

export default function Portfolio() {
    const projects = [
        {
            description: 'weather',
            title: "Weather-5Day-Dashboard",
            liveLink: 'https://weather-5day-dashboard.onrender.com/',
            repoLink: 'https://github.com/maherhosn/Weather-5Day-Dashboard'
        },
        {
            description: 're-Rerating',
            title: "Fee Re-Rating Engine",
            liveLink: 'https://patents.google.com/patent/US20230413021A1/en?oq=20230413021',
            // repoLink: 'https://patents.google.com/patent/US20230413021A1/en?oq=20230413021'
        },
        {
            description: 'playlistPersona',
            title: "Music-Playlist-with-AI",
            liveLink: 'https://test-deploy-ivka.onrender.com/CurrentPlaylist',
            repoLink: 'https://github.com/ikebyers/Playlist-Persona'
        },
        {
            description: 'employeeFinder',
            title: "Employee-Finder",
            liveLink: 'https://gitemployeefinder.netlify.app',
            repoLink: 'https://github.com/maherhosn/Employee-Finder'
        },
        {
            description: 'wordGuess',
            title: "Word-Guess-Game",
            liveLink: 'https://word-guess-game-k6m9.onrender.com/',
            repoLink: 'https://github.com/maherhosn/Word-Guess-Game'
        },  
        {
            description: 'jimkConnect4',
            title: "JIMK Connect4",
            liveLink: 'https://jimk-connect4.onrender.com/login',
            repoLink: 'https://github.com/keithrsialana/jimk-connect4'
        },
        {
            description: 'kanBanBoard',
            title: "Project Tracker - Kanban",
            liveLink: 'https://secure-kanban-board-2mks.onrender.com/',
            repoLink: 'https://github.com/maherhosn/secure-kanban-board'
        },
        {
            description: 'bookSmart',
            title: "BookCase - Library",
            liveLink: 'https://booksmart-m5nf.onrender.com/',
            repoLink: 'https://github.com/maherhosn/BookSmart'
        },
        {
            description: 'vehicleB',
            title: "Vehicle-Builder",
            // liveLink: 'https://github.com/maherhosn/Vehicle-Builder-Questionnaire/blob/main/README.md',
            repoLink: 'https://github.com/maherhosn/Vehicle-Builder-Questionnaire'
        },
        {
            description: 'jamLaundry',
            title: "JAM Laundry",
            // liveLink: 'https://maherhosn.github.io/Project1/',
            repoLink: 'https://github.com/maherhosn/Project1'
        },
        {
            description: 'eTracker',
            title: "Employee-Tracker-Form",
            // liveLink: 'https://github.com/maherhosn/Employee-Tracker-Form/blob/main/README.md',
            repoLink: 'https://github.com/maherhosn/Employee-Tracker-Form'
        },
        {
            description: 'readMeGen',
            title: "The README Generator",
            // liveLink: 'https://github.com/maherhosn/The-README-Generator/blob/main/README.md',
            repoLink: 'https://github.com/maherhosn/The-README-Generator'
        },
        // Add more projects as needed
    ];

    const mapProjectsToHTML =
        projects.map((project) => (
            // eslint-disable-next-line react/jsx-key
            <Project
                title={project.title}
                description={project.description}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
            />
        ))

    return (
        <section className="page-section">
            <h1>Portfolio</h1>
            <article className="flex-container">
                {mapProjectsToHTML}

            </article>
        </section>
    );
}