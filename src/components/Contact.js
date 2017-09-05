import React from 'react';

const Contact = (props) => {
  return (
    <div className="container-fluid">
      <div className="pageTitle">
        <h1>Explore with us!</h1>
      </div>
        <div className="col-md-6">
          <h2>Get Outside:</h2>
          <p>Lorem Ipsum</p>
          <div>

          </div>
        </div>
        <div className="col-md-6">
          <h2>Contact</h2>
          <form id="contact_form">
            <div className="row">
              <label htmlFor="name">Your name:</label><br/>
              <input id="name" name="name" type="text" value="" size="30"/><br/>
            </div>
            <div className="row">
              <label htmlFor="email">Your email:</label><br/>
              <input id="email" name="email" type="text" value="" size="30"/><br/>
            </div>
            <div className="row">
              <label htmlFor="message">Your message:</label><br/>
              <textarea id="message" name="message" rows="7" cols="30"></textarea><br/>
            </div>
            <input id="submit_button" type="submit" value="Send email"/>
          </form>
        </div>
    </div>
  )
}

export default Contact;
