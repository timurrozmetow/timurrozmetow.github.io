import React, {useEffect, useState} from 'react'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from '../../firebase';

const AuthDetail = () => {
    const [authUser,SetAuthUser]=useState(null)
        useEffect(() => {
            const listen = onAuthStateChanged(auth , (user)=>{
                if(user){
                    SetAuthUser(user)
                }else{
                    SetAuthUser(null)
                }
            });
            return()=>{
                listen()
            }
        }, []);
        function UserSignOut(){
            signOut(auth)
                .then(()=> console.log('urra!'))
            .catch((e)=> console.log(e))
        }
    return (
        <div>
            {authUser ? (
                <div><p>{`Sing in as ${authUser.email}`}</p>
                <button onClick={UserSignOut}>Sign Out</button>
                </div>
            ):
            <p>Sugned Out</p>}
        </div>
    
  )
}

export default AuthDetail