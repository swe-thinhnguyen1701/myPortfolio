import PropTypes from "prop-types";

import Badge from "./Badge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Work({ project }) {
    return (
        <div className="work">
            <div className="work-img">
                <img src={project.image} alt="personal project image" />
            </div>
            <div className="work-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul className="list technologies">
                    {project.technologies.map((tech, index) => (
                        <li className="list-item" key={index}>
                            <Badge text={tech} />
                        </li>
                    ))}
                </ul>
                <ul className="list work-links">
                    <li className="list-item">
                        <a className="link" href={project.github} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            <span> Source Code</span>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className={`link ${!project.link ? "isDisable" : ""}`} href= {project.link ? project.link : "#"} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                            <span> {project.link ? "Live demo" : "In Progress"}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Work.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        link: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default Work;