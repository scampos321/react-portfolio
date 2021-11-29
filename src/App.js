import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from "react-particles-js"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
  return (
   <>
   <Particles
   className="particles-canvas" 
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#89CFF0"
            }
          }
        }
      }}
   />
   <Navbar />
   <Header />
   <AboutMe />
   <Portfolio />
   <Contacts />
   </>
  );
}

export default App;
