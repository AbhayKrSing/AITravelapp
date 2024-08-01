import Logo from './logo-1.png'
import { NavLink, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header() {
  const navigate=useNavigate();
  const handleClick=()=>{
     navigate('/login');
  }
  return (
    <div className="header">
       <div className="logo">
        <div className='nav-logo'><img src={Logo} alt="Travel Genie Logo"/></div>
        <div className="logo-text">TravelGenie</div>
      </div>
        <div className='navbar-links'>
        <ul className='navbar-list'>
                <li className="navbar-content">
                    <NavLink  to="/"> Home </NavLink>
                </li>
                <li className="navbar-content">
                <HashLink smooth to="/#third">About Us</HashLink>
                </li>
                <li className="navbar-content">
                    <NavLink  to="/planTrip">Plan Trip</NavLink>
                </li>
                <li className="navbar-content">
                    <NavLink  to="/contact" > Contact Us</NavLink>
                </li>
                </ul>
        </div>
        
      
      <button className="sign-in" onClick={handleClick}>Sign In</button>
    </div>
  )
}

export default Header;