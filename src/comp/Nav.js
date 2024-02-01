import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {MdLocalShipping} from "react-icons/md";
import {AiOutlineSearch} from "react-icons/ai";
import { Routes, Route } from 'react-router'

import {FiLogIn} from "react-icons/fi";
import {CiLogout} from "react-icons/ci";
import {CiUser} from "react-icons/ci";
import {Link} from "react-router-dom"

import './nav.css'




const Nav = ({search,setSearch, searchProduct}) => {
    const { loginWithRedirect, logout , user, isAuthenticated } = useAuth0();
  return ( 
    
    <div className='header'>
        <div className='header_top'>
            <div className='icon'>
                <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Free Dostawka +1000 TMT</p>
            </div>
        </div>
        <div className='mid_header'>
            <div className='logo'>
                <img src='img/logo.svg' alt='logo' />
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search...' onChange={(e)=> setSearch(e.target.value)} />
                <button onClick={searchProduct}> <AiOutlineSearch /> </button>
            </div>


            
            {
                isAuthenticated ? 
                <div className='user'>
                <div className='iconLogIn'>
                    <CiLogout />
                </div>
                <div className='btn'>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            </div>
            :
            <div className='user'>
            <div className='iconLogIn'>
                <FiLogIn />
            </div>
            <div className='btn'>
                <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
            </div>
            }
        </div>
        <div className='last_header'>
            <div className='user_profile'>
                {
                    
                    isAuthenticated ?
                    <>
                    <div className='icon_user'>
                        <CiUser />
                    </div>
                    <div className='info'>
                    <p>{user.name}</p>
                    <small>{user.email}</small>
                    </div>
                    </>
                    :
                    <>
                    <div className='icon_user'>
                        <CiUser />
                    </div>
                    <div className='info'>
                    <p>Please Login</p>
                    </div>
                    </>
                }
            </div>
            <div className='nav' >
                <ul>
                    <li> <Link to='/' className='link' >Home </Link></li>
                    <li> <Link to='/shop' className='link' >Shop </Link></li>
                    <li> <Link to='/cart' className='link' >Cart </Link></li>
                    <li> <Link to='/about' className='link' >About </Link></li>
                    <li> <Link to='/contact' className='link' >Contact</Link></li>
                </ul>
            </div>
            <div className='offer' >
                <p>flat 10% over all</p>
            </div>
        </div>
    </div>
  )
}

export default Nav