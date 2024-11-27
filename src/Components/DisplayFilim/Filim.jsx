import React, { useState, useContext, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

import { ActionMovies } from '../../context/MoviesAction';
import { OriginalsProvider } from '../../context/MoviesOrginals';

import {imgUrl} from '../../constants/constants'

import './Filim.css'

function Filim() {

    const navigate = useNavigate()
    const { actionMovies } = useContext(ActionMovies)
    const { orginals } = useContext(OriginalsProvider)
    const [movie, setMovie] = useState(null)
    const { filimID, type } = useParams()

    useEffect(() => {
        let result = null
        if (type === 'Action') {
             result = actionMovies.filter((data) => data?.id == filimID)
        }else{
             result = orginals.filter((data) => data.id == filimID) 
        }        
        result.length>0 ? setMovie(result[0]):navigate(-1)
        console.log(movie);
        
      
    }, [type,movie])
    if(!movie){        
        return <p>Loading ...</p>
    }
    return (
        <div className="netflix-page">

      <main className="main-content">
        <div className="highlighted-movie">
          <img
            src={`${imgUrl+movie.backdrop_path}`}
            alt="Shadows in the Mist Poster"
            className="movie-poster"
          />
          <div className="movie-details">
            <h2>{movie.name}</h2>
            <p>{movie.overview}</p>
            <div className="buttons">
              <button className="play-button" onClick={()=>navigate(`/play/${movie.id}`)}>Play</button>
              <button className="watchlist-button">Add to Watchlist</button>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
}

export default Filim
