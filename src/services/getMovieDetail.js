export const getMovieDetail = async(id) => {  
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3771c621714ce1dfc1fe4437e8f9dd58&language=en-US`)
    return await res.json()
  } catch (error) {
    console.log(error);  
  }
}
