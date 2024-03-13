import React,{useEffect,useState} from 'react';
import YouTube from 'react-youtube';
import './RowPost.css';
import {imgUrl,api_key} from '../../constants/constants';
import axios from '../../axois';
function RowPost(props) {
   const [movies,setMovies] = useState([])
   const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url)
    .then((response)=>{
      console.log(response.data);
      setMovies(response.data.results) 
    })
    .catch(err=>{
      alert("api_key is missing");
    });
  },[])
  const opts = {
    height:'390',
    width : '100%',
    playerVars : {
      autoplay :1,
    },
  };
  const handleMovie = (id)=>{
   console.log(id);
   axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
    console.log('response',response);
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }
    else{
      console.log('Array is empty');
    }
       console.log(response.data)
   })
   .catch(err=>{
    if(err.name === 'AxiosError'){
      alert('data not get')
    }
    console.log(err);
    console.log(err.message);
  })
  }

  return (
    <div className='row'>
   <h2>{props.title}</h2>
   <div className="posters">
    {movies.map((obj)=>{
      return(
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster' } key={obj.id} src={`${ imgUrl+obj.backdrop_path }`} alt="poster" />
      )
      
    })}
   </div>
   
  {  urlId && <YouTube  opts={opts} videoId={urlId.key}/>  }

    </div>
  )
}

export default RowPost
