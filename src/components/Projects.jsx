import React from 'react'

import mountaineer from "../images/Mountaineer.png"
import achiever from "../images/Achiever Avenue.png"
import "./Projects.css"
import skilhub from "../images/skillhub.png"
import jeera from "../images/jeera-screen.png"



export const Projects = () => {
  return (
    <div id="projects">
      <h1 id="title">Projects</h1>
      <div className='project-card'>
      <div style={{display:"flex"}}>
        <img src={achiever} alt="" />
        </div>
        <div className='project-details'>
        <div className='heading'>
        <div>
        <h2 className='project-title'>Achiever's Avenue</h2>
        </div>
        <div>
        <a href="https://github.com/SankethGaniga95/imaginary-blood-7556" target='_blank' rel="noreferrer" className='project-github-link'>
        <button >GitHub</button>
        </a>
        <a href="https://achieversavenue.netlify.app/" target="_blank" rel="noreferrer" className='project-deployed-link'>
        <button >Live Site</button>
        </a>
        </div>
        </div>
        <p className='project-description'>Achiever's Avenue is a learning platform for the aspirants of IIT and Medical Colleges. It offers online and offline coaching.</p>
        <div className='project-tech-stack'>
        <h3>Tech Stack:-</h3>
        <div>
        <p>React</p>
        <p>Chakra UI</p>
        <p>JSON server</p>
        </div>
        </div>
        </div>
      </div>
      <div className='project-card'>
        <div style={{display:"flex"}}>
        <img src={skilhub} alt="" />
        </div>
        <div className='project-details'>
        <div className='heading'>
        <div>
        <h2 className='project-title'>Skill Hub</h2>
        </div>
        <div>
        <a href="https://github.com/SankethGaniga95/skillHub" target='_blank' rel="noreferrer" className='project-github-link'>
        <button >GitHub</button>
        </a>
        <a href="https://nemskillhub.netlify.app/" target="_blank" rel="noreferrer" className='project-deployed-link'>
        <button >Live Site</button>
        </a>
        </div>
        </div>
        <p className='project-description'>Skill Hub is a online learning platform for developing skills in the field of technology through video lectures</p>
        <div className='project-tech-stack'>
        <h3>Tech Stack:-</h3>
        <div>
        <p>ReactJs</p>
        <p>Chakra UI</p>
        <p>Redux</p>
        <p>MongoDB</p>
        <p>Express</p>
        <p>NodeJs</p>
        </div>
        </div>
        </div>
      </div>
      <div className='project-card'>
      <div style={{display:"flex"}}>
        <img src={mountaineer} alt="" />
        </div>
        <div className='project-details'>
        <div className='heading'>
        <div>
        <h2 className='project-title'>Mountaineer</h2>
        </div>
        <div>
        <a href="https://github.com/SankethGaniga95/Mountaineer" className='project-github-link' target='_blank' rel="noreferrer">
        <button >GitHub</button>
        </a>
        <a href="https://mountaineeer.netlify.app/" target="_blank" rel="noreferrer" className='project-deployed-link'>
        <button >Live Site</button>
        </a>
        </div>
        </div>
        <p className='project-description'>Mountaineer is a clone of an e commerce website Eastern Mountain Sports which sells products related to adventure sports</p>
        <div className='project-tech-stack'>
        <h3>Tech Stack:-</h3>
        <div>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        </div>
        </div>
        </div>
      </div>
      <div className='project-card'>
      <div style={{display:"flex"}}>
        <img src={jeera} alt="" />
      </div>
        <div className='project-details'>
        <div className='heading'>
        <div>
        <h2 className='project-title'>Jeera</h2>
        </div>
        <div>
        <a href="https://github.com/SankethGaniga95/Jeera" target='_blank' rel="noreferrer" className='project-github-link'>
        <button >GitHub</button>
        </a>
        <a href="https://jeera-project-management.netlify.app/" target="_blank" rel="noreferrer" className='project-deployed-link'>
        <button >Live Site</button>
        </a>
        </div>
        </div>
        <p className='project-description'>Jeera is a comprehensive project management application that enables teams to efficiently collaborate on projects, track tasks, and manage resources.</p>
        <div className='project-tech-stack'>
        <h3>Tech Stack:-</h3>
        <div>
        <p>Angular</p>
        <p>Node</p>
        <p>Express</p>
        <p>MongoDB</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
