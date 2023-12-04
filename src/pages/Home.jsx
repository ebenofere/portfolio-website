// Aarti Rani - 8813631

// Import the React library to define React components
import React from 'react';

// Import the Navbar component from the specified location
import Navbar from '../components/Navbar';

// Import the CSS file for styling
import '../css/home.css';

// Define a functional component named Home
const Home = () => {
  return (
    // Main container with the "hero" class for styling
    <div className="hero">
      
      {/* Include the Navbar component within the hero container */}
      <Navbar />

      {/* Container for the hero heading */}
      <div className="heroHeading">
        {/* Paragraph with the "heroDesign" class for styling */}
        <p className="heroDesign">
          {/* Displayed text with line break */}
          Designing spaces <br /> You'll love to be in.
        </p>
      </div>
    </div>
  );
}

// Export the Home component as the default export
export default Home;
