import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="portfolio__header section__padding" id="home">
            <div className="portfolio__header-content">
                <h1 className="gradient__text">Welcome to the portfolio website for Sean Settgast</h1>
                <p>I am interested in all things tech: Cyber Security, DevOps, general IT, and Software Engineering! I am interested in seeing
                    how technology shapes our everday lives, society, cultures, and how it will impact all those things in the future.
                </p>
                <div className="portfolio__header-content__input">
                    <input type="email" placeholder="Your e-mail address" />
                    <button type="button">Get Started!</button>
                </div>
                <div className="portfolio__header-content__people">
                    {/* <img src={people} alt="people"/> */}
                    <p>1,600 people have requested access in the last 24 hours.</p>
                </div>
            </div>
        </div>
    )
}

export default Header
