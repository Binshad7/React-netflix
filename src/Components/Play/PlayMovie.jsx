import React, { useEffect, useState, useContext } from 'react'
import YouTube from 'react-youtube'
import { api_key } from '../../constants/constants'
import axios from 'axios'
import { ProductContext } from '../../context/ProductID'


function PlayMovie() {
  const {product} = useContext(ProductContext)
  const [movieURL, setMovieURL] = useState()

  const movieFetching = async () => {
    try {

      const response = await axios.get(`https://api.themoviedb.org/3/movie/${product.id}/videos?api_key=${api_key}&language=en-US`)
      console.log(response.data.results[0].key);
      setMovieURL(response.data.results[0].key)
    } catch (error) {
      console.log(error);
      console.log('some thing wrong');

    }
  }
  useEffect(() => {
    movieFetching()
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <h1>Hello</h1>
      <YouTube videoId={movieURL} opts={opts} />
    </div>
  )
}



export default PlayMovie
