import './App.css';
import React, { Component } from 'react';
// import Axios from 'axios';
import ChartSection from './components/ChartSection';
import Home from './components/Home';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <ChartSection />
      </div>
    );
  }
}
