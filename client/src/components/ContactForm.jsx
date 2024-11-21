import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ContactForm () {
    return (
        <form className="contact-form">
            <h2>Contact Me</h2>
            <input type="text" placeholder="Your full name" maxLength={30}/>
            <input type="text" placeholder="Your email" maxLength={30}/>
            <textarea placeholder="Enter your message here" rows={20}/>
            <button type="submit" className="submit-btn">
                <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                <span> Send</span>
            </button>
        </form>
    );
}

export default ContactForm;