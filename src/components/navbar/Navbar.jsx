import React, { useState, useEffect, useRef, useContext } from 'react';
import './navbar.css';
import  { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/31547629circ.png';
import { About, Education, Workhistory, Projects, Links } from '../../components';
import { Header } from '../../containers';
import { ComponentDisplayContext } from "../../contexts/ComponentDisplayContext";

// function changeComponent(comp){
//     if (sessionStorage.getItem('viewComponent') !== comp) {
//         sessionStorage.setItem('viewComponent', comp);
//         window.location.reload(false);
//     }
// }

// BEM --> Block Element Modifier
function Menu() {    
const { setComp } = useContext(ComponentDisplayContext);

    return (
        <>
            <p onClick={() => setComp(<About />)}>About</p>
            <p onClick={() => setComp(<Education />)}>Education</p>
            <p onClick={() => setComp(<Workhistory />)}>Work History</p>
            <p onClick={() => setComp(<Projects />)}>Projects</p>
            <p>Contact</p>
        </>
    );
}

function Navigation() {
    const node = useRef();
    const [toggleMenu, setToggleMenu] = useState(false);
    const { setComp } = useContext(ComponentDisplayContext);

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
        <div ref={node} className="portfolio__navbar">
            <div className="portfolio__navbar-links">
                <div className="portfolio__navbar-links_logo">
                    <div>
                        <img onClick={() => setComp(<Header />)} src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="portfolio__navbar-links_container">
                    <Menu />
                </div>
                <div className="portfolio__navbar-name">
                    <Links />
                </div>
            </div>
            <div className="portfolio__navbar-menu">
                {toggleMenu 
                ? <RiCloseLine color="#ffffff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenuLine color="#ffffff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="portfolio__navbar-menu_container scale-up-center">
                        <div className="portfolio__navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navigation

// Kept original for reference so that I can componentize drop-down menus
// import React, { useState } from 'react';
// import './navbar.css';
// import  { RiMenuLine, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/31547629circ.png';
// import { Links } from '../../components';

// // BEM --> Block Element Modifier
// const Menu = () => (
//     <>
//         <p><a href="#about">About</a></p>
//         <p><a href="#education">Education</a></p>
//         <p><a href="#workhistory">Work History</a></p>
//         <p><a href="#projects">Projects</a></p>
//         <p><a href="#contact">Contact</a></p>
//     </>
// )

// const Navigation = () => {
//     const [toggleMenu, setToggleMenu] = useState(false);

//     return (
//         <div className="portfolio__navbar">
//             <div className="portfolio__navbar-links">
//                 <div className="portfolio__navbar-links_logo">
//                     <a href="#home">
//                         <img src={logo} alt="logo"/>
//                     </a>
//                 </div>
//                 <div className="portfolio__navbar-links_container">
//                     <Menu />
//                 </div>
//                 <div className="portfolio__navbar-name">
//                     <Links />
//                 </div>
//             </div>
//             <div className="portfolio__navbar-sign">
//                 <p>Sign in</p>
//                 <button type="button">Guest Signin</button>
//             </div>
//             <div className="portfolio__navbar-menu">
//                 {toggleMenu 
//                 ? <RiCloseLine color="#ffffff" size={27} onClick={() => setToggleMenu(false)} />
//                 : <RiMenuLine color="#ffffff" size={27} onClick={() => setToggleMenu(true)} />}
//                 {toggleMenu && (
//                     <div className="portfolio__navbar-menu_container scale-up-center">
//                         <div className="portfolio__navbar-menu_container-links">
//                             <Menu />
//                             <div className="portfolio__navbar-menu_container-links-sign">
//                                 <p>Sign in</p>
//                                 <button type="button">Guest Signin</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Navigation
