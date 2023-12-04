import Navbar from '../components/Navbar'
import aboutImg from "../images/Rectangle594.png";
import "../css/about.css"

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className="aboutHeader">Who we are,</h1>
      <div className="aboutFlex">
        <div className="aboutFirst">
          <div className='aboutSub'>
            <h3>AT Hestia .</h3>
            <p>We Create Interiors That Inspire .</p>
          </div>
          <p>Hestia Designs' team of professionals offers extensive experience and a passion for breathing new life into every aspect of what we do. We meticulously ensure that each detail, fixture, and accessory perfectly suit your unique personality and style.</p>

          <div>
            <div className="btnAbout">Learn More</div>
          </div>
        </div>
        <div>
          <img src={aboutImg} alt="about" />
        </div>
      </div>
    </div>
  )
}

export default About