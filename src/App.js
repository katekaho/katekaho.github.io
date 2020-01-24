import React from 'react';
import './App.scss';
import Parallax from './components/Parallax/Parallax';
import Sidebar from './components/Sidebar/Sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Sidebar selected="home"/>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/about",
    sidebar: () => <Sidebar selected="about"/>,
    main: () => <h2>About</h2>
  },
  {
    path: "/projects",
    sidebar: () => <Sidebar selected="projects"/>,
    main: () => <h2>Projects</h2>
  },
  {
    path: "/art",
    sidebar: () => <Sidebar selected="art"/>,
    main: () => <h2>Art</h2>
  }
]


function App() {
  return (
    <div className="App">
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

        <Switch>
          {routes.map((route, index) => (
            <Route 
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
