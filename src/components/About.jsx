import  profileimg from "../images/IMG_20230513_123450~4.jpg"
import "./About.css"
import pointright from "../images/pointright.png"
export const About=()=>{

return(
    <div id="about" className="about section">
    <div>
    <h2 id="heading">A Little Bit About Me</h2>
    <img src={profileimg} alt="" className="home-img"/>
    </div>
    <div>
    <p id="user-detail-name">Hey, I'm Sanketh Ganiga,</p>
    <p id="user-detail-intro">an aspiring Front-End Web Developer with  React, HTML, CSS, and JavaScript. Skilled in creating visually appealing and user-friendly websites. Collaborative team player with problem-solving skills and attention to detail. Committed to staying updated with industry trends and delivering innovative solutions. </p>
    <div>
    <span>To know more about me <span><img src={pointright} alt="" /></span></span>
    <a href="https://drive.google.com/uc?id=1WB6LWvTqpwnKuwJrGRYomqThnU-nnOiG" id="resume-link-2" target="_blank" rel="noreferrer" download>
                            <button className="resume-button" id="resume-button-2">Resume</button>
                        </a>
    </div>
    
    </div>
    
    </div>
)
}