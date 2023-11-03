import "./Navbar.css"
import { useState,useEffect} from "react"
import hamburgicon from "../images/hamburg-icon.png"


export const Navbar=()=>{
    const[show,setShow]=useState(false)
    const [theme,setTheme]=useState("light-theme")

  const toggleTheme=()=>{
    if(theme ==="dark-theme"){
    setTheme("light-theme")
    }else{
      setTheme("dark-theme")
    }
    
  }
  useEffect(()=>{
   document.body.className=theme
  },[theme])
  
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
            <li><div><input type="checkbox" id="darkmode-toggle" class="checkbox" onChange={toggleTheme}/>
            <label for="darkmode-toggle">
            <svg  className="sun-toggle"width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          
<svg class="moon-toggle" width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></label> 
            </div></li>
          

         </ul>
         <div id="ham" onClick={()=>setShow(!show)}>
            <img src={hamburgicon} alt="" />
         </div>
         {
            show && <div id="ham-div">
                <ul className="menu2">
            <li>
                <h1 onClick={()=>setShow(!show)}>X</h1>
            </li>
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
            <a href="https://drive.google.com/uc?id=1WB6LWvTqpwnKuwJrGRYomqThnU-nnOiG" title="Sanketh Ganiga Resume"  target="_blank" rel="noreferrer" className="nav-link resume" id="resume-link-1" download="Sanketh-Ganiga-Resume.pdf">
                        <button id="resume-button-1">Resume</button>
                    </a>
                
            </li>

         </ul>
            </div>
         }
        </div>
    )
}