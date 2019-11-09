import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import NavBar from './NavBar';

//Loading In Navbar
// App extends react compnents and swaps components in and out and displays them on the browser 

class App extends React.Component {
  render() {
    return(
      <NavBar />
    );
  }
}

export default App;
