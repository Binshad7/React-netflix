import React,{useEffect,useState,useContext} from 'react';
// import YouTube from 'react-youtube';
import { useNavigate} from 'react-router-dom'
import './RowPost.css';
import {imgUrl} from '../../constants/constants';
import axios from '../../axois';
import { ActionMovies } from '../../context/MoviesAction';
import { OriginalsProvider } from '../../context/MoviesOrginals';
function RowPost(props) {
    const {ActionMovie}  = useContext(ActionMovies)
    const {OrginalsMovie}  = useContext(OriginalsProvider)
   const navigate = useNavigate();
   const [movies,setMovies] = useState([])
  //  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url)
    .then((response)=>{
      let data  = response.data.results
      setMovies(data)     
      props.title === 'Action' ? ActionMovie(data):OrginalsMovie(data)   
    })
    .catch(err=>{
      alert("some thing wrong");
    });
  },[props.url])
  // const opts = {
  //   height:'390',
  //   width : '100%',
  //   playerVars : {
  //     autoplay :1,
  //   },
  // };

  
  return (
    <div className='row'>
   <h2>{props.title}</h2>
   <div className="posters">

    {movies.map((obj)=>{
      return(

        <img onClick={()=>  navigate(`/DisplayDetails/${props.title==='Action'?'Action':'Originals'}/${obj.id}`)} className={props.isSmall ?'smallPoster':'poster' } key={obj.id} src={`${ imgUrl+obj.backdrop_path }`} alt="poster" />
      )
      
    })}
   </div>
   
  {/* {  urlId && <YouTube  opts={opts} videoId={urlId.key}/>  } */}

    </div>
  )
}

export default RowPost

//  axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
//   console.log('response',response);
//   if(response.data.results.length!==0){
//     setUrlId(response.data.results[0])
//   }
//   else{
//     console.log('Array is empty');
//   }
//      console.log(response.data)
//  })
//  .catch(err=>{
//   if(err.name === 'AxiosError'){
//     alert('data not get')
//   }
//   console.log(err);
//   console.log(err.message);
// })