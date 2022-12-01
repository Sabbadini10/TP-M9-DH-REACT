import React from 'react'
import './App.css';
import SideBar from './components/SideBar';
import ContentWrappers from './components/ContentWrappers';


function App() {
  return (
    <div className="App">
    <div id="wrapper">
    <SideBar />
    <ContentWrappers />
    </div>
    </div>
  );
}

export default App;
