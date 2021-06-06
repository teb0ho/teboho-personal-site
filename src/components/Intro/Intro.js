import React from 'react';
import './Intro.css';
import '../../styles/global.css';
import { navigate } from 'gatsby';

const Intro = () => {
    return ( 
        <div className="container tc">
          <div className="intro-cta">
            <img className="profile-image" src="/UNADJUSTEDNONRAW_thumb_87.jpg"/>
            <div className="tm"><strong>Howdy, I'm Teboho</strong></div>
            <div className="txl"><strong>Builder of Software and Great Digital Experiences.</strong></div>
            <p>I am a <strong>Fullstack Software Developer</strong> fascinated by the modern web and thrilled by building software from ideas to end product.</p>

            <button className="button-primary" onClick={() => navigate('/contact')}>SAY HI</button>
          </div>
        </div>
     );
}
 
export default Intro;