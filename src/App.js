import React, { Component } from 'react';
//import './App.css';
import './index.scss';
import './asset/css/animate.css';
import './asset/css/icofont/icofont.min.css';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        <Navbar/>
        <AboutPage/>
      </div>
    );
  }
}

export default App;
