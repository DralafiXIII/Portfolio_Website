import React from 'react';
import './education.css';
import ccaf from '../../assets/181214-F-ZZ999-1001.png';
import ksu from '../../assets/screen-shot-2020-05-22-at-10-28-42-am.png';
import au from '../../assets/ghows-GA-200829825-bd7dc827.png';
import dliflc from '../../assets/Defense_Language_Institute_copy.png';
import ccc from '../../assets/ccc-logo-for-news-default-1.png';

function Education() {
    return (
        <div className="portfolio__education section__padding">
            <div className="portfolio__education-content">
                <h1 className="gradient__text">Academic Background</h1>
                <div>
                    <a class="logo" href="https://www.kennesaw.edu/" target="_blank" rel="noopener noreferrer">
                        <img src={ksu} width="32%" alt="Kennesaw State University"/>
                    </a>
                    <h3>Kennesaw State University</h3>
                    <h4>Master of Science (M.S.) - Software Engineering</h4>
                    <h4>Graduation date: TBD</h4>
                    <p>I am currently taking a break from the program, assessing future goals.</p>
                    <p>Classes taken so far:</p>
                    <ul className="row">
                        <div className="columns">
                            <li>Requirements Engineering</li>
                            <li>Software Engineering</li>
                            <li>Software Evaluation and Measurement</li>
                            <li>Software Project Management</li>
                        </div>
                    </ul>
                </div>
                <div>
                    <a class="logo" href="https://www.augusta.edu/" target="_blank" rel="noopener noreferrer">
                        <img src={au} width="15%" alt="Augusta University"/>
                    </a>
                    <h3>Augusta University</h3>
                    <h4>Bachelor of Science (B.S.) - Computer Science</h4>
                    <h4>Graduation date: May 2020</h4>
                    <p>Was one of three on a team of engineers to develop Veno, a web application developed using .NET and SQL that allows vegans to determine if a particular wine being examined in a store is vegan friendly or not. Lead development of an internally-used search UI/webcrawler for BestLawyers.com designed with AWS elasticsearch that allows employees to easily sift through lawyer data in a large number of SQL databases.</p>
                    <h4>Relevant coursework:</h4>
                    <ul className="row">
                        <div className="columns">
                            <li>Principles of Computer Programming I & II</li>
                            <li>Theory of Computation</li>
                            <li>Data Structures</li>
                            <li>Computer Organization</li>
                            <li>Software Engineering</li>
                            <li>Database Systems</li>
                        </div>
                    </ul>
                    <h4>Language Experience:</h4>
                    <ul className="row">
                        <div className="columns">
                            <li>Assembly</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>HTML/CSS</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                        </div>
                    </ul>
                </div>
                <div>
                    <a class="logo" href="https://www.airuniversity.af.edu/Barnes/CCAF/" target="_blank" rel="noopener noreferrer">
                        <img id="ccaf" src={ccaf} width="14%" alt="Community College of the Air Force"/>
                    </a>
                    <h3 className="portfolio__education-content">Community College of the Air Force</h3>
                    <h4 className="portfolio__education-content">Associate of Applied Science (A.A.S.) - Intelligence Studies</h4>
                    <h4 className="portfolio__education-content">August 2017</h4>
                    <p className="portfolio__education-content">While the majority of the coursework for this degree is specific to work in the intelligence community, there were some courses taken that were generally related to technology, including network analysis and digital forensics, as well as some general education fundamentals, such as Calculus I and Public Speaking.</p>
                </div>
                <div>
                    <a class="logo" href="https://www.dliflc.edu/" target="_blank" rel="noopener noreferrer">
                        <img id="dliflc" src={dliflc} width="15%" alt="Defense Language Institute Foreign Language Center"/>
                    </a>
                    <h3>Defense Language Institute Foreign Language Center</h3>
                    <h4>Associate of Arts (A.A.) - Urdu Language</h4>
                    <h4>Graduation date: October 2014</h4>
                    <p>Learned the language of Urdu, the national language of Pakistan. Also learned a great deal about Pakistani culture as well as the culture of the Middle-East in general. This includes a great deal of diversity training and cultural awareness taught in a joint academic and military environment. </p>
                </div>
                <div>
                    <a class="logo" href="https://www.cccneb.edu/columbus" target="_blank" rel="noopener noreferrer">
                        <img id="ccc" src={ccc} width="18%" alt="Central Community College"/>
                    </a>
                    <h3>Central Community College - Platte Campus</h3>
                    <h4>Associate of Applied Science (A.A.S.) - Computer Systems Networking</h4>
                    <h4>Graduation date: December 2007</h4>
                    <p>Learned a great deal about computer-based technology in general, including networking fundamentals, basic and advanced computer repair, network switch/router/firewall configuration and maintenance, system administration, and some early fundamentals in cyber security.</p>
                    <h4>Relevant coursework:</h4>
                    <ul class="row">
                        <div class="columns">
                            <li>CISCO Networking I, II, III, & IV</li>
                            <li>Digital Communications</li>
                            <li>Ethical Hacking</li>
                            <li>PC Repair I & II</li>
                        </div>
                    </ul>
                    <h4>Institutional Certifications:</h4>
                    <ul class="row">
                        <div class="columns">
                            <li>Basic Electronics</li>
                            <li>Microcomputer Repair</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education
