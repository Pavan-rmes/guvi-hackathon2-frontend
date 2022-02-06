import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import {API} from "../utility"


export function AdminLogin() {
  const history = useHistory()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errorMessg,setErrorMessg] = useState("")
  const [access,setAccess] = useState()
  
  function loginButton(){
    console.log("sign in clicked")
    localStorage.setItem("email",email)    
    history.push("/admin")
  }

  if(localStorage.getItem("email")){
    history.push("/admin")
  }
  return (
    <div className="mt-10 ml-96" style={{width:"500px"}}>
        <div className="ml-36 flex gap-x-10">
            <div onClick={()=>history.push("/admin/login")} className="hover:text-red-500 cursor-pointer font-medium text-xl">Admin</div>
            <div onClick={()=>history.push("/login")} className="hover:text-red-500 cursor-pointer font-medium text-xl">User</div>
        </div>

          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input onInput={(event)=>{setEmail(event.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="email" placeholder="Username" />
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input onInput={(event)=>{setPassword(event.target.value)}} class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
          <p class="text-red text-xs italic">Please choose a password.</p>
          <p style={{color:"red"}} >{errorMessg}</p>
        </div>
        
        <div class="flex items-center justify-between">
          <button onClick={()=>loginButton()} class="bg-blue-500 hover:bg-blue-dark-400 text-white font-bold py-2 px-4 rounded" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a>
        </div>
        </div>
    </div>
  );
}
