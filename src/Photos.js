import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { Route, Link} from 'react-router-dom';

import PhotoInfo from './PhotoInfo';

class Photos extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
      photos: [],
      perPage:30,
      page:1
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    let apiKey = '24ecc2c893677574b891c6b76127845e435ba56ba1a6e84e32c23fae0ba00014';
    fetch(`https://api.unsplash.com/photos/?page=${this.state.page}&per_page=${this.state.perPage}&client_id=${apiKey}`)
    .then(res => res.json())
    .then(data => this.setState({
      photos: data,
    }))
    .catch(e => console.log('error', e));

  }

  handleInput(event){
    this.setState({term: event.target.value});
  }

  handleSubmit(event){
    if(this.state.term === ""){
      console.log("NO search term entered");
    }
    else{
      event.preventDefault();
      let apiKey = '24ecc2c893677574b891c6b76127845e435ba56ba1a6e84e32c23fae0ba00014';
      fetch(`https://api.unsplash.com/search/photos/?page=${this.state.page}&per_page=${this.state.perPage}  &client_id=${apiKey}&query=${this.state.term}`)
      .then(res => res.json())
      .then(data => {this.setState({
        term: '',
        photos: data.results,
      })
    })
      .catch(e => console.log('error', e));
    }}

  render() {

    const photoComponents = this.state.photos.map(p => {
      return(
        <Photo key={p.id} id={p.id} description={p.description} urls={p.urls} user={p.user} likes={p.likes}/>
      );
    });
//invisable html tag as the return one html element put in table single photo component
    return(
      <React.Fragment>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <form className="form-inline " onSubmit={this.handleSubmit}>
              <input className="form-control" value={this.state.term} onChange={this.handleInput} />
              <button className="btn btn-success">Search</button>
            </form>
          </div>
        </div>
        <div className="row">
          <hr/>
        </div>
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-5">
            <button className="btn btn-info" onClick={()=> this.click('prev')} value={'prev'}>Previous</button>
          </div>
          <div className="col-md-5 d-flex justify-content-end">
            <button className="btn btn-info" onClick={()=> this.click('next')} value={'next'}>Next</button>
          </div>
          <div className="col-md-1">
          </div>
        </div>
        <div className="card-columns">
          {photoComponents}
        </div>
    </React.Fragment>
    );
  }
  click(value){
    if(value === 'next'){
      const pageNo = this.state.page ++;
      this.componentDidMount(pageNo);
    }
    else if(value === 'prev'){
      if(this.state.page >= 1){
        let pageNo= this.state.page --;
        console.log(pageNo)
        this.componentDidMount(pageNo);
      }
    }
  }
}

Photos.propTypes = {
  term: propTypes.string.isRequired
}

class Photo extends React.Component {

  render(){
    return(

      <div className="card">
        <Link to={{ pathname:`photo/${this.props.id}`, state:{photo: this.props}}}>
          <img className="card-img" src={this.props.urls.regular} />
        </Link>
    </div>

    )
  }
}

export default Photos;
