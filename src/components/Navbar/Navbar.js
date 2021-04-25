import React, { useState } from 'react';
import '@fontsource/varela-round';
import './Navbar.css';



const NavBar = () => {
    const [open, setOpen] = useState('');

    const toggleMenu = () => {
        if (open === '') {
            setOpen('open');
        }
        else {
            setOpen('');
        }
    }

    const handleNavClick = () => {
        setOpen('');
    }

    return (
        <>
            <div className="overlay"></div>
            <div className={`menu ${open}`}>
                    <a href="/">Home</a>
                    <a onClick={handleNavClick} href="#skills">Skills</a>
                    <a onClick={handleNavClick} href="#">Experience</a>
                    <a onClick={handleNavClick} href="#">Blog</a>
            </div>
            <nav>
                <a href="#" className="logo"><span ><strong>teboho<span className="surname">mphure</span></strong></span></a>
                <a onClick={toggleMenu} className={`hamburger ${open}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className="header__links">
                    <a href="/">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#">Experience</a>
                    <a href="#">Blog</a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;