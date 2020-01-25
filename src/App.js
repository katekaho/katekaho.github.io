import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import palette from 'google-palette';
import { AnimatedSwitch } from 'react-router-transition';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
      main: () => <Home palette={colorPalette}/>
    },
    {
      path: "/about",
      sidebar: () => <Sidebar selected="about" palette={colorPalette}/>,
      main: () => <About titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects",
      exact: true,
      sidebar: () => <Sidebar selected="projects" palette={colorPalette}/>,
      main: () => <Projects titleColor={colorPalette[6]}/>
    },
    {
      path: "/art",
      exact: true,
      sidebar: () => <Sidebar selected="art" palette={colorPalette}/>,
      main: () => <Art titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/express-hire",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      main: () => <ExpressHire titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/component-cloner",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      main: () => <ComponentCloner titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/project-guppi",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      main: () => <ProjectGuppi titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/causeway",
      sidebar: () => <Sidebar palette={colorPalette}/>,
      main: () => <Causeway titleColor={colorPalette[6]}/>
    },
    {
      path: "/projects/cryptanna",
      sidebar: () => <Sidebar palette={colorPalette}/>,
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
    <div className="App" style={
                                {background: `linear-gradient(180deg, ${colorPalette[0]} 0%, rgba(255, 255, 255, 0) 100%)`,
                                fontFamily: defaultFont ? null : 'OpenDyslexic'}
                                }>
      <Router>
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

          <ThemeFontSelector palette={colorPalette} 
                            newColor={updateColor} 
                            setColorGray={setToGray}
                            setFontDefault={setToDefaultFont}
                            setFontDyslexic={setToDyslexicFont}/>
            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
        </div>
      </Router>
    </div>
  );
}

export default App;
