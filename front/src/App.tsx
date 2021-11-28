import React from 'react';
import './App.css';
import SideBar from './pages/components/SideBar/SideBar'
import Homepage from './pages/components/Homepage/Homepage'

function App() {
  return (
    <>
      <div className='App'>
        <div className='sidebar'>
          <SideBar />
        </div>
        <div className='homepage'>
          <Homepage />
        </div>
      </div>
    </>
  );
}

export default App;
