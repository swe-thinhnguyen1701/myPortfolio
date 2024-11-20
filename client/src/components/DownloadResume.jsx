import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function DownloadResume() {
    return (
        <Link to="/CHARLES_Resume_Web.pdf" target="_blank" download className="link download-btn">
            <FontAwesomeIcon icon={faFileArrowDown} className="icon" />
            <span>Download Resume</span>
        </Link>
    )
}

export default DownloadResume;