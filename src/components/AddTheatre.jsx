import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { API } from "../utility"



export function AddTheatre(){

    const [name,setName] = useState()
    const [location,setLocation] = useState()
    const [screens,setScreens] = useState()
    const [owner,setOwner] = useState()
    const [price,setPrice] = useState()

    function saveButton(){
        axios.post(`${API}/admin/theatres`,{name,location,screens,owner,price})
        .then(()=>history.push("/admin"))
    }

    const history = useHistory()
    return(
        <div className="md:w-2/4 mr-2 ml-2 mt-2 md:ml-96 md:mt-10">
            <label className="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-first-name">
                Theatre Name
            </label>
            <input
            onChange={(e)=>setName(e.target.value)}
             className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="name" /> 

            <label className="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-first-name">
                Location
            </label>
            <input
            onChange={(e)=>setLocation(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="location" /> 

            <label className="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-first-name">
                No of Screens
            </label>
            <input
            onChange={(e)=>setScreens(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="screens count" /> 

            <label className="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-first-name">
                Theatre Owner
            </label>
            <input
            onChange={(e)=>setOwner(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Owner" /> 

            <label className="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-first-name">
                Price Range
            </label>
            <input 
            onChange={(e)=>setPrice(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Range" /> 
            <button
            onClick={()=>{saveButton()}}
             className="bg-green-500 my-2 text-xl float-right text-white px-4 py-2 rounded">Save</button>   
        </div>
    )
}