import './about.css';
import React from 'react';
import family from '../../assets/49206222_10156078339487883_5606622940666789888_o.jpg';

const About = () => {
    return (
        <div className="portfolio__about section__padding">
            <div className="portfolio__about-content">
                <h1 className="gradient__text">
                    About me...
                </h1>
                <img className="photo" src={family} alt="family" />
                <p>
                    My name is Sean Andrew Settgast. I was born and raised in Columbus, Nebraska. I was an IT administrator for First National Bank of Columbus 
                    for nearly 3 years before I left to join the United States Air Force (USAF) in 2011. After tech school, I was stationed in Ft. Gordon, Georgia for 4 years
                    until I left the USAF in 2017. I then went to school fulltime at Augusta University until 2020 when I received a Bachelor of Science
                    with a major in Computer Science. I interned fulltime as a Software Engineer at Savannah River National Laboratory for 3 months before transitioning to
                    Savannah River Nuclear Solutions (SRNS) as a Cyber Security Specialist for nearly 2 years. In late 2021 I transitioned into Software Engineering at SRNS,
                    which I have been doing ever since.
                </p>
                <p>I have a varied background, but the majority of my work experiences have a common thread: technology. I have experience in:</p>
                <p></p>
                <div className="columns">
                    <ul>
                        <li>Information Technology</li>
                        <li>Network Administration</li>
                        <li>System Administration</li>
                        <li>Cyber Security</li>
                        <li>Operational Technology</li>
                        <li>Threat Analysis</li>
                        <li>Configuration Management</li>
                        <li>Database Administration</li>
                        <li>DevOps</li>
                        <li>Fullstack Software Engineering</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
