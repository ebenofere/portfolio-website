// Sai Praneeth Tatikonda - 8838478

// Importing the Navbar component from the specified directory
import Navbar from '../components/Navbar'

// Importing the image for the About section
import aboutImg from "../images/Rectangle594.png";

// Importing the stylesheet for the About component
import "../css/about.css"

// Functional component for the About page
const About = () => {
  return (
    <div>
      {/* Rendering the Navbar component */}
      <Navbar />

      {/* Heading for the About section */}
      <h1 className="aboutHeader">Who we are,</h1>

      {/* Container for the content and image in the About section */}
      <div className="aboutFlex">
        {/* First column in the flex container */}
        <div className="aboutFirst">
          {/* Subsection with a heading and a short description */}
          <div className='aboutSub'>
            <h3>AT Hestia .</h3>
            <p>We Create Interiors That Inspire .</p>
          </div>

          {/* Main description of the services provided by Hestia Designs' team */}
          <p>Hestia Designs' team of professionals offers extensive experience and a passion for breathing new life into every aspect of what we do. We meticulously ensure that each detail, fixture, and accessory perfectly suit your unique personality and style.</p>

          {/* Button to learn more about Hestia Designs */}
          <div>
            <div className="btnAbout">Learn More</div>
          </div>
        </div>

        {/* Second column in the flex container, displaying the image */}
        <div>
          <img src={aboutImg} alt="about" />
        </div>
      </div>
    </div>
  )
}

// Exporting the About component as the default export
export default About
