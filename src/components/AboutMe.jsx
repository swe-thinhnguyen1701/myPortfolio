/* eslint-disable react/no-unescaped-entities */
import Name from "./Name";

function AboutMe() {
    return (
        <>
            <h2>ABOUT ME</h2>
            <Name />
            <p className="about-me">
                I'm a passionate and driven full-stack developer with a strong foundation in both front-end and back-end development. I graduated from the Full-Stack Development Bootcamp at UC Berkeley, where I honed my skills in technologies like React, Node.js, MongoDB, PostgreSQL, and more.
            </p>
            <p className="about-me">
                My journey into coding began with a fascination for creating innovative solutions that make a real impact. I thrive on challenges, enjoy solving complex problems, and take pride in building user-friendly, efficient applications.
            </p>
            <p className="about-me">
                Currently, I’m focused on landing my first role in the tech industry, where I can apply my technical expertise and dedication to contribute to impactful projects. Alongside my professional growth, I’m eager to connect with like-minded individuals who share a passion for technology and innovation.
            </p>
            <p className="about-me">
                Let’s connect and build something great together!
            </p>
        </>
    )
}

export default AboutMe;