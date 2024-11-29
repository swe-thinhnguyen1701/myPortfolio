import { useState } from "react";
import vnFlag from "../assets/vn.png";
import usFlag from "../assets/usa.png";

function Name() {
    const NAME_INFO = [
        { id: 0, name: "Charles Nguyen", pronouce: "/t ∫a:lz win/" },
        { id: 1, name: "Thịnh Nguyễn", pronouce: "/thin win/" }];
    const [selectedName, setSelectedName] = useState(NAME_INFO[0]);

    const onClickHandler = (e) => {
        if (e.target.closest(".list-item").id === "0") {
            setSelectedName(NAME_INFO[0]);
        } else if (e.target.closest(".list-item").id === "1") {
            setSelectedName(NAME_INFO[1]);
        }
    }

    return (
        <div className="name-container">
            <div className="name">
                <h1>{selectedName.name}</h1>
                <span>{selectedName.pronouce}</span>
            </div>
            <div className="switcher">
                <ul className="list" onClick={(e) => onClickHandler(e)}>
                    <li className={`list-item ${selectedName.id === 0 ? "selected" : ""}`} id="0">
                        <img src={usFlag} alt="USA flag icon" />
                    </li>
                    <li className={`list-item ${selectedName.id === 1 ? "selected" : ""}`} id="1">
                        <img src={vnFlag} alt="Vietnam flag icon" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Name;