import  profileimg from "../images/IMG_20230513_123450~4.jpg"
import "./About.css"

export const About=()=>{

return(
    <div id="about">
    <div>
    <img src={profileimg} alt="" className="home-img"/>
    </div>
    <div>
    <h2>About Me -</h2>
    <h1 id="user-detail-name">Sanketh Ganiga</h1>
    <p id="user-detail-intro">An aspiring Front-End Web Developer with  React, HTML, CSS, and JavaScript. Skilled in creating visually appealing and user-friendly websites. Collaborative team player with problem-solving skills and attention to detail. Committed to staying updated with industry trends and delivering innovative solutions. </p>
    </div>
    </div>
)
}