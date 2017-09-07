import React from 'react';

const Contact = (props) => {

const MY_API = 'AIzaSyCE7qI1e7EGzjgzSwlQdZg4z-zMCAUNQRo';
const _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=35.7796,-78.6382`

  return (
    <div>
      <div className="pageTitle">
        <h1>Explore with us!</h1>
      </div>

      <div id="contactContainer">
        <div id="mapContainer">
          <h3>Stop by our basecamp:</h3>
          <iframe frameBorder="0" style={{ width: "400", height: "400"}} src={_url}>
          </iframe>
        </div>

        <div id="formContainer">
          <h3>Contact</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your name:</label><br/>
              <input className="form-control" id="name" name="name" type="text" value="" /><br/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email:</label><br/>
              <input className="form-control" id="email" name="email" type="text" value="" /><br/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message:</label><br/>
              <textarea className="form-control" id="message" name="message" rows="4" ></textarea><br/>
            </div>
            <button id="submitButton" type="submit">Submit</button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact;
