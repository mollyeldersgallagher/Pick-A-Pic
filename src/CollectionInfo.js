import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import NavBar from './NavBar';

//displays a single collection information and data is passed in using the location object along side state
// this reduces an uneccisary call to the api as the data has already been pulled

class CollectionInfo extends React.Component {
  constructor(props){
    super(props);
    this.state=  this.props.location.state ;
  }
  componentDidMount(){

  }
  render() {
    console.log(this.state);
    const tags = this.state.collection.tags.map(p => {
      return(
        <li className="list-group-item">{p.title}</li>
      )});
    return(
      <div className="card" >
        <div className="row">
          <div className="col-md-4">
            <img src={this.state.collection.cover.regular} className="card-img" alt="..."/>
          </div>
          <div className="col-md-4">
            <h2 >{this.state.collection.title}</h2>
            <p>{this.state.collection.description}</p>

            <p>Collections total photos:{this.state.collection.total_photos}</p>
            <h4>Tags:</h4>
            <ul className="list-group">{tags}</ul>

          </div>
          </div>
          <div className="row">
          <div className="col-md-4">
          <img className="img-fluid rounded-circle" src={this.state.collection.user.profile_image.medium}/>
          <p className="card-text"><small class="text-muted">@{this.state.collection.user.instagram_username}</small></p>
          </div>


        </div>
      </div>
    );
  }
}

export default CollectionInfo;
