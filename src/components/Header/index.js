import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

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
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    console.log(`Home: ${isActive}`);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/orders"
                  className={({ isActive }) => {
                    console.log(`Orders: ${isActive}`);
                  }}
                >
                  Orders
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
