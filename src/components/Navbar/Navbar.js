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
                    <a onClick={handleNavClick} href="/blog">Blog</a>
                    <a onClick={handleNavClick} href="/contact">Contact</a>

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
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;