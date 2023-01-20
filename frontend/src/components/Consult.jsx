import React from 'react'
import doctor from "./doctor.jpg";
import { FaRegWindowClose } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import "./consult.css";
const consult = () => {
  return (
   <article className="doctors">
    <div className="img-container">
        <img src={doctor} alt=""/>
        <span className='close-btn'>
           <FaRegWindowClose/>
        </span>
     </div>
     <div className="doctor-info">
        <h3>Expertise: Anxiety ,Depression,Stress</h3>
        <h4>Speals:English,Hindi</h4>
        <h5>Info<span><FaCaretDown/></span></h5>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elitsuscipit
             unde iusto.</h5>
       
     </div>
     <div className="Buttons">
        <button className="book">Book Appointment</button>
     </div>
   </article>
  )
}

export default consult
