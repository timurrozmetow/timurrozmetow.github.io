import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'
const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError]= useState("")
    function logIn(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((user) =>{
            console.log(user)
            setEmail("")
            setPassword("")
            setError("")
        }).catch((error)=>{
            console.log(error)
            setError("Sorry onyaly adam yoga")
        });
    }
  return (
    <div>
        <form onSubmit={logIn}>
            <h2>Log in your Account</h2>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' required/>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password' required/>
            <button>Log In</button>
            {error ? <p>{error}</p> : ""}
        </form>

    </div>
  )
}

export default SignIn