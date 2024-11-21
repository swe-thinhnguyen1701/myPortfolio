import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Contact() {
    const CONTACT_LINKS = [
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/thinh-nguyen-10b31a218/",
            label: "LinkedIn",
            text: "https://www.linkedin.com/in/thinh-nguyen-10b31a218/"
        },
        {
            icon: faEnvelope,
            link: "mailto:charles.nguyen1701@gmail.com",
            label: "Email",
            text: "charles.nguyen1701@gmail.com"
        }
    ];

    return (
        <article className="contact">
            <ContactForm />
            <ul className="list">
                {CONTACT_LINKS.map((contact, index) => (
                    <li key={index} className="list-item">
                        <div className="container">
                            <FontAwesomeIcon icon={contact.icon} />
                        </div>
                        <Link to={contact.link} target="_blank" className="link">
                            <span>{contact.label}</span>
                            <span>{contact.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default Contact;