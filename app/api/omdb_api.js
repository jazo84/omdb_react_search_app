import React, {Component} from 'react';
import axios from 'axios';

export default class Omdb extends Component {
  constructor(props) {
      super(props);
      this.state = {
        movie: undefined
      };
  }
  searchMovie(e){
    e.preventDefault();
      let movieTitle = this.refs.movies.value;
      if(movieTitle.length > 2) {
        let api_key = '40e9cece'
        let api_url = `http://www.omdbapi.com/?apikey=${api_key}&t=${movieTitle}`
        axios.get(api_url, {
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
          }
        }).then((results)=> {
          this.setState({
            movie:results.data
          })
          });
      }
    }
      render(){
        console.log(this.state.movie)
    const displayMovie = () => {
      if(this.state.movie){
        return (
          <div id="content">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
              <a href={"https://www.imdb.com/title/"+ this.state.movie.imdbID}><img style={{width:'250px', height:'auto'}} src={this.state.movie.Poster}/></a>
              </div>
              <div className="col-sm-9">
              <a href={"https://www.imdb.com/title/"+ this.state.movie.imdbID}><h5>Movie Title: {this.state.movie.Title}</h5></a>
              <h5>Release Date: {this.state.movie.Released}</h5>
              <h5>Genre: {this.state.movie.Genre}</h5>
              <h5>Country: {this.state.movie.Country}</h5>
              <h5>Rating: {this.state.movie.imdbRating}</h5>
              <h5>Awards: {this.state.movie.Awards}</h5>
              </div>
            </div>
          </div>
          </div>
        )
      }
    }
    return (
      <div id='box'>
      <h1 id="header">Totally Cool Movie Search</h1>
      <h5 id='sub-header'>To Begin, Just Enter a Movie Title Below</h5>
      <form>
      <br></br>
      <div id='input'><input style={{width: '50%'}} type="text" ref="movies" onChange={this.searchMovie.bind(this)}/></div>
      <br></br>
      </form>
      {displayMovie()}
          <img id='background_image' src="http://static.squarespace.com/static/52685923e4b0269256606ca2/t/527af6eae4b06f059b9c5091/1383790314335/movies.jpg" />
      </div>

    );
      }
    }
