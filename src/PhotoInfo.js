import React from 'react';
import ReactDOM from 'react-dom';

class PhotoInfo extends React.Component {
  constructor(props){
    super(props);
    this.state=  this.props.location.state ;
  }
  componentDidMount(){

  }
  render() {
    console.log(this.state);
    return(
      <div className="card mb-3" >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.state.photo.urls.regular} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.state.photo.description}</h5>
              <img className="img-fluid rounded-circle" src={this.state.photo.user.profile_image.medium}/>
              <p className="card-text"><small class="text-muted">@{this.state.photo.user.instagram_username}</small></p>
              <p className="card-text"><small class="text-muted">Likes: {this.state.photo.likes}</small></p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default PhotoInfo;
