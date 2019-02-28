import React, { Component } from 'react';
import PropTypes from 'prop-types'; //> yarn add prop-types
import './Movie.css';

/*
MoviePoster = function(){}      // X
MoviePoster = () => {}          // X
function MoviePoster(){}        // O
const MoviePoster = () => {}    // O
*/

const Movie = ( {title, poster} ) => {
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster ( {poster} ){
    return(
        <img src={poster} alt='Movie Poster' />
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

export default Movie;