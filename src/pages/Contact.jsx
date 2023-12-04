import Navbar from '../components/Navbar'
import "../css/contact.css"

const Contact = () => {
  return (
    
    <div>
      <Navbar />
      
      <div className="contact">
        <div className="contactHeader">
          <h1>Get Results. Contact Us Today:</h1>
          <p>Elevate your interiors effortlessly, as Hestia makes decorating your home as easy as it is delightful. Your unique style, our expert curation – let's redefine your living spaces together!.</p>
        </div>

        <div className="formFlex">
          <div className="formBox">
            <form>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                />
              </label>
              <br />
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                />
              </label>
              <br />
              <label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                />
              </label>
              <br />
              <label>
                <textarea
                  name="message"
                  placeholder="Send us a message here..."
                  rows="7"
                  cols="50"
                />
              </label>
              <br />
              <div type="submit" className="btnContact">SUBMIT</div>
            </form>
          </div>

          <div className='contactInquiry'>
            <div>
              <h3>General Inquiries</h3>
              <p>Have a question… or just want to say hello? Get in touch:</p>
              <span>INFO@MEDIABOOM.COM <br/>800.710.3975</span>
            </div>
            <div>
              <h3>Our Location</h3>
              <p>73 Church St <br />Guilford, CT 06437</p>
              <span>GET DIRECTIONS</span>
            </div>
            <div>
              <h3>Hestia Newsletter</h3>
              <p>Exclusive digital marketing & advertising insights</p>
              <span>SIGN UP HERE</span>
            </div>
          </div>
        </div>
      </div>

      <div className='newsletter'>
        <div className='newsletterSubscribe'> 
          <h3>Subscribe to Hestia's Newsletter</h3>
          <p>Step into a world of style and sophistication with Hestia, where your dream home awaits its perfect makeover! Discover a curated collection of exquisite furniture, breathtaking accessories, and trendsetting designs that transform your space into a masterpiece</p>

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
  )
}

export default Contact