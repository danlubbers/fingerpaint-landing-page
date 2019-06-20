import React, { useRef }from 'react';
import './App.scss';

import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import ThreeUp from './Components/ThreeUp/ThreeUp';
import HeroPanel from './Components/HeroPanel/HeroPanel';
import LeadForm from './Components/LeadForm/LeadForm';
import ISI from './Components/ISI/ISI';

function App() {
  // Create reference file to DOM assigning to variavle using useRef()
  const newRef = useRef();

  return (
    <div className="App">
      <Header>
        {/* Passing prop reference file to Header */}
        <Header newRef={newRef}/>
      </Header>

      <div className="body">
        <LandingPage />
      </div>

      <div className="three-up-wrapper">
        <ThreeUp />
      </div>

      <div className="hero-panel-wrapper">
        <HeroPanel />
      </div>
            
      <div className="lead-form-wrapper">
        <LeadForm />
      </div>

      {/* Using the reference file to target this div to scroll onclick */}
      <div ref={newRef} className="isiWrapper">
        <ISI />
      </div>
    </div>

    
  );
}

export default App;
