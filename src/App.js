
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Github } from './components/Github';




function App() {
  
  return (
    <div className="App">
    
     <Navbar/>
     <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Github/> 
    <Contact/>  
    </div>
  );
}

export default App;
