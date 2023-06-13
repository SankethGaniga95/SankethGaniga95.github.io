import "./Navbar.css"



export const Navbar=()=>{

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
                <button id="resume-button-1">

                <a href="https://drive.google.com/file/d/1WB6LWvTqpwnKuwJrGRYomqThnU-nnOiG/view?usp=drive_link&export==download" target="_blank" rel="noreferrer" className="nav-link resume" id="resume-link-1" download>
                {/* <button id="resume-button-1">Resume</button> */}Resume
                </a>
                </button>
                
            </li>

         </ul>
        </div>
    )
}