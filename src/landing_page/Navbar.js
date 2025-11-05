import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ✅ Import your CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for hamburger button
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked (useful for mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img src="media/logo.svg" alt="Logo" />
        </Link>

        {/* Hamburger button */}
        <button
          className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible section */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup" onClick={closeMenu}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product" onClick={closeMenu}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing" onClick={closeMenu}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support" onClick={closeMenu}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
