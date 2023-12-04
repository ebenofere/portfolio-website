// Kabir Gupta - 8812834

// Importing necessary dependencies and components
import { Link } from "react-router-dom";  // Importing the Link component from react-router-dom for navigation
import logo from '../images/default-monochrome-white.png';  // Importing the logo image
import '../css/navbar.css';  // Importing the styles for the navbar
import Button from '../components/Button';  // Importing the Button component

// Functional component definition for Navbar
const Navbar = () => {
  return (
    // Main container for the Navbar with the 'nav' class
    <div className="nav">
      {/* Link to the home page with the site logo */}
      <Link to="/">
        <img src={logo} alt='logo' style={{maxWidth:"100%"}} />
      </Link>
      {/* Container for navigation links and a button */}
      <div className="navbarLinks">
        {/* Navigation link for the Home page */}
        <a href="/">Home</a>
        {/* Navigation link for the About page */}
        <a href="/about">About</a>
        {/* Navigation link for the Contact page */}
        <a href="/contact">Contact</a>
        {/* Button component for booking a consultation */}
        <Button title="Book a Consultation" />
      </div>
    </div>
  );
}

// Exporting the Navbar component as the default export
export default Navbar;
