import React from 'react';
import Layout from '../components/Layout/Layout';
import './contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefaultBehavior();
    }

    return (
        <Layout>
            <div className="contact">
                <h1>Say Hi!</h1>
                <form onSubmit={handleSubmit}> 
                    <label for="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="name"></input>
                    
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="email"></input>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="message">

                    </textarea>
                </form>
            </div>
        </Layout>
      );
}

export default Contact;