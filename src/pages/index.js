import React from "react";
import '../styles/global.css';
import './home.css';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout/Layout';
import Skills from "../components/Skills/Skills";
import Experience from '../components/Experience/Experience';
import SiteMetaData from "../components/SiteMetaData/SiteMetaData";

export default function Home() {

  return (
    <>
      <Layout>
        <SiteMetaData/>
        <Intro/>
        <Skills/>
        <Experience/>
      </Layout>
    </>
  );
}
