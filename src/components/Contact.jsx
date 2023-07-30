import React from 'react'
import "./Contact.css"
import {Copyright, Github, Linkedin, Mail, Phone} from "lucide-react"
import heart from "../images/heart1.png"
export const Contact = () => {
  return (
    <>
    <div id="contact">
      <h1>Get In Touch</h1>
      <p>I can't wait to hear from you and learn about the exciting projects we can bring to life together. Whether you have a specific inquiry, a creative idea to explore, or just want to say hello, don't hesitate to reach out.</p>
      <p>Feel free to use the following contact details:</p>
      <div id="all-contact">
      <div id="contact-github">
      <Github size={32} strokeWidth={2.5}/>
      <a href="https://github.com/SankethGaniga95" target="_blank" rel="noreferrer" >Github</a>
      </div>
      <div id="contact-linkedin">
      <Linkedin size={32} strokeWidth={2.5} />
      <a href="https://www.linkedin.com/in/sanketh-ganiga-35398317a/" target="_blank" rel="noreferrer" >Linked In</a>
      </div>
      <div id="contact-email">
      <Mail size={32} strokeWidth={2.5}/>
      <a href="mailto:sankethganiga888@gmail.com" target='_blank' rel="noreferrer" >Email</a>
      </div>
      <div id="contact-phone">
      <Phone size={32} strokeWidth={2.5}/>
     <p id="phone">+91 9892797599</p>
      </div>
      </div>
      
      </div>



      


     

    <div id="footer">
    <p>That's all folks!</p>
    <p>Thank you for visiting my portfolio, and I'm looking forward to connecting with you soon.</p>
    <p>Best regards,</p>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"5px",marginLeft:"20px",marginTop:"-15px"}}>
    <Copyright size={18} />
    <p>Sanketh Ganiga</p>  
     </div>
    

   </div>
   </>
  )
}
