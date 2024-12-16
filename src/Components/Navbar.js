import React from 'react';
import { Link } from 'react-router-dom';  
import deepnet from '../assets/deepnet.png'; 
import './Style.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={deepnet} alt="Deepnet Logo" className="logo-img" />
      </div>
      <nav className="nav-links">
        <Link to="/">HOME</Link> 
        <Link to="/menu">MENU</Link> 
        <Link to="/#">MAKE A RESERVATION</Link> 
        <Link to="/#">CONTACT US</Link> 
      </nav>
    </header>
  );
}

export default Navbar;

