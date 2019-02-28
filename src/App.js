import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    
  }
  componentWillMount(){
    console.log('will mount');
  }

  componentDidMount(){
    console.log('did mount');

    /*
    setTimeout( () =>{
        this.setState({
          movies: [
            {
              "title":"Matrix",
              "poster" : "https://www.joblo.com/assets/images/oldsite/posters/images/full/venompostertransform.jpg"
            },
            {
              "title":"Full Metal Jacket",
              "poster" : "http://gdj.graphicdesignjunction.com/wp-content/uploads/2011/03/127-hours-movie-poster.jpg"
            },
            {
              "title":"Oldboy",
              "poster" : "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg"
            },
            {
              "title":"Star Wars",
              "poster" : "https://media0ch-a.akamaihd.net/65/30/2df6087dcc2632f07512a13e4ab2bcda-if-movies-had-honest-posters-march-2017-edition.jpg"
            },
            {
              "title":"Oblivion",
              "poster" : "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201304/26/24/b0056924_517a83681a592.jpg"
            }
          ]
        });
    }, 2000)
    */

    this._getMovies();

  }

  _renderMovies = () => {
    const movies = this.state.movies.map( value => {
      // map : Return element for new_array
      return <Movie title={value.title} poster={value.medium_cover_image} key={value.id} />
    });

    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();

    // set state는 call api 작업이 완료(성공적수행과는 다름)되기 전 까지는 실행되지 않음
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then( response => response.json() ) // == .then( response => { return response.json() } )
    .then( json => json.data.movies )
    .catch( err => console.log(err) )
  }

  render() {
    
    console.log('did render');

    // forEach 를 쓰면 불편한이유 : 반환값이 없어서(undefined) 배열에 Movie 객체들을 담고 렌더해 주는 번거로움이 있기때문.
    /*
    let MoviesByForEach = [];
    movies.forEach( (v,i,a) => {
      MoviesByForEach.push(<Movie title={v.title} poster={v.poster} />);
    });

    // 이후 JSX 에서 { MoviesByForEach } 으로 선언하면 됨..
    */
    
    return (
      <div className="App">
        { this.state.movies ? this._renderMovies() : "Loading..." }
      </div>
    );

  }
}

export default App;
