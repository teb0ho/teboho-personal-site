import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {

    const [documentSize, setDocumentSize] = useState(0);
    const [scrollSize, setScrollSize] = useState(0);

    useEffect(() => {
        setScrollSize(document.body.scrollHeight);
        setDocumentSize(document.documentElement.clientHeight);
    }, [documentSize, scrollSize]);

    
    return (
        <div className={`foot tc secondary-type ${scrollSize > documentSize ? '' : 'foot-fit-to-screen'}`}>2018 - {new Date().getFullYear()} Teboho</div>
    );
}

export default Footer;