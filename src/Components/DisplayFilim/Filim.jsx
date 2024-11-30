import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductID';
import {imgUrl} from '../../constants/constants'


import './Filim.css'

function Filim() {

    const navigate = useNavigate()
    const {product} = useContext(ProductContext)
    useEffect(() => {
       
        if(!product){
          navigate('/')
        }
        console.log('prodct ',product);
        
      
    }, [product])
    if(!product){        
        return <p>Loading ...</p>
    }
    return (
        <div className="netflix-page">

      <main className="main-content">
        <div className="highlighted-movie">
          <img
            src={`${imgUrl+product.backdrop_path}`}
            alt="Shadows in the Mist Poster"
            className="movie-poster"
          />
          <div className="movie-details">
            <h2>{product.name}</h2>
            <p>{product.overview}</p>
            <div className="buttons">
              <button className="play-button" onClick={()=>navigate(`/play`)}>Play</button>
              {/* <button className="watchlist-button">Add to Watchlist</button> */}
            </div>
          </div>
        </div>
      </main>
    </div>
    )
}

export default Filim
