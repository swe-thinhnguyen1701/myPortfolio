function Experience () {
    const EXPERIENCES = [
        {
            position: "Test Technician",
            company: "FoxConn",
            time: "July 2025 - Present",
            description: [
                "Collaborate with engineering teams to investigate component failure using Python scripts and Linux command-line tools, identifying root causes efficiently.",
                "Develop and maintain Python automation scripts to improve testing quality and reduce test cycle time, helping the team finish projects ahead of schedule and quickly resolve failures.",
                "Partner with cross-functional teams to analyze results, discuss solutions, and implement corrective actions for process optimization."
            ]
        },
        {
            position: "Backend Developer Internship",
            company: "Chosn App",
            time: "May 2023 - Aug 2023",
            description: [
                "Collaborated with a team of three engineers to build robust backend services using AWS technologies and Node.js,enhancing the reliability and scalability of the application.",
                "Contributed to the creation of a reminder service that helped users manage and complete daily tasks, resulting in increased user engagement and improved mental health support.",
                "Refactored and optimized existing code to boost readability and database performance, leading to more efficient operations and reduced maintenance time."
            ]
        }
    ]

    return (
        <>
            <h2>EXPERIENCE</h2>
            {EXPERIENCES.map((experience, index) => {
                return (
                    <div key={index} className="experience">
                        <h3>{experience.position}</h3>
                        <div className="container">
                            <p className="experience-company">{experience.company}</p>
                            <p>{experience.time}</p>
                        </div>
                        <ul className="experience-description">
                            {experience.description.map((description, index) => {
                                return (
                                    <li key={index}>
                                        <p>{description}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default Experience;