import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import "./Github.css"



export const Github = () => {
  return (
    <div>

    <div id="react-activity-calendar">
        <h1>GitHub Stats</h1>
        <GitHubCalendar year="last"  username="sankethganiga95" />
      </div>
      
    <div id="All-cards">

      <div>
        {/* <a href="https://git.io/streak-stats"> */}
            <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=SankethGaniga95&theme=javascript-dark&hide_border=true&card_width=520&type=png" alt="" />
        {/* </a> */}
      
     
    </div>
    <div id="hello">
        {/* <a href="https://github.com/SankethGaniga95/github-readme-stats"> */}
            <img height="190px" id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=SankethGaniga95" alt="link broken" />
        {/* </a> */}
   
    </div>
    <div >
        {/* <a href="https://github.com/SankethGaniga95/github-readme-stats"> */}
            <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=SankethGaniga95&show_icons=true&theme=highcontrast&hide_border=true" alt="" />
        {/* </a> */}
   
    </div>
    </div>
    </div>
  )
}
