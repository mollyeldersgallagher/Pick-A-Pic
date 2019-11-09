import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Photos from './Photos';
import PhotoInfo from './PhotoInfo';
import Collections from './Collections';
import CollectionInfo from './CollectionInfo';

// React router alows you to bind a path name and a component togeter
// this alows you to swith components in and out effectively


class NavBar extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/photos">Photos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/collections">Collections</Link>
              </li>
              <li className="nav-item">

              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/photos" component={Photos} />
            <Route path="/photo/:id" component={PhotoInfo} />
            <Route path="/collections" component={Collections} />
            <Route path="/collection/:id" component={CollectionInfo} />
  
          </div>
        </Switch>
      </BrowserRouter>


    );
  }
}

export default NavBar;
