import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className='main-nav flex'>
       <div className="logo">Mind Matter</div>
        
        <ul className='nav-links flex'>
          <li>
            <a href='#' className='nav-title'>
              Mental Health A-Z
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Self-Improvement
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Pyscology
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Podcast
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              About us
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>    
          </li>
        </ul>
        <div className="Button">
                <button className="button">Login</button>
                <button className="button">Sign up</button>
              </div>
      </nav>
    </>
  );
};

export default Navbar;