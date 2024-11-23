function Education() {
    const EDUCATION = [
        {
            school: "University of California, Berkeley",
            degree: "Certificate",
            program: "Full Stack Development",
            time: "Mar 2024 - Sep 2024",
            courses: "Developed practical skills through hands-on projects and real-world applications, utilizing modern development tools and methodologies."
        },
        {
            school: "San Jose State University",
            degree: "B.S.",
            program: "Applied Mathematics",
            time: "Sep 2019 - May 2022",
            courses: "Courses: Computer Architecture, Graph Theory, Design and Analysis Algorithms, Applied and Industrial Algebra"
        },
        {
            school: "De Anza College",
            degree: "A.S.",
            program: "Computer Science",
            time: "Sep 2016 - Jun 2019",
            courses: "Courses: Advance Java Programming, Data Structure and Algorithm, Bash Scripting, Calculus, Linear Algebra"
        }
    ]
    return (
        <>
            <h2>EDUCATION</h2>
            {EDUCATION.map((education, index) => {
                return (
                    <div key={index} className="education">
                        <h3>{education.school}</h3>
                        <p>
                            <span className="education-degree">{education.degree}</span> <span className="education-program">{education.program}</span>
                        </p>
                        <p>{education.time}</p>
                        <ul>
                            <li>
                                <p>{education.courses}</p>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default Education;