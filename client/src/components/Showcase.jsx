import CountUp from "react-countup";

function Showcase() {
    const SHOWCASE_DATA = [
        {
            number: 8,
            text: "Months of experience"
        },
        {
            number: 20,
            text: "Project completed"
        },
        {
            number: 14,
            text: "Technologies mastered"
        },
        {
            number: 400,
            text: "Code commits"
        }
    ];

    return (
        <div className="showcase-container">
            {SHOWCASE_DATA.map((showcase, index) => {
                return (
                    <div className="showcase" key={index}>
                        <span className="number">
                            <CountUp start={0} end={showcase.number} duration={2.5} delay={0} />
                        </span>
                        <span>{showcase.text}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Showcase;