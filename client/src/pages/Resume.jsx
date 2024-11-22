import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGrip, faGraduationCap, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import ResumeContent from "../components/ResumeContent";
import Skills from "../components/Skills";

function Resume() {
    const [selectedItem, setSelectedItem] = useState(0);
    const MENU = [
        {
            name: "Education",
            icon: faGraduationCap,
        },

        {
            name: "Skills",
            icon: faGrip,
        },
        {
            name: "Experience",
            icon: faSuitcase,
        },
        {
            name: "About Me",
            icon: faUser,
        }
    ];

    const itemSelectedHandler = (e) => {
        const listItem = e.target.closest(".list-item");
        if (listItem) {
            const index = parseInt(listItem.dataset.index, 10);
            setSelectedItem(index);
        }
    }

    return (
        <article className="resume-page">
            <section className="resume-menu">
                <ul className="list" onClick={itemSelectedHandler}>
                    {MENU.map((item, index) => {
                        return (
                            <li className={selectedItem === index ? "list-item highlight" : "list-item"} key={index} data-index={index}>
                                <FontAwesomeIcon icon={item.icon} className="icon"/>
                                <span>{item.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section>
                <ResumeContent selectedItem={selectedItem} />
            </section>
        </article>
    )
}

export default Resume;