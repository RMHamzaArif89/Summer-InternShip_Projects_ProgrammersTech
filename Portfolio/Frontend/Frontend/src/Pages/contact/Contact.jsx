import React from 'react'
import './contact.css'
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className='contact'>
     <div className="contactCon">
      <motion.div  whileTap={{ scale: 0.85 }} className="contactInfo">
        <img src="/images/contacts.png" alt="" className="contactInfoImg" />
        Contact Information
      </motion.div>
      
     <form action="" className="contactForm">
      <div className="contactHeading">Contact Me to get service</div>

        <input type="text" name="name" placeholder='Full Name' id="" className="contactInput" />
        <input type="email" name="email" placeholder='Email' id="" className="contactInput" />
        <input type="number" name="number" placeholder='Cell' id="" className="contactInput" />
        <select className='contactServices contactInput' placeholder="select service" name="Services">
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Devlopment</option>
          <option value="mern">MERN Stack Devlopment</option>
          <option value="MSOffice">MS Office Work</option>
        </select>
        <textarea name="message" className='contactMessage contactInput' placeholder='Message'>
        </textarea>
        <motion.input  whileTap={{ scale: 0.85 }} type="submit" value="Send Message" className='contactBtn' />

      </form>
      <div className="contactImg">
        <div className="img"></div>
      </div>

     </div>

    </div>
  )
}

export default Contact
