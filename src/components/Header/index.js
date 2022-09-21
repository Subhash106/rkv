import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <header className="main-header">
          <div className="logo-box">
            <img src="../../../img/logo.jpg" alt="Logo" className="logo" />
          </div>

          <div className="top-nav">
            <ul>
              <li>
                <a className="top-nav-link active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="top-nav-link" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
