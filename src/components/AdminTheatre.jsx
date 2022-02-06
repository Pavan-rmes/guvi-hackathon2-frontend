import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { API } from "../utility"
import { LocationIcon } from "./AdminUser"

export function AdminTheatre(){
    const [theatre,setTheatre] = useState([])
    const [movieData,setMovieData] = useState([])
    const {id} = useParams()
   useEffect(()=>{
    axios.get(`${API}/admin/theatres/${id}`)
    .then(data=>setTheatre(data.data))
    axios.get(`${API}/admin/movies/${id}`)
    .then((data)=>setMovieData(data.data))
   },[])
    return(
        <div className="ml-2 mt-2 md:ml-96 md:mt-10">
            <p className="my-2 font-medium text-4xl">{theatre.theatrename}</p>
              <LocationIcon />
              <p className="my-2 font-medium text-xl">{theatre.location}</p>
              <p className="my-2 font-medium text-xl">No of Screens: {theatre.noofscreens}</p>
              <p className="my-2 font-medium text-xl">Price Range: {theatre.pricing}</p>
              {movieData.map((data,id)=>(<Theator key={id} data={data} theatre={theatre} />))}
        </div>
    )
}


function Theator({data,theatre}){
    const history = useHistory()
    const theatres = data?.theater?.filter((th)=>th.name === theatre.theatrename)[0]
    return(
        <div className="mt-10">
            <hr></hr>
            <div className="flex items-center">
                <div>
                    <p className="font-semibold my-2">{data.moviename}</p>
                </div>
                <div className=" md:ml-48 flex flex-wrap p-2 gap-x-6">
                    {theatres?.timings?.map((time,index)=>(
                    <div
                    onClick={()=>history.push(`/movie/${data._id}/seating`,{time:time?.time,theatorname:data.moviename})}
                     key={index}  className="cursor-pointer border-green-500 border md:p-2 text-green-400">{time?.time}</div>))}
                </div>
            </div>
           <hr></hr>
        </div>
    )
}