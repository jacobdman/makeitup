import React, { Component } from 'react';
import Routes from './routes/Router';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
