import projectImg1 from "../assets/project-img1.webp";

import Work from "../components/Work";

function Project () {
    const PROJECTS = [
        {
            title: "To-Do List",
            description: "A simple to-do list application that allows users to add, edit, and delete tasks.",
            image: projectImg1,
            github: "https://github.com/swe-thinhnguyen1701/to-do-list",
            link: "https://unrivaled-sprinkles-0690f9.netlify.app/",
            technologies: ["React", "JS"]
        },
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