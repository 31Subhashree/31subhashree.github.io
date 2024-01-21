// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Features</li>
        <li>Company</li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <span>Login</span>
          <span>Register</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
