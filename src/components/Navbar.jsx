import React from 'react'
import './navbar.css';
import logo from './Logo.jpg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
   <div> <nav className='Navbarcontainer'>
   <div className='wrapper'>
    
 <div className='Logo'>Mind Matter</div>
 <ul className='links'>
        <li  className='link'>Home</li>
        
        <li className='link'>Consultancy</li>
        <li className='link' >Articles</li>
        
        <li className='link'>Podcasts</li>
        <li className='link'>Blog</li>
    </ul>

<span ><button className='Button'>Sign Up</button></span>
  
   

  </div>

    </nav>
    </div>
  )
}

export default Navbar
