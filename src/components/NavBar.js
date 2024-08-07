import React from "react";
import "./NavBar.css";
import myLogo from "../assets/logoDog.jpg";

export default function Navbar() {
  return (
    <div>
      <header className="header">
        <img src={myLogo} alt="logo for site" />
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/components/pages/AboutMe">About</a>
          <a href="/services">Services</a>
          <a href="/Contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}
