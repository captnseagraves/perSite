import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/header.js';
import Footer from './layout/footer.js';
import Home from './main/home.js';



class App extends Component {
  render() {
    return (
    <div>
      <Home />
    </div>
    );
  }
}

export default App;
