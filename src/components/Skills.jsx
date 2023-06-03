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
                 <img src={react} alt="" />
                 <p>ReactJS</p>
                </div>
               </div>
               {/* ---------------------------------------- */}
               <div className="level2">
                <div>
                  <img src={nodejs} alt="" />
                  <p>NodeJS</p>
               </div>
                  <div>
                   <img src={mongodb} alt="" />
                    <p>MongoDB</p>
                  </div>
               </div>


    <div className="level3">
     <div>
     <img src={redux} alt="" />
         <p>Redux</p>
     </div>
    <div>
    <img src={express} alt="" />
        <p>Express</p>
    </div>
    <div>
    <img src={chakraui} alt="" />
        <p>Chakra UI</p>
    </div>
    </div>


    <div className="level4">
    <div>
        <img src={html} alt="" />
        <p>HTML</p>
    </div>
    <div>
    <img src={css} alt="" />
        <p>CSS</p>
    </div>
    <div>
    <img src={javascript} alt="" />
        <p>JavaScript</p>
    </div>
    <div>
    <img src={git} alt="" />
        <p>Git</p>
    </div>
    </div>
    </div>
    </div>

 )
}
