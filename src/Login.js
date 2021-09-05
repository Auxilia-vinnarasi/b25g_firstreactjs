import React, { useState } from 'react';
import "./Login.css";
import env from "./Settings";
import axios from 'axios';


function Login() {

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");


const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
   let logindata= await axios.post(`${env.api}/login`,{username,password})
console.log(logindata)
alert(logindata.data.message);
    }
    catch(error){
        console.log(error);
    }
}
    return (
      
<main class="form-signin text-center">
  <form onSubmit={handleSubmit}>
    <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" value={username} onChange={(e)=>setUsername(e.target.value)} class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <input class="w-100 btn btn-lg btn-primary" type="submit" value="Sign In"/>
    <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
  </form>
</main>
   
    )
}

export default Login
