import "./Home.css"




export const Home=()=>{

    return(
        <div id="home">     
        <div id="home-content">
        <p>Hi there, my name is</p>
        <h1>Sanketh Ganiga.</h1>
        <h2>Full Stack Web Developer</h2>
        <p>An Aspiring Web Developer, who is passionate about building user friendly websites, based in Thane,Maharashtra. In my spare time I play chess, read books related to Physics. </p>

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