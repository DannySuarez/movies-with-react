import React, { Component } from 'react'
import styled from 'styled-components';
import { Movie } from '../Movie';
import { getMovies } from '../services/getMovies';

export default class MovieList extends Component {

  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const movies = await getMovies();
      this.setState({
        movies
      })   
    } catch (error) {
      console.log(error);
      
    }
  }

  render() {
    const { movies } = this.state;

    return (
        <MovieGrid>
          {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </MovieGrid>
    )
  }
}

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;