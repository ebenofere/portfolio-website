import React from 'react'
import Navbar from '../components/Navbar'
import '../css/home.css';

const Home = () => {
  return (
    <div className="hero">
        <Navbar />
        <div className="heroHeading">
          <p className="heroDesign">Designing spaces <br /> You'll love to be in.</p>
        </div>
    </div>
  )
}

export default Home