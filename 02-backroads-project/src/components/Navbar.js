import React, { useState } from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            onClick={() => setToggleNav(!toggleNav)}
            className="nav-toggle"
            id="nav-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* left this comment on purpose  */}
        <ul
          className={`nav-links ${toggleNav ? "show-links" : ""}`}
          id="nav-links"
        >
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                className="nav-icon"
                rel="noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
