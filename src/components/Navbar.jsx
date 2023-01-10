import React, { useState } from "react";
import "./navbar.css";



import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
       
        <div className="logo">
          <h2>
            <span>M</span>ind
            <span>M</span>atter
          </h2>
        </div>

       
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Podcasts</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

       
        
        <div className="loginb" >
          <button className="button">Sign up</button>
          <button className="button" >Login</button>
</div>
          
          
      </nav>

      
    </>
  );
};

export default Navbar;