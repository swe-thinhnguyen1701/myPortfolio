import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function DownloadResume() {
    return (
        <Link to="/THINH_NGUYEN_WEB.pdf" target="_blank" download className="link download-btn">
            <FontAwesomeIcon icon={faFileArrowDown} className="icon" />
            <span>Download Resume</span>
        </Link>
    )
}

export default DownloadResume;