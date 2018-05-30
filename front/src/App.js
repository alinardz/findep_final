import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Nabvar';
import {Routes} from "./Routes";
import 'react-router-modal/css/react-router-modal.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Routes/>
      </div>
    );
  }
}

export default App;


