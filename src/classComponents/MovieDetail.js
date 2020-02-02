import React, { Component } from 'react'
import { Poster } from '../Movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { getMovieDetail } from '../services/getMovieDetail';


const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

export default class MovieDetail extends Component {

  state = {
    movie: {},
  }

  async componentDidMount() {
    const { match } = this.props
    try {
      const movie = await getMovieDetail(match.params.id);
      this.setState({
        movie
      })   
    } catch (error) {
      console.log(error);
    }
  }
  
  render() {
    const { movie } = this.state;
    
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