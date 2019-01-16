import React, { Component } from 'react';
import Banner from './components/Banner/Banner';
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Banner/>
        </header>
        <div className="body">
        
        </div>
      </div>
    );
  }
}

export default App;
