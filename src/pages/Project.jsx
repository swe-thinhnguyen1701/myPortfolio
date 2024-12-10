import projectImg1 from "../assets/project-img1.webp";
import inProgressImg from "../assets/in-progress.webp";

import Work from "../components/Work";

function Project () {
    const PROJECTS = [
        {
            title: "Game Hub",
            description: "A game hub that allows users to search for games and view their details.",
            image: inProgressImg,
            github: "https://github.com/swe-thinhnguyen1701/game-hub",
            link: null,
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