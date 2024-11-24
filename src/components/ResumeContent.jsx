/* eslint-disable react/prop-types */
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

function ResumeContent({selectedItem}) {
    switch (selectedItem) {
        case 0:
            return <Education />;
        case 1:
            return <Skills />;
        case 2:
            return <Experience />;
        case 3:
            return <AboutMe />;
        default:
            return null;
    }
}

export default ResumeContent;