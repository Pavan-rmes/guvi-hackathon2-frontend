import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { API } from "../utility";


const theatreDetails = [
    {
        "theatrename":"AMB",
        "location":"Gachibowli, Hyderabad",
        "noofscreens":4,
        "theatreowner":"mahesh",
        "pricing":"200-250"
    },
    {
        "theatrename":"Platinum",
        "location":"Hitech-city, Hyderabad",
        "noofscreens":5,
        "theatreowner":"ganesh",
        "pricing":"300-350"
    },
    {
        "theatrename":"Asia",
        "location":"Ammerpet, Hyderabad",
        "noofscreens":2,
        "theatreowner":"pavan",
        "pricing":"200-300"
    }
]

export function AdminMovies(){
    const [theatreDetails,setTheatreDetails] = useState([])
    const history = useHistory()
    useEffect(()=>{
      axios.get(`${API}/admin/theatres`)
      .then((data)=>setTheatreDetails(data.data))
    },[])
  
    return(
      <div className="ml-2 mt-2 md:mt-20 md:mr-96 md:ml-96">
          <button
          onClick={()=>history.push("/admin/add")}
           className="bg-blue-500 mb-8 text-white px-4 py-2 rounded float-right">+Add</button>
          {theatreDetails?.map((theatre,index)=> (<Theatre key={index} theatre={theatre} />))}
      </div>
    )
  }
  
  function Theatre({theatre}){
    const history = useHistory()
      return(
          <div>
              <hr></hr>
              <p className="my-2 font-medium text-4xl">{theatre.theatrename}</p>
              <LocationIcon />
              <p className="my-2 font-medium text-xl">{theatre.location}</p>
              <p className="my-2 font-medium text-xl">No of Screens: {theatre.noofscreens}</p>
              <p className="my-2 font-medium text-xl">Price Range: {theatre.pricing}</p>
              <button
              onClick={()=>history.push(`/admin/${theatre._id}`)}
              className="bg-green-500 my-2 text-white p-2 rounded">Show details</button>
          </div>
      )
  }




 export function LocationIcon(){
      return(
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      )
  }


  function EditIcon(){
      return(
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
      )
  }