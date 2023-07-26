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
import mongoose from "../images/mongoose.png"
import render from "../images/render.png"
import cyclic from "../images/cyclic.png"
import netlify from "../images/netlify.png"
import postman from "../images/postman1.png"
import vercel from "../images/vercel.png"


export const Skills=()=>{
 return(

     <div id="skills">

        
        <div className="coffee">
            <div className="plate"></div>
            <div className="cup">
                <div className="top">
                    <div className="vapour">
                         <span id={1}></span>
                         <span id={3}></span>
                        <span id={5}></span>
                        <span id={13}></span>
                        <span id={6}></span>
                        <span id={7}></span>
                        <span id={10}></span>
                        <span id={8}></span>   
                        <span id={11}></span>
                        <span id={12}></span>
                        <span id={14}></span>
                        <span id={2}></span>
                        <span id={9}></span>
                        <span id={15}></span>
                        <span id={4}></span>
                    </div>
                  <div className="circle1">
                    <div className="tea">

                    </div>
                    </div>  
                </div>
                  <div className="handle">

                  </div>
            </div>

        </div>

          <div id="skills-container">
            {/* ------------------------------ */}
            <h2 id="title">Skills</h2>
                 <h2 className="sectionheading">FrontEnd</h2>
            <div className="sectiontype">

                <div className="skills-card">
                 <img src={react} alt="" className="skills-card-img" />
                 <p className="skills-card-name">ReactJS</p>
                </div>
                 <div className="skills-card">
                    <img src={javascript} alt="" className="skills-card-img" />
                        <p className="skills-card-name">JavaScript</p>
                    </div>
                    <div className="skills-card">
                            <img src={chakraui} alt="" className="skills-card-img" />
                                <p className="skills-card-name">Chakra UI</p>
                            </div>
                            <div className="skills-card">
                                <img src={html} alt="" className="skills-card-img" />
                                <p className="skills-card-name">HTML</p>
                            </div>
                            <div className="skills-card">
                            <img src={css} alt="" className="skills-card-img" />
                                <p className="skills-card-name">CSS</p>
                            </div>
                            <div className="skills-card">
                                <img src={redux} alt="" className="skills-card-img" />
                                    <p className="skills-card-name">Redux</p>
                                </div>
            </div>
                                            
             <h2 className="sectionheading">BackEnd</h2>
               <div className="sectiontype">

                <div className="skills-card">
                  <img src={nodejs} alt="" className="skills-card-img" />
                  <p className="skills-card-name">NodeJS</p>
               </div>
                            <div className="skills-card">
                    <img src={express} alt="" className="skills-card-img" />
                        <p className="skills-card-name">Express</p>
                    </div>
               </div>
             <h2 className="sectionheading">Database</h2>
             <div className="sectiontype">
               <div className="skills-card">
                   <img src={mongodb} alt="" className="skills-card-img" />
                    <p className="skills-card-name">MongoDB</p>
                  </div>
                  <div className="skills-card">
                   <img src={mongoose} alt="" className="skills-card-img" />
                    <p className="skills-card-name">Mongoose</p>
                  </div>
             </div>

             <h2 className="sectionheading">Tools</h2>
            <div className="sectiontype">
             
   
    <div className="skills-card">
    <img src={git} alt="" className="skills-card-img" />
        <p className="skills-card-name">Git</p>
    </div>
    <div className="skills-card">
    <img src={postman} alt="" className="skills-card-img" />
        <p className="skills-card-name">Postman</p>
    </div>
    <div className="skills-card">
    <img src={netlify} alt="" className="skills-card-img" />
        <p className="skills-card-name">Netlify</p>
    </div>
    <div className="skills-card">
    <img src={vercel} alt="" className="skills-card-img" />
        <p className="skills-card-name">Vercel</p>
    </div>
    <div className="skills-card">
    <img src={cyclic} alt="" className="skills-card-img" />
        <p className="skills-card-name">Cyclic</p>
    </div>
    <div className="skills-card">
    <img src={render} alt="" className="skills-card-img" />
        <p className="skills-card-name">Render</p>
    </div>

    </div>
    
    </div>
                </div>    

 )
}
