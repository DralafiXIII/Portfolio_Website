import React, { useEffect, useState, useRef } from 'react';
import './links.css';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillFilePdf, AiFillFileText } from 'react-icons/ai';

const Links = () => {
    const node = useRef();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setToggleMenu(false);
    };
    
    useEffect(() => {
        if (toggleMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleMenu]);

    return (
        <div ref={node} className="portfolio__links-menu">
            {<div color="#ffffff" size={27} onClick={() => setToggleMenu(!toggleMenu)}>Sean Settgast</div>}
            {toggleMenu && (
                <div className="portfolio__links-menu_container scale-up-center">
                    <div className="portfolio__links-menu_container-links">
                        <p><a href="https://www.linkedin.com/in/seansettgast/"><AiFillLinkedin color="#ffffff" /> LinkedIn</a></p>
                        <p><a href="https://github.com/DralafiXIII"><AiFillGithub color="#ffffff" /> Github</a></p>
                        <p><a href="https://www.facebook.com/sean.settgast/"><AiFillFacebook color="#ffffff" /> Facebook</a></p>
                        <p><a href="../../public/assets/Resume (1-18-2022).pdf" target="_blank" download><AiFillFileText color="#ffffff" /> Resume</a></p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Links
