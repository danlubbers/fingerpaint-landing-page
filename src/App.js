import React from 'react';
import './App.scss';

import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
// import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header>
        <Header />
      </Header>

      <div className="body">
        <LandingPage />
      </div>

      {/* <Footer>
        <Footer />
      </Footer> */}

    </div>
  );
}

export default App;
