import "./Skills.css"
import html from "../images/html-removebg-preview (2).png"
import css from "../images/css-removebg-preview.png"
import javascript from "../images/javascript.png"
import react from "../images/react-removebg-preview.png"
import express from "../images/expressjs1.png"
import mongodb from "../images/mongodb-removebg-preview.png"
import nodejs from "../images/nodejs-removebg-preview.png"
import git from "../images/git-removebg-preview.png"
import redux from "../images/redux-removebg-preview.png"
import chakraui from "../images/chakraui-removebg-preview-removebg-preview.png"
import mongoose from "../images/mongoose-removebg-preview.png"
import render from "../images/render-removebg-preview.png"
import cyclic from "../images/cyclic.png"
import netlify from "../images/netlify-removebg-preview.png"
import postman from "../images/postman1-removebg-preview.png"
import vercel from "../images/vercel-removebg-preview.png"


export const Skills=()=>{
 return(

     <div id="skills">
            <h2 id="Skilltitle">Skills</h2>
            <p id="subtitle">These are the technologies I've worked with :</p>
          <div id="skills-container">
            {/* ------------------------------ */}
            
            <div className="sectiontype">
          <table id="table">
            <thead>
            </thead>
            <tbody>
                <tr className="row">
                    <td><h2 className="sectionheading">FrontEnd</h2></td>
                    
                    <td><div className="skills-card">
                 <img src={react} alt="" className="skills-card-img" />
                 <p className="skills-card-name">ReactJS</p>
                </div></td>
                <td>
                <div className="skills-card">
                    <img src={javascript} alt="" className="skills-card-img" />
                        <p className="skills-card-name">JavaScript</p>
                    </div>
                </td>
                <td>
                <div className="skills-card">
                            <img src={chakraui} alt="" className="skills-card-img" />
                                <p className="skills-card-name">Chakra UI</p>
                            </div>
                </td>
                <td>
                <div className="skills-card">
                                <img src={html} alt="" className="skills-card-img" />
                                <p className="skills-card-name">HTML</p>
                            </div>
                </td>
                <td>
                <div className="skills-card">
                            <img src={css} alt="" className="skills-card-img" />
                                <p className="skills-card-name">CSS</p>
                            </div>
                </td>
                <td>
                <div className="skills-card">
                                <img src={redux} alt="" className="skills-card-img" />
                                    <p className="skills-card-name">Redux</p>
                                </div>
                </td>
                </tr>
           
                <tr className="row">
                 <td><h2 className="sectionheading">BackEnd</h2></td>
                 <td> <div className="skills-card">
                  <img src={nodejs} alt="" className="skills-card-img" />
                  <p className="skills-card-name">NodeJS</p>
               </div></td>
                 <td>
                            <div className="skills-card">
                    <img src={express} alt="" className="skills-card-img" />
                        <p className="skills-card-name">Express</p>
                    </div></td>
                </tr>

                <tr className="row">
                 <td><h2 className="sectionheading">DataBase</h2></td>
                 <td><div className="skills-card">
                   <img src={mongodb} alt="" className="skills-card-img" />
                    <p className="skills-card-name">MongoDB</p>
                  </div></td>
                 <td><div className="skills-card">
                   <img src={mongoose} alt="" className="skills-card-img" />
                    <p className="skills-card-name">Mongoose</p>
                  </div></td>
                </tr>
                <tr className="row">
                    <td><h2 className="sectionheading">Tools</h2></td>
                    <td><div className="skills-card">
    <img src={git} alt="" className="skills-card-img" />
        <p className="skills-card-name">Git</p>
    </div>
    </td>
                   
    <td>
    <div className="skills-card">
    <img src={postman} alt="" className="skills-card-img" />
        <p className="skills-card-name">Postman</p>
    </div>
    </td>
    <td>
    <div className="skills-card">
    <img src={netlify} alt="" className="skills-card-img" />
        <p className="skills-card-name">Netlify</p>
    </div>
    </td>
    <td>
    <div className="skills-card">
    <img src={vercel} alt="" className="skills-card-img" />
        <p className="skills-card-name">Vercel</p>
    </div>
    </td>
    <td>
    <div className="skills-card">
    <img src={cyclic} alt="" className="skills-card-img" />
        <p className="skills-card-name">Cyclic</p>
    </div>
    </td>
    <td>
    <div className="skills-card">
    <img src={render} alt="" className="skills-card-img" />
        <p className="skills-card-name">Render</p>
    </div>
    </td> 
    </tr>
    </tbody>
    </table>                  
            </div>
           
          
    </div>

    
                </div>    

 )
}
