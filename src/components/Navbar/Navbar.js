import React, { useState } from 'react';
import '@fontsource/varela-round';
import './Navbar.css';



const NavBar = () => {
    const [open, setOpen] = useState('hide');

    const toggleMenu = () => {
        if (open === 'hide') {
            setOpen('open');
        }
        else {
            setOpen('hide');
        }
    }

    return (
        <>
            <div className="overlay"></div>
            <div className={`menu ${open}`}>
                    <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
            </div>
            <nav>
                <a href="/" className="logo"><span ><strong>teboho<span className="surname">mphure</span></strong></span></a>
                <a onClick={toggleMenu} className={`hamburger ${open}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className="header__links">
                    <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;