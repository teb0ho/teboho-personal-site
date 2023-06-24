import React from "react"
import Layout from "../components/Layout/Layout"
import "./contact.css"
import SiteMetaData from "../components/SiteMetaData/SiteMetaData"

const Contact = () => {
  return (
    <Layout>
      <SiteMetaData />
      <div className="contact container">
        <h1>Contact Me</h1>
        <form
          action="https://getform.io/f/c3f31c82-f2ea-4d31-acc4-15b082b9a968"
          method="POST"
        >
          <div
            class="g-recaptcha"
            data-sitekey="6LeEcsgmAAAAAKks-SxUBmMDyEuYHqBS3XPT0bV8"
          />
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="name"></input>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
          ></input>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="message"
          ></textarea>
          <button className="button-primary contact-button">SUBMIT</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
