export const getMovies = () => {
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=3771c621714ce1dfc1fe4437e8f9dd58&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  .then(res => res.json())
  .then(movie => movie.results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview
    }
  }))
}
