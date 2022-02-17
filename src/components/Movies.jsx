import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { movies } from "../movies";
import { API } from "../utility";
import {Loader} from "../components/Spinner"
import mv1 from "../images/mv1.jpg"
import mv2 from "../images/mv2.jpg"
import mv3 from "../images/mv3.jpg"



export function Movies(){
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(`${API}/movies`)
    .then((data)=>setMovies(data.data))
  },[])

  if(movies.length>0){
    return(
      <div>
        <p className="bg-gray-100 p-4 font-semibold text-3xl text-red-500">BookMyShow</p>
        <div className="App">
        {movies.map((mv,index)=>(<Movie key={index} index={index} id={mv._id} moviename={mv.moviename} poster={mv.poster} type={mv.type} />))}
      </div>
      </div>
    )
  }
  else{
    return(
     <div className="flex justify-center mt-20">
       <Loader />
     </div>
    )
  }
}

const movieImages = [mv1,mv2,mv3]

function Movie({id, moviename, poster, type,index }) {
  console.log(index)
  const history = useHistory()
  return (
    <div onClick={()=>history.push(`/movie/${id}`)} className='movie'>
      <img className='poster' src={movieImages[index]} alt={moviename} />
      <h1 className='moviename'>{moviename}</h1>
      <p>{type.map((e)=>(e+" "))}</p>
    </div>
  );
}
