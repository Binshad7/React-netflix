import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import './RowPost.css';
import { imgUrl } from '../../constants/constants';
import { ProductContext } from '../../context/ProductID';
import axios from '../../axois';


function RowPost(props) {
   const {handleProduct}  = useContext(ProductContext)
  const navigate = useNavigate();
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        let data = response.data.results
        setMovies(data)
      })
      .catch(err => {
        alert("some thing wrong");
      });
  }, [props.url])

 const onHnadle = (obj)=>{
  handleProduct(obj)
  navigate(`/DisplayDetails`)
 }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <img onClick={() =>onHnadle(obj) } className={props.isSmall ? 'smallPoster' : 'poster'} key={obj.id} src={`${imgUrl + obj.backdrop_path}`} alt="poster" />
          )
        })}
      </div>


    </div>
  )
}

export default RowPost