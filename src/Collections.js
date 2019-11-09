import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import CollectionInfo from './CollectionInfo';

// Collections contains two components a collections component and a collection component
// each object returned form the api responce is mapped to a single collection comonent. these
//are then displayed in the collections component

// state has many properties, term is constantly watched using setState as he render needs to be
// constantly updated to make sure the term is correctly handled
// other properties consist of parapmeters that are needed to be passed into the api to get relevant data

//Both a search by collections and all collections data are both pulled within this component

class Collections extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
      collections: [],
      perPage:30,
      page:1
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event){
    this.setState({term: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let apiKey = '24ecc2c893677574b891c6b76127845e435ba56ba1a6e84e32c23fae0ba00014';
    fetch(`https://api.unsplash.com/search/collections/?page=${this.state.page}&per_page=${this.state.perPage}  &client_id=${apiKey}&query=${this.state.term}`)
    .then(res => res.json())
    .then(data => {this.setState({
      term: '',
      collections: data.results,
    })

  })
    .catch(e => console.log('error', e));
  }

  componentDidMount(){
    let apiKey = '24ecc2c893677574b891c6b76127845e435ba56ba1a6e84e32c23fae0ba00014';
    fetch(`https://api.unsplash.com/collections/?page=${this.state.page}&per_page=${this.state.perPage}&client_id=${apiKey}`)
    .then(res => res.json())
    .then(data => this.setState({
      collections: data,
    }))
    .catch(e => console.log('error', e));

  }

  render() {
    console.log(this.state);

    const collectionComponents = this.state.collections.map(p => {
      return(
        <Collection key={p.id} id={p.id} title={p.title} cover={p.cover_photo.urls} description={p.description} preview_photos={p.preview_photos} tags={p.tags} total_photos={p.total_photos} user={p.user} likes={p.likes}/>
      );
    });


    return(
      <div>
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
        {collectionComponents}
        </div>
      </div>
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
class Collection extends React.Component {

  render(){

    return(
    <div className="card">

      <img className="card-img" src={this.props.cover.regular} />
      <h5 className="card-title">{this.props.title}</h5>
        <Link to={{ pathname:`collection/${this.props.id}`, state:{collection: this.props}}}>
      <button className="btn btn-success">View</button>
      </Link>
    </div>
  )
}
}

export default Collections;
