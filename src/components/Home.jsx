import "./Home.css"
import wave from "../images/wave.png"


export const Home=()=>{

    return(
        <div id="home">     
        <div id="home-content">
        <h2>Hello! <span><img src={wave} alt="" width="30px" /></span></h2>
        <h2>I'm <span>Sanketh Ganiga</span>, an aspiring full stack web developer, who is passionate about building user friendly websites, based in Thane,Maharashtra. In my spare time I play chess, read books related to Physics. </h2>

        </div>
        <div id="home-image">
          <div className="container">
        <div className="moon"></div>
        <div className="crater crater-1"></div>
        <div className="crater crater-2"></div>
        <div className="crater crater-3"></div>
        <div className="crater crater-4"></div>
        <div className="crater crater-5"></div>
        <div className="shadow"></div>
        <div className="eye eye-l"></div>
        <div className="eye eye-r"></div>
        <div className="mouth"></div>
        <div className="blush blush-1"></div>
        <div className="blush blush-2"></div>
          </div>
          <div className="orbit">
            <div className="rocket">
                <div className="rocket-wings"></div>
                 <div className="window"></div>
            </div>
          </div>
        </div>

        </div>
    )
    }