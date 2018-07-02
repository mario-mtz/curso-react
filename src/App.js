import React, { Component } from 'react';
import LocationList from './components/LocationList';
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
