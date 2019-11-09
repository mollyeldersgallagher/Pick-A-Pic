import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//import Home from './Home';
import NavBar from './NavBar';


class Home extends React.Component {
  render() {
    return(
      <div class="container">
        <div class="jumbotron">
          <h1>Pick-A-Pick</h1>
          <p>Explore images from unsplahed and user collections</p>
        </div>
        <p>Be Inspired.</p>
        <p>Unsplash.</p>
        </div>
    );
  }
}

export default Home;
