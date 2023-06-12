import "./Skills.css"
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import express from "../images/expressjs.png"
import mongodb from "../images/mongodb.png"
import nodejs from "../images/nodejs.png"
import git from "../images/git.png"
import redux from "../images/redux.png"
import chakraui from "../images/chakraui.png"


export const Skills=()=>{
 return(

     <div id="skills">

        <h2>Skills</h2>

          <div id="skills-container">
            {/* ------------------------------ */}
               <div className="level1">
                <div>
                 <img src={react} alt="" className="skills-card-img" />
                 <p className="skills-card-name">ReactJS</p>
                </div>
               </div>
               {/* ---------------------------------------- */}
               <div className="level2">
                <div>
                  <img src={nodejs} alt="" className="skills-card-img" />
                  <p className="skills-card-name">NodeJS</p>
               </div>
                  <div>
                   <img src={mongodb} alt="" className="skills-card-img" />
                    <p className="skills-card-name">MongoDB</p>
                  </div>
               </div>


    <div className="level3">
     <div>
     <img src={redux} alt="" className="skills-card-img" />
         <p className="skills-card-name">Redux</p>
     </div>
    <div>
    <img src={express} alt="" className="skills-card-img" />
        <p className="skills-card-name">Express</p>
    </div>
    <div>
    <img src={chakraui} alt="" className="skills-card-img" />
        <p className="skills-card-name">Chakra UI</p>
    </div>
    </div>


    <div className="level4">
    <div>
        <img src={html} alt="" className="skills-card-img" />
        <p className="skills-card-name">HTML</p>
    </div>
    <div>
    <img src={css} alt="" className="skills-card-img" />
        <p className="skills-card-name">CSS</p>
    </div>
    <div>
    <img src={javascript} alt="" className="skills-card-img" />
        <p className="skills-card-name">JavaScript</p>
    </div>
    <div>
    <img src={git} alt="" className="skills-card-img" />
        <p className="skills-card-name">Git</p>
    </div>
    </div>
    </div>
    </div>

 )
}
