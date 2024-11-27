import React, { useEffect, useState, useContext } from 'react';
// import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom'
import './RowPost.css';
import { imgUrl } from '../../constants/constants';
import axios from '../../axois';
import { ActionMovies } from '../../context/MoviesAction';
import { OriginalsProvider } from '../../context/MoviesOrginals';
function RowPost(props) {
  const { ActionMovie } = useContext(ActionMovies)
  const { OrginalsMovie } = useContext(OriginalsProvider)
  const navigate = useNavigate();
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        let data = response.data.results
        setMovies(data)
        props.title === 'Action' ? ActionMovie(data) : OrginalsMovie(data)
      })
      .catch(err => {
        alert("some thing wrong");
      });
  }, [props.url])



  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">

        {movies.map((obj) => {
          return (

            <img onClick={() => navigate(`/DisplayDetails/${props.title === 'Action' ? 'Action' : 'Originals'}/${obj.id}`)} className={props.isSmall ? 'smallPoster' : 'poster'} key={obj.id} src={`${imgUrl + obj.backdrop_path}`} alt="poster" />
          )

        })}
      </div>


    </div>
  )
}

export default RowPost