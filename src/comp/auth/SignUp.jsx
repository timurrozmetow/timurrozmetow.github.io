import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [copyPassword, setcopyPassword] = useState("")
    const [error, setError]= useState("")
    function register(e){
        e.preventDefault()
        if( password !== copyPassword){
            setError("Password den dal")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) =>{
            console.log(user)
            setEmail("")
            setPassword("")
            setcopyPassword("")
            setError("")
        }).catch((error)=>console.log(error));
    }
  return (
    <div>
        <form onSubmit={register}>
            <h2>Create Account</h2>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' required/>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password' required/>
            <input value={copyPassword} onChange={(e)=> setcopyPassword(e.target.value)} type='password' placeholder='Confirm Password' required/>
            <button>Create</button>
            {error ? <p>{error}</p> : ""}

        </form>

    </div>
  )
}

export default SignUp