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
        console.log(2);
        
        result.length>0 ? setMovie(result[0]):navigate(-1)

    }, [type])
    if(!movie){
        console.log(1);
        
        return <p>Loading ...</p>
    }
    return (
        <div className="netflix-page">
      <header className="header">
        <h1>Netflix</h1>
      </header>

      <main className="main-content">
        <div className="highlighted-movie">
          <img
            src={`${imgUrl+movie.backdrop_path}`}
            alt="Shadows in the Mist Poster"
            className="movie-poster"
          />
          <div className="movie-details">
            <h2>Shadows in the Mist</h2>
            <p>A gripping tale of mystery and survival in a fog-covered town.</p>
            <div className="buttons">
              <button className="play-button">Play</button>
              <button className="watchlist-button">Add to Watchlist</button>
            </div>
          </div>
        </div>

        <div className="recommendations">
          <h3>Recommended for You</h3>
          <div className="thumbnails">
            <img
              src="https://via.placeholder.com/150"
              alt="Movie 1"
              className="thumbnail"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Movie 2"
              className="thumbnail"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Movie 3"
              className="thumbnail"
            />
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Netflix Clone</p>
      </footer>
    </div>
    )
}

export default Filim
