import React, { useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import palette from 'google-palette';
import { useMediaQuery } from 'react-responsive';
import { AnimatedSwitch } from 'react-router-transition';

import {
  Switch,
  Route,
  HashRouter
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
import Navbar from './components/Navbar/Navbar';

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
      sidebar: () => <Navbar selected="home" palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]} currentPage={"home"}/>,
      main: () => <Home palette={colorPalette}/>
    },
    {
      path: "/about",
      sidebar: () => <Navbar selected="about" palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]} currentPage={"about"}/>,
      main: () => <About titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects",
      exact: true,
      sidebar: () => <Navbar selected="projects" palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]} currentPage={"projects"}/>,
      main: () => <Projects titleColor={colorPalette[6]}/>
    },
    {
      path: "/art",
      exact: true,
      sidebar: () => <Navbar selected="art" palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]} currentPage={"art"}/>,
      main: () => <Art titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/express-hire",
      sidebar: () => <Navbar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <ExpressHire titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/component-cloner",
      sidebar: () => <Navbar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <ComponentCloner titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/project-guppi",
      sidebar: () => <Navbar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <ProjectGuppi titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/causeway",
      sidebar: () => <Navbar palette={colorPalette}/>,
      bottombar: () => <BottomNav backgroundColor={colorPalette[5]}/>,
      main: () => <Causeway titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/cryptanna",
      sidebar: () => <Navbar palette={colorPalette}/>,
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
      <HashRouter basename="/">
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

          <AnimatedSwitch atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              mapStyles={(styles) => {
                  return {
                      position: (styles.foo <= 1) ? 'relative': 'absolute',
                      width: '100%',
                      height: '100%',
                      opacity: styles.opacity,
                      background: `linear-gradient(180deg, ${colorPalette[0]} 0%, rgba(255, 255, 255, 0) 100%)`
                  }
              }}
              className="switch-wrapper">

            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </AnimatedSwitch>
        </div>
        

      </div>

        

      </HashRouter>
    </div>
  );
}

export default App;
