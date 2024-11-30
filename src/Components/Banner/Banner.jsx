import React, { useEffect, useState,useContext } from 'react'
import {api_key,imgUrl} from '../../constants/constants'
import { ProductContext } from '../../context/ProductID'
import './Banner.css'
import axios from '../../axois'
import { useNavigate } from 'react-router-dom'
function Banner() {
  const {handleProduct} = useContext(ProductContext)
  const navigate =    useNavigate()
  const [movie,setMovie] = useState()
  useEffect(()=>{
    const randomMovie = ()=>{
          let x = Math.floor(Math.random() * 19);
      axios.get(`/trending/all/week?api_key=${api_key}&language=en-US`).then((res)=>{
        setMovie(res.data.results[x])
      })
    }
  randomMovie();

  const interval = setInterval(randomMovie,60000)
 
  return ()=> clearInterval(interval)

  },[])
  
 const onHandle = ()=>{
   handleProduct(movie)
   navigate('/play')
 }

  return (
    
    <div
    style={{backgroundImage: `url(${movie ? imgUrl+movie.backdrop_path : ""})` }}
      className='banner'>
      
      <div className="content">
        <h1 className="title"> {movie ? movie.title :""}</h1>
        <div className="banner_buttons">
            <button className='button' onClick={onHandle}>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
