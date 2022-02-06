import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { movies } from "../movies";
import { API } from "../utility";



export function Movies(){
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(`${API}/movies`)
    .then((data)=>setMovies(data.data))
  },[])

  return(
    <div className="App">
      {movies.map((mv,index)=>(<Movie key={index} id={mv._id} moviename={mv.moviename} poster={mv.poster} type={mv.type} />))}
    </div>
  )
}

function Movie({id, moviename, poster, type }) {
  const history = useHistory()
  return (
    <div onClick={()=>history.push(`/movie/${id}`)} className='movie'>
      <img className='poster' src={poster} alt={moviename} />
      <h1 className='moviename'>{moviename}</h1>
      <p>{type.map((e)=>(e+" "))}</p>
    </div>
  );
}
