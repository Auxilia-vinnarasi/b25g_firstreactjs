import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import env from "./Settings";

function Register() {

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[confirmpassword,setConfirmpassword]=useState("");
    const history=useHistory();


    const handleSumbit=async(e)=>{
        e.preventDefault()
        console.log({username,password,confirmpassword})
      
       // alert("HI")
       try{
        await axios.post(`${env.api}/register`,{username,password})
        history.push("/login")
       }
       catch(error){
           console.log(error)
       }
    }
    return (
        <main class="form-signin text-center">
        <form onSubmit={(e)=>{handleSumbit(e)}}>
          <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
          <h1 class="h3 mb-3 fw-normal">Please Register</h1>
      
          <div class="form-floating">
            <input type="email" class="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control"value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword"> Confirm Password</label>
          </div>
      
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <input class="w-100 btn btn-lg btn-primary" type="submit" value="Sign Up"/>
          <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </main>
         
    )
}

export default Register
