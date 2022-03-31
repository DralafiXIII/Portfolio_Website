import React from 'react';
import './header.css';

function Header() {
    return (
        <div>
            <div>
                <div className="portfolio__header section__padding" id="home">
                    <div className="portfolio__header-content">
                        <h1 className="gradient__text">Welcome to my website!</h1>
                        <p>
                            This website serves as a general hub for a number of things about me, both personal and professional.
                            Above you can see navigation buttons that include a brief summary about me à la 'About', my academic history à la 'Education',
                            my technical 'Work History', a 'Projects' page containing various projects, large and small, that I've worked on throughout the years,
                            and a 'Contact' button allowing you to reach out to me via a public email address.
                        </p>          
                        <p>
                            If you click my name, you'll find a submenu containing links to my LinkedIn profile, my public Github, my Facebook account, and a dated copy of my resume so you can know when I last updated it.
                        </p>
                        <ul>TODO list for this website:
                            <li>Create alternative Flutter version as an excuse to learn Flutter and Dart</li>
                            <li>Implement visitor counter to be displayed on either the navbar or displayed footer</li>
                            <li>Automate resume generation using pdfmake and a JSON backend</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header
