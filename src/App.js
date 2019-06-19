import React from 'react';
import './App.scss';

import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import ThreeUp from './Components/ThreeUp/ThreeUp';
import HeroPanel from './Components/HeroPanel/HeroPanel';
import LeadForm from './Components/LeadForm/LeadForm';
import ISI from './Components/ISI/ISI';

function App() {
  return (
    <div className="App">
      <Header>
        <Header />
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

      <div className="isiWrapper">
        <ISI />
      </div>
    </div>

    
  );
}

export default App;
