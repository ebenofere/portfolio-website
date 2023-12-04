import logo from '../images/default-monochrome-white.png'
import '../css/navbar.css'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt='logo' style={{maxWidth:"100%"}} />
      <div className="navbarLinks">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <Button title="Book a Consultation" />
      </div>
    </div>
  )
}

export default Navbar