import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faJs, faCss3, faPython, faAws, faNode, faHtml5, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

function Skills() {
    const LANGUAGES = [
        {
            name: "Java",
            icon: faJava
        },
        {
            name: "Python",
            icon: faPython
        },
        {
            name: "JavaScript",
            icon: faJs
        },
        {
            name: "TypeScript",
            icon: faCode
        },
        {
            name: "HTML",
            icon: faHtml5
        },
        {
            name: "CSS",
            icon: faCss3
        },
        {
            name: "Lua",
            icon: faCode
        }
    ];
    const FONTEND = [
        {
            name: "React",
            icon: faReact
        },
        {
            name: "Handlebars",
            icon: faNodeJs
        },
        {
            name: "Apollo Client",
            icon: faCode
        }
    ];
    const BACKEND = [
        {
            name: "Node.js",
            icon: faNode
        },
        {
            name: "GraphQL",
            icon: faCode
        },
        {
            name: "Express.js",
            icon: faNodeJs
        },
        {
            name: "AWS Lambda",
            icon: faAws
        },
        {
            name: "AWS S3 Bucket",
            icon: faAws
        },
        {
            name: "AWS API Gateway",
            icon: faAws
        }
    ];
    const DATABASES = [
        {
            name: "MongoDB",
            icon: faDatabase
        },
        {
            name: "PostgreSQL",
            icon: faDatabase
        },
        {
            name: "AWS DynamoDB",
            icon: faAws
        }
    ];
    return (
        <>
            <h2>SKILLS</h2>
            <div className="skills-container">
                <h3>Programming Languages</h3>
                <ul className="list">
                    {LANGUAGES.map((language, index) => {
                        return (
                            <li key={index} className="list-item">
                                <FontAwesomeIcon icon={language.icon} className="icon" />
                                <span>{language.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="skills-container">
                <h3>Frontend</h3>
                <ul className="list">
                    {FONTEND.map((frontend, index) => {
                        return (
                            <li key={index} className="list-item">
                                <FontAwesomeIcon icon={frontend.icon} className="icon" />
                                <span>{frontend.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="skills-container">
                <h3>Backend</h3>
                <ul className="list">
                    {BACKEND.map((backend, index) => {
                        return (
                            <li key={index} className="list-item">
                                <FontAwesomeIcon icon={backend.icon} className="icon" />
                                <span>{backend.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="skills-container">
                <h3>Databases</h3>
                <ul className="list">
                    {DATABASES.map((database, index) => {
                        return (
                            <li key={index} className="list-item">
                                <FontAwesomeIcon icon={database.icon} className="icon" />
                                <span>{database.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Skills;