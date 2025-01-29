import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiHelpCircle } from "react-icons/fi";
import { MdLocalOffer } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import './SwiggyHeader.css'

export default function SwiggyHeader() {
  const [location, setLocation] = useState("Hoshiyarpur, Block F, Sector 51, Noida");

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-section">
        <div className="logo"></div>
        <span className="title">Other</span>
        <div className="location">
          <span className="location-text">{location}</span>
          <IoMdArrowDropdown className="dropdown-icon" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <div className="corporate">Swiggy Corporate</div>
        <FiSearch className="icon" />
        <div className="offers">
          <MdLocalOffer className="icon offer-icon" />
          <span>Offers</span>
        </div>
        <FiHelpCircle className="icon" />
        <div className="user">
          <FiUser className="icon" />
          <span>Shivam</span>
        </div>
        <div className="cart">
          <FiShoppingCart className="icon" />
          <span className="cart-count">0</span>
        </div>
      </div>
    </nav>
  );
}
