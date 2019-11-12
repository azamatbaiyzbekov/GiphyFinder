import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import Information from './components/information/Information';
import LineAnimation from './components/line-animation/LineAnimation';

import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Information />
          <LineAnimation />
          <Search />
          
        </div>
      
      </MuiThemeProvider>
    );
  }
  
}

export default App;

