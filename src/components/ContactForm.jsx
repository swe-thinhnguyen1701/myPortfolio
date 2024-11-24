import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ContactForm () {
    return (
        <form action="https://formspree.io/f/mzzbvwzy" method="post" className="contact-form">
            <h2>Contact Me</h2>
            <p>Don’t hesitate to contact me! Feel free to send me a message using the form below or reach out via the links provided.</p>
            <input type="text" name="name" placeholder="Your full name" maxLength={30}/>
            <input type="text" name="email" placeholder="Your email" maxLength={30}/>
            <textarea placeholder="Enter your message here" name="message" rows={20}/>
            <button type="submit" className="submit-btn">
                <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                <span> Send</span>
            </button>
        </form>
    );
}

export default ContactForm;