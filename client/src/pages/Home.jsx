import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpeg";
import TypewriterAnimation from "../components/TypewriterAnimation";
import DownloadResume from "../components/DownloadResume";
import Showcase from "../components/Showcase";

function Home() {
    const SUB_LINKS = [
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/thinh-nguyen-10b31a218/",
        },
        {
            icon: faGithub,
            link: "https://github.com/swe-thinhnguyen1701",
        },
        {
            icon: faPhone,
            link: "/contact",
        }
    ];



    return (
        <article>
            <section className="introduction">
                <div className="introduction-content">
                    <h2>
                        Hello I'm <br /><TypewriterAnimation />
                    </h2>
                    <p>I design and develop innovative digital solutions that prioritize performance, scalability, and user experience. With expertise in both frontend and backend technologies, I transform ideas into powerful, real-world applications that solve complex challenges and drive business growth.</p>
                    <div className="sub-links">
                        <DownloadResume />
                        <ul className="list">
                            {SUB_LINKS.map((subLink, index) => {
                                return (
                                    <li key={index} className="list-item">
                                        <Link to={subLink.link} target={subLink.link !== "/contact" ? "_blank" : ""} className="link">
                                            <FontAwesomeIcon icon={subLink.icon} className="icon" />
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="introduction-img">
                    <img src={avatar} alt="avatar" className="avatar" />
                </div>
            </section>
            <section>
                <Showcase />
            </section>
        </article>
    )
}

export default Home;