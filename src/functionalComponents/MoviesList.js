import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Movie } from '../Movie';
import { getMovies } from '../services/getMovies';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
    .then(movies => setMovies(movies))
  }, [])

  return (
    <MovieGrid>
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </MovieGrid>
  )
}

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;