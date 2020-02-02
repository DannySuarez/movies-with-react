import React, {useState, useEffect} from 'react'
import { getMovieDetail } from '../services/getMovieDetail';
import { Poster } from '../Movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

export const MovieDetail = ({match}) => {  
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetail(match.params.id)
    .then(movie => setMovie(movie));
  }, [match.params.id])

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Overdrive id={movie.id}>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  )
}

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;