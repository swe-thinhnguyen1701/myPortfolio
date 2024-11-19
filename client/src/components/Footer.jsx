import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
    const CONNECTIONS = [
        {
            name: "LinkedIn",
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/thinh-nguyen-10b31a218/"
        },
        {
            name: "GitHub",
            icon: faGithub,
            link: "https://github.com/swe-thinhnguyen1701"
        },
        {
            name: "Email",
            icon: faEnvelope,
            link: "mailto:charles.nguyen1701@gmail.com"
        }
    ]
    return (
        <footer>
            <ul className="list">
                {CONNECTIONS.map((connection, index) => {
                    return (
                        <li key={index} className="list-item">
                            <Link to={connection.link} target="_blank" className="link">
                                <FontAwesomeIcon icon={connection.icon} className="icon"/>
                                <span>{connection.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <p>© 2024 - Charles Nguyen</p>
        </footer>
    )
}

export default Footer;