import React from 'react';
import './Header.css';
import { URL_IMG } from '../utils/constants';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
      <div className="logo-container">
  <img 
    src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ=w600-h300-pc0xffffff-pd" 
    alt="Swiggy Logo"
    className="logo"
  />
</div>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Product</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link cart-link">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;