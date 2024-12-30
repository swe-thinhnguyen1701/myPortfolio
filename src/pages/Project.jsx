import projectImg1 from "../assets/project-img1.webp";
import projectImg2 from "../assets/project-img2.webp";
// import inProgressImg from "../assets/in-progress.webp";

import Work from "../components/Work";

function Project () {
    const PROJECTS = [
        {
            title: "Game Hub",
            description: "This project is a web application that fetches game data from the RAWG API, allowing users to explore and discover games. It features a dynamic interface to display all available games and provides filtering options by genre for a personalized user experience.",
            image: projectImg2,
            github: "https://github.com/swe-thinhnguyen1701/game-hub",
            link: "https://magnificent-zabaione-143434.netlify.app/",
            technologies: ["React", "TypeScript", "Chakra"]
        },
        {
            title: "To-Do List",
            description: "A simple to-do list application that allows users to add, edit, and delete tasks.",
            image: projectImg1,
            github: "https://github.com/swe-thinhnguyen1701/to-do-list",
            link: "https://unrivaled-sprinkles-0690f9.netlify.app/",
            technologies: ["React", "JS", "CSS"]
        }
    ]
    return (
        <>
            {PROJECTS.map((project, index) => (
                <Work key={index} project={project} />
            ))}
        </>
    )
}

export default Project;