import "./Navbar.css"
import { useState } from "react"
import hamburgicon from "../images/hamburg-icon.png"


export const Navbar=()=>{
    const [show,setShow]=useState(false)
  
    return(
        <div id="nav-menu" className="nav">
            <h3>Sanketh Ganiga</h3>
         <ul className="menu">
            <li>
                <a href="#home"  className="nav-link home">Home</a>
            </li>
            <li>
                <a href="#about" className="nav-link about">About</a> 
            </li>
            <li>
                <a href="#skills" className="nav-link skills">Skills</a>
            </li>
            <li>
                <a href="#projects" className="nav-link projects">Projects</a>
            </li>
            <li>
                <a href="#contact" className="nav-link contact">Contact</a>
            </li>
            <li>
            <a href="https://drive.google.com/uc?id=1WB6LWvTqpwnKuwJrGRYomqThnU-nnOiG&export=download" target="_blank" rel="noreferrer" className="nav-link resume" id="resume-link-1" download>
                        <button id="resume-button-1">Resume</button>
                    </a>
                
            </li>

         </ul>
         <div id="ham" onClick={()=>setShow(!show)}>
            <img src={hamburgicon} alt="" />
         </div>
         {
            show && <div id="ham-div">
                <ul className="menu2">
            <li>
                <a href="#home"  className="nav-link home">Home</a>
            </li>
            <li>
                <a href="#about" className="nav-link about">About</a> 
            </li>
            <li>
                <a href="#skills" className="nav-link skills">Skills</a>
            </li>
            <li>
                <a href="#projects" className="nav-link projects">Projects</a>
            </li>
            <li>
                <a href="#contact" className="nav-link contact">Contact</a>
            </li>
            <li>
            <a href="https://drive.google.com/uc?id=1WB6LWvTqpwnKuwJrGRYomqThnU-nnOiG&export=download" target="_blank" rel="noreferrer" className="nav-link resume" id="resume-link-1" download>
                        <button id="resume-button-1">Resume</button>
                    </a>
                
            </li>

         </ul>
            </div>
         }
        </div>
    )
}