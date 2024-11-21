import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFile, faPhone, faDiagramProject } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPage = useLocation().pathname;
    const MENU = [
        { name: "Home", link: "/", icon: faHouse },
        { name: "About me", link: "/about", icon: faUser },
        { name: "Resume", link: "/resume", icon: faFile },
        { name: "Works", link: "/works", icon: faDiagramProject },
        { name: "Contact", link: "/contact", icon: faPhone }
    ];
    const menuHandler = (e) => {
        if(e.target.closest('.menu-item') || e.target.closest(".menu-toggle")) {
            setIsOpen(!isOpen);
        }
    }

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="link home-link" onClick={() => setIsOpen(false)}>
                        <span>Charles</span>
                    </Link>
                </div>
                <div className={isOpen ? "nav-right open" : "nav-right"} onClick={(e) => menuHandler(e)}>
                    <div className='menu-toggle'>
                        <span className="bar"></span>
                    </div>
                    <ul className="list menu">
                        {MENU.map((item, index) => (
                            <li className="menu-item" key={index}>
                                <Link to={item.link} className={currentPage === item.link ? "link highlight" : "link"}>
                                    <FontAwesomeIcon icon={item.icon} className="icon" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;