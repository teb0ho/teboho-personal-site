import React from 'react';
import Layout from '../components/Layout/Layout';
import './contact.css';

const Contact = () => {
    
    return (
        <Layout>
            <SiteMetaData/>
            <div className="contact container">
                <h1>Contact Me</h1>
                <form action="https://getform.io/f/c3f31c82-f2ea-4d31-acc4-15b082b9a968" method="POST"> 
                    <label for="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="name"></input>
                    
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="email"></input>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="6" placeholder="message">

                    </textarea>
                    <button className="button-primary contact-button">SUBMIT</button>
                </form>
            </div>
        </Layout>
      );
}

export default Contact;