import React, { useEffect, useState } from "react";
import "./NavBar.css";
import myLogo from "../assets/petSitterNew_processed.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <a>
              <img src={myLogo} alt="logo for site" />
            </a>
          </div>
          <h2 style={{ justifyContent: "left" }}>The Pet Sitter</h2>
          {/* {showMenu && (
            <ul className={`nav-menu ${showMenu && "active"}`}> */}
          <div className={`nav-menu ${showMenu || "active"}`}>
            {showMenu || (
              <ul class>
                <li className="nav-item nav-li">
                  <a className="nav-link nav-a" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item nav-li">
                  <a
                    className="nav-link nav-a"
                    href="/components/pages/AboutMe"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item nav-li">
                  <a className="nav-link nav-a" href="/services">
                    Q&A
                  </a>
                </li>
                <li className="nav-item nav-li">
                  <a className="nav-link nav-a" href="/Contact">
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
