import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { API } from "../utility"


export function Seating(){
    const [data,setData] = useState([])
    const [theatreData,setTheatreData] = useState([])
    const {id} = useParams()
    const location = useLocation()
    console.log(location.state)
    // let data =[]
    useEffect(()=>{
        axios.get(`${API}/movies/${id}`)
        .then((response)=>response.data)
        .then((movie)=>movie?.theater?.filter((th)=>th?.name === location.state.theatorname))
        .then(theaterdata=>{setData((theaterdata[0]?.timings?.filter((time)=>time?.time === location.state.time)));setTheatreData(theaterdata)})
        // .then((movie)=>movie?.theater?.filter((th)=>th?.name === location.state.theatorname))
        // .the((theaterdata)=>setData(theaterdata[0]?.timings?.filter((time)=>time?.time === location.state.time)[0].seating))
    },[])

    console.log(data)
    data[0]?.seating?.sort((a,b)=> (a.row.charCodeAt(0) - b.row.charCodeAt(0)))
    
    return(
        <div className=" ml-4 mr-4 mt-48 md:ml-96 md:mt-20">
            <div className="ml-64 mb-10">Screen</div>
            {data[0]?.seating.map((row,index)=>(<SeatRows location={location} movieId = {id} theatreData={theatreData} key={index} rowid ={index} row={row} />))}
            <div className="ml-96 mt-20">
                <button className="bg-green-500 text-white p-2 rounded">checkout</button>
            </div>
        </div>
    )
}

function SeatRows({rowid,row,data,movieId,theatreData,location}){
    
    row?.seats.sort((a,b)=>(a.no-b.no))
    return(
        <div className="">
        <p className="px-2 absolute">{row?.row} </p>
        <div className="flex gap-x-4 ml-20 my-2">
            {row.seats.map((seat,id)=>(<SeatNo key={id} id={id} movieId={movieId} rowid={rowid} theatreData={theatreData} seat={seat} data={data} location={location} />))}
        </div>
        </div>
    )
}

function SeatNo({seat,id,data,theatreData,location,movieId,rowid}){
    const [seatData,setSeatData] = useState(seat)
    const [isseatSelect,setSeatSelect] = useState(false)
    // const [theatre,setTheatre] =useState(theatreData)
   function blocktheSeat(){
       let time = location.state.time
       let theatrename = location.state.theatorname
        const data = theatreData[0].timings.filter((time)=>time?.time === location.state.time)
        if(!data[0].seating[rowid].seats[id].blocked){
            axios.put(`${API}/movies/${movieId}`,{
                movieId,
                seatingid:id,
                rowid,
                showTime:time,
                theatrename:theatrename

            })
            console.log(time,data[0].seating[rowid].seats[id].status)
        }
        
   }
    return(
        <div
        onClick={()=>{if(!seat.status){setSeatSelect(!isseatSelect)};blocktheSeat()}}
         className=
         {`${id===4?"mr-8":""} border border-green-500 rounded-sm ${seat.status?"bg-green-500 text-white":""} 
         text-green-500 px-2
         ${isseatSelect?"bg-green-500 text-white":""}
         ${seat.blocked?"bg-gray-400 text-gray-300 border-gray-400":"hover:text-white cursor-pointer hover:bg-green-500"}`}>{seat.no}</div>

    )
}