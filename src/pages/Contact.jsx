// Ebenezer Ofere - 8853665

// Importing the Navbar component and the associated CSS file
import Navbar from '../components/Navbar';
import "../css/contact.css";

// Functional component for the Contact page
const Contact = () => {
  return (
    // Main container for the Contact page
    <div>
      {/* Rendering the Navbar component for navigation */}
      <Navbar />
      
      {/* Section for contact information and form */}
      <div className="contact">
        {/* Header section with a title and description */}
        <div className="contactHeader">
          <h1>Get Results. Contact Us Today:</h1>
          <p>Elevate your interiors effortlessly, as Hestia makes decorating your home as easy as it is delightful. Your unique style, our expert curation – let's redefine your living spaces together!.</p>
        </div>

        {/* Form section with input fields for name, email, phone, and message */}
        <div className="formFlex">
          <div className="formBox">
            <form>
              {/* Input field for Full Name */}
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                />
              </label>
              <br />
              {/* Input field for Email Address */}
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                />
              </label>
              <br />
              {/* Input field for Phone */}
              <label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                />
              </label>
              <br />
              {/* Textarea for user to input a message */}
              <label>
                <textarea
                  name="message"
                  placeholder="Send us a message here..."
                  rows="7"
                  cols="50"
                />
              </label>
              <br />
              {/* Submit button for the form */}
              <div type="submit" className="btnContact">SUBMIT</div>
            </form>
          </div>

          {/* Section for contact inquiries and information */}
          <div className='contactInquiry'>
            {/* General Inquiries */}
            <div>
              <h3>General Inquiries</h3>
              <p>Have a question… or just want to say hello? Get in touch:</p>
              <span>INFO@MEDIABOOM.COM <br/>800.710.3975</span>
            </div>
            {/* Our Location */}
            <div>
              <h3>Our Location</h3>
              <p>73 Church St <br />Guilford, CT 06437</p>
              <span>GET DIRECTIONS</span>
            </div>
            {/* Hestia Newsletter */}
            <div>
              <h3>Hestia Newsletter</h3>
              <p>Exclusive digital marketing & advertising insights</p>
              <span>SIGN UP HERE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section for newsletter subscription */}
      <div className='newsletter'>
        <div className='newsletterSubscribe'> 
          {/* Header for the newsletter subscription */}
          <h3>Subscribe to Hestia's Newsletter</h3>
          {/* Description for the newsletter subscription */}
          <p>Step into a world of style and sophistication with Hestia, where your dream home awaits its perfect makeover! Discover a curated collection of exquisite furniture, breathtaking accessories, and trendsetting designs that transform your space into a masterpiece</p>

          {/* Form for newsletter subscription with email input and submit button */}
          <form className="formNews">
            <label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <button type="submit" className="btnInsights">RECEIVE INSIGHTS NOW</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Exporting the Contact component as the default export
export default Contact;
