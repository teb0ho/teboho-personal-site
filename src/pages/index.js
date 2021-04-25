import React from "react";
import '../styles/global.css';
import './home.css';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout/Layout';
import Skills from "../components/Skills/Skills";

export default function Home() {

  return (
    <>
      <Layout>

        <Intro/>
        <Skills/>

      </Layout>
    </>
  );
}
