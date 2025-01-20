import projectImg1 from "../assets/project-img1.webp";
import projectImg2 from "../assets/project-img2.webp";
import tealicious from "../assets/tealicious.webp";
import weaversJobs from "../assets/weavers-job.webp";
import inProgressImg from "../assets/in-progress.webp";

import Work from "../components/Work";

function Project () {
    const PROJECTS = [
        {
            title: "To-Do List 2.0",
            description: "An enhanced to-do list application with an improved UX/UI design, offering various features to help users manage their daily tasks effectively. Users can easily add, remove, and modify tasks. The app includes intuitive buttons to streamline task management while adding or editing tasks. Additionally, if the task body is cleared during editing and the 'SAVE' button is pressed, the task will be automatically removed.",
            image: inProgressImg,
            github: "https://github.com/swe-thinhnguyen1701/todo-list-v2",
            link: null,
            technologies: ["React", "TypeScript", "Chakra", "uuid"]
        },
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
        },
        {
            title: "TeaLicious",
            description: "Tealicious is an e-commerce website offers users the ability to browse and purchase a wide variety of teas with ease. Whether you're a casual guest or a registered member, you'll enjoy a seamless and interactive shopping experience powered by modern web technologies.",
            image: tealicious,
            github: "https://github.com/swe-thinhnguyen1701/TeaLicious",
            link: "https://tealicious.onrender.com/",
            technologies: ["React", "JS", "CSS", "AWS S3", "MongoDB", "Node.js", "Stripe", "GraphQL", "Apollo"]

        },
        {
            title: "Weavers Jobs",
            description: "Weavers Jobs is a web application that allows users to search for jobs and apply for positions. It features a dynamic interface to display all available jobs and provides filtering options by location for a personalized user experience.",
            image: weaversJobs,
            github: "https://github.com/swe-thinhnguyen1701/job-board",
            link: "https://web-weavers-job-site.onrender.com/",
            technologies: ["Handlebars", "PostgreSQL", "Node.js", "Express", "Multer", "CSS", "JS", "HTML"]
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