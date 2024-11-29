import PropTypes from "prop-types";

function Badge ({text}) {
    return (
        <span className="badge">{text}</span>
    )
}

Badge.propTypes = {
    text: PropTypes.string.isRequired
}

export default Badge;