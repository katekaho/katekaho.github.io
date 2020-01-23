import React from 'react';
import './App.scss';
import Parallax from './components/Parallax/Parallax';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Parallax/>
    </div>
  );
}

export default App;
