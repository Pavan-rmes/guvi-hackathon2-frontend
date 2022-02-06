import { movies } from "../movies"
import { useParams,useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { API } from "../utility"


export function Theators(){
    const [movie,setMovie] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`${API}/movies/${id}`)
        .then((data)=>setMovie(data.data))
    },[])
    console.log(movie)
    return(
        <div >
            <h1 style={{color:"white"}} className="moviename bg-gray-500 p-10">{movie?.moviename}</h1>
            <div style={{boxShadow:"0 2px 4px 0 rgba(0,0,0,0.2)",backgroundColor:"white"}} className="flex-column my-10 md:mx-40 p-2 md:p-10">
                {movie?.theater?.map((th,index)=>(<Theator key={index} id={id} theatorname={th.name} timings={th.timings} />))}
            </div>
        </div>
    )
}

function Theator({theatorname,timings,id}){
    const history = useHistory()
    return(
        <div>
            <hr></hr>
            <div className="flex items-center">
                <div>
                    <p className="font-semibold my-2">{theatorname}</p>
                    <MobilesvgIcon color="green" />
                    <label style={{color:"green"}}>M-Ticket</label>
                </div>
                <div className=" md:ml-48 flex flex-wrap p-2 gap-x-6">
                    {timings.map((time,index)=>(
                    <div
                    onClick={()=>history.push(`/movie/${id}/seating`,{time:time?.time,theatorname:theatorname})}
                     key={index}  className="cursor-pointer border-green-500 border md:p-2 text-green-400">{time?.time}</div>))}
                </div>
            </div>
            <hr></hr>
        </div>
    )
}


function MobilesvgIcon({color}){
    return(
        <svg color={color} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    )
}