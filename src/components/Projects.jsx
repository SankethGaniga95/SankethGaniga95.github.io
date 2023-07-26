import React from 'react'
import kiranawaale from "../images/kiranawaale.png"
import mountaineer from "../images/Mountaineer.png"
import achiever from "../images/Achiever_Avenue.png"
import "./Projects.css"
import skilhub from "../images/skillhub.png"

export const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className='project-card'>
        <img src={achiever} alt="" />
        <div className='project-details'>
        <h2 className='project-title'>Achiever's Avenue</h2>
        <p className='project-description'>Achiever's Avenue is a learning platform for the aspirants of IIT and Medical Colleges. It offers online and offline coaching.</p>
        <div className='project-tech-stack'>
        <h1>Tech Stack:-</h1>
        <p>React</p>
        <p>Chakra UI</p>
        <p>JSON server</p>
        </div>
        <a href="https://github.com/SankethGaniga95/imaginary-blood-7556" target='_blank' rel="noreferrer" className='project-github-link'>
        <button >GitHub</button>
        </a>
        <a href="https://imaginary-blood-7556.netlify.app/" target="_blank" rel="noreferrer" className='project-deployed-link'>
        <button >Live Site</button>
        </a>
        </div>
      </div>
      <div className='project-card'>
        <img src={mountaineer} alt="" />
        <div className='project-details'>
        <h2 className='project-title'>Mountaineer</h2>
        <p className='project-description'>Mountaineer is a clone of an e commerce website Eastern Mountain Sports which sells products related to adventure sports</p>
        <div className='project-tech-stack'>
        <h1>Tech Stack:-</h1>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        </div>
        <a href="https://github.com/SankethGaniga95/timely-river-8283" className='project-github-link' target='_blank' rel="noreferrer">
        <button >GitHub</button>
        </a>
        <a href="https://timely-river-8283.netlify.app/" target="_blank" rel="noreferrer" className='project-deployed-link'>
        <button >Live Site</button>
        </a>
        </div>
      </div>
      <div className='project-card'>
        <img src={kiranawaale} alt="" />
        <div className='project-details'>
        <h2 className='project-title'>Kiranawaale</h2>
        <p className='project-description'>About
Kiranawaale is an e commerce website which sells products related to kitchen ware</p>
        <div className='project-tech-stack'>
        <h1>Tech Stack:-</h1>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        </div>
        <a href="https://github.com/SankethGaniga95/flawless-vegetable-3066" target='_blank' rel="noreferrer" className='project-github-link'>
        <button >GitHub</button>
        </a>
        <a href="https://poetic-bombolone-938874.netlify.app/" target="_blank" rel="noreferrer" className='project-deployed-link'>
        <button >Live Site</button>
        </a>
        </div>
      </div>
      <div className='project-card'>
        <img src={skilhub} alt="" />
        <div className='project-details'>
        <h2 className='project-title'>Skill Hub</h2>
        <p className='project-description'>Skill Hub is a online learning platform for developing skills in the field of technology through video lectures</p>
        <div className='project-tech-stack'>
        <h1>Tech Stack:-</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",lineHeight:"5px"}}>
        <p>ReactJs</p>
        <p>Chakra UI</p>
        <p>Redux</p>
        <p>MongoDB</p>
        <p>Express</p>
        <p>NodeJs</p>
        </div>
        </div>
        <a href="https://github.com/Ak-nut-47/greasy-sofa-2441" target='_blank' rel="noreferrer" className='project-github-link'>
        <button >GitHub</button>
        </a>
        <a href="https://nemskillhub.netlify.app/" target="_blank" rel="noreferrer" className='project-deployed-link'>
        <button >Live Site</button>
        </a>
        </div>
      </div>
    </div>
  )
}
