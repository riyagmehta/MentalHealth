import React from 'react';
import Logo from "./journal1.jpg";
import { useState } from 'react';
import "./journal.css";
const journaling = () => {

  return (
   
  <div>
    <div className='logo'>
      <img src={Logo} alt='journal'/>
    </div>
    <div className='Button'>
        <button className='button'>Start Writing</button>
    </div>
   
     <div className="par">
        <p>You haven't added anything to your journal yet.</p>
    </div>
    <div className='par2'>
       <p>Your journal is place to express every detail of your life-from events,ideas,feelings,to your daily thoughts and memories</p> 
    </div>
   
   
       <div className='container'>
        
       </div>
     

    </div>
  )
}

export default journaling
