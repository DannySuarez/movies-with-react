import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export const Movie = ({movie}) => {

  return (
  <Link to={`/${movie.id}`}>
    <Overdrive id={movie.id}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;