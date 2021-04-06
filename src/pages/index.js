import React from "react";
import '../styles/global.css';
import './home.css';
import Layout from '../components/Layout/Layout';

export default function Home() {

  return (
    <>
      <Layout>
        <div className="container secondary-type tc">
          <div className="intro-cta">
            <img className="profile-image" src="/UNADJUSTEDNONRAW_thumb_87.jpg"/>
            <div className="tm"><strong>Howdy, I'm Teboho</strong></div>
            <div className="txl"><strong>Builder of Software and Great Digital Experiences.</strong></div>
            <p>I am a <strong>Fullstack Software Developer</strong> fascinated by the modern web and thrilled by building software from ideas to end product.</p>

            <button className="button-primary">SAY HI</button>
          </div>
        </div>
      </Layout>
    </>
  );
}
