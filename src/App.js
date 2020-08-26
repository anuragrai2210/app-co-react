import React, { Component } from 'react';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
        return (
          <BrowserRouter>
            <div className= "App1">
              <HomePage />
            </div>
          </BrowserRouter>
    )
  }
  
}

export default App;
