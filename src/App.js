import React, { useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import palette from 'google-palette';
import { useMediaQuery } from 'react-responsive';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import ThemeFontSelector from './components/ThemeFontSelector/ThemeFontSelector';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Art from './components/Art/Art';
import ExpressHire from './components/Projects/ProjectPages/ExpressHire/ExpressHire';
import ProjectGuppi from './components/Projects/ProjectPages/ProjectGuppi/ProjectGuppi';
import ComponentCloner from './components/Projects/ProjectPages/ComponentCloner/ComponentCloner';
import Causeway from './components/Projects/ProjectPages/Causeway/Causeway';
import Cryptanna from './components/Projects/ProjectPages/Cryptanna/Cryptanna';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BottomNav from './components/BottomNav/BottomNav';

const paletteOptions = [
  'cb-Greys',
  'tol-sq',
  'cb-Blues',
  'cb-BuGn',
  'cb-BuPu',
  'cb-Greens',
  'cb-OrRd',
  'cb-PuBu',
  'cb-PuBuGn',
  'cb-PuRd',
  'cb-Purples',
  'cb-RdPu',
  'cb-Reds',
  'cb-YlGn',
  'cb-YlGnBu',
  'cb-YlOrBr',
  'cb-YlOrRd'
]
let previousColorOption = -1;




function App() {


  const isDesktopOrLaptop = useMediaQuery({minWidth: 768});
  
  let randomOption;

  let generatePalette = () => {
    do {
      randomOption = Math.floor(Math.random() * paletteOptions.length);
    } while ((previousColorOption === randomOption) || (0 === randomOption))
    previousColorOption = randomOption;
    let generated = palette(paletteOptions[randomOption], 7).map(g => "#" + g);
    return generated;
};

  const [colorPalette, setPalette] = useState(generatePalette);

  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <Sidebar selected="home" palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]} currentPage={"home"}/>,
      main: () => <Home palette={colorPalette}/>
    },
    {
      path: "/about",
      sidebar: () => <Sidebar selected="about" palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]} currentPage={"about"}/>,
      main: () => <About titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects",
      exact: true,
      sidebar: () => <Sidebar selected="projects" palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]} currentPage={"projects"}/>,
      main: () => <Projects titleColor={colorPalette[6]}/>
    },
    {
      path: "/art",
      exact: true,
      sidebar: () => <Sidebar selected="art" palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]} currentPage={"art"}/>,
      main: () => <Art titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/express-hire",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <ExpressHire titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/component-cloner",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <ComponentCloner titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/project-guppi",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <ProjectGuppi titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/causeway",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <Causeway titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/cryptanna",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <Cryptanna titleColor={colorPalette[6]}/>
    },
  ]

  let updateColor = () => {
    setPalette(generatePalette);
  }

  let setToGray = () => {
    let grayPalette = palette(paletteOptions[0], 7).map(g => "#" + g);
    setPalette(grayPalette);
  }

  const [defaultFont, setFont] = useState(true);

  let setToDyslexicFont = () => {
    setFont(false);
  }

  let setToDefaultFont = () => {
    setFont(true);
  }

  return (
    <div className="App" 
          style={{
                  background: `linear-gradient(180deg, ${colorPalette[0]} 0%, rgba(255, 255, 255, 0) 100%)`,
                  fontFamily: defaultFont ? null : 'OpenDyslexic'
                }}>
      <Router>
        <ScrollToTop/>

      <div className="top-content-container">


        {!isDesktopOrLaptop && <ThemeFontSelector 
              palette={colorPalette} 
              newColor={updateColor} 
              setColorGray={setToGray}
              setFontDefault={setToDefaultFont}
              setFontDyslexic={setToDyslexicFont}/>}

        <Switch>
            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}       
        </Switch>

        <div className="main-content">
        {isDesktopOrLaptop && <ThemeFontSelector 
            palette={colorPalette} 
            newColor={updateColor} 
            setColorGray={setToGray}
            setFontDefault={setToDefaultFont}
            setFontDyslexic={setToDyslexicFont}/>}

            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
        </div>

      </div>

        {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.bottombar />}
              />
            ))}

      </Router>
    </div>
  );
}

export default App;
