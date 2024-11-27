import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'
import { api_key } from '../../constants/constants'
import axios from 'axios'


function PlayMovie() {
    const {movieID} = useParams();
    const [movieURL,setMovieURL] = useState()

    const movieFetching =async ()=>{
        try{

            const response =await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${api_key}&language=en-US`)
            console.log(response.data.results[0].key);
            setMovieURL(response.data.results[0].key)
        }catch(error){
            console.log(error);
            console.log('some thing wrong');
            
        }
    }
    useEffect(()=>{
        movieFetching()
    },[movieID])
      const opts = {
    height:'390',
    width : '100%',
    playerVars : {
      autoplay :1,
    },
  };
  return (
    <div>
        <h1>Hello</h1>
       <YouTube videoId={movieURL} opts={opts}/>
    </div>
  )
}



export default PlayMovie
