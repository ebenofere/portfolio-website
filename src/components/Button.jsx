// Ebenezer Ofere - 8853665

// Import the React library to create functional components
import React from 'react';

// Import the CSS file for styling
import '../css/button.css';

// Define a functional component named Button that takes a prop 'title'
const Button = ({title}) => {
  // Return JSX representing the component structure
  return (
    <div>
      {/* Use a div with className 'btnCustom' to style the button */}
      <div className="btnCustom">{title}</div>
    </div>
  );
}

// Export the Button component as the default export for this file
export default Button;
