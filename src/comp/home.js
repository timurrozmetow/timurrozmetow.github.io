import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import {AiFillEye, AiFillHeart} from 'react-icons/ai'
import { Routes, Route } from 'react-router'



const Home = ({addtoCart}) => {
    const[trendingProduct, setTrendingProduct] = useState(Homeproduct)
    const filtercate =(x) =>{
        const filterproduct = Homeproduct.filter((curElm) =>{
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }
    const allTrendingProduct =()=>{
        setTrendingProduct(Homeproduct)
    }
  return (
    
    

    <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                <p>Silver aluminum</p>                
                <h1>Apple Watch</h1>                
                <p>30% off at your first order</p>   
                <Link to='/shop' className='link'>Shop now</Link>             
            </div>
    </div>
    
      <div className='trending'>
        <div className='container'>
            <div className='left_box'>
                <div className='header'>
                    <div className='heading'>
                    <h2>trending product</h2>
                    </div>
                    <div className='cate'>
                        <p onClick={() => allTrendingProduct()}>All</p>
                        <p onClick={() => filtercate('new')}>New</p>
                        <p onClick={() => filtercate('featured')}>Featured</p>
                        <p onClick={() => filtercate('top')}>Top Selling</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='container'>
                    {
                        trendingProduct.map((curElm) =>{
                            return(
                                <>
                                <div className='box'>
                                    <div className='img_box'>
                                        <img src={curElm.img} alt='galeru' />
                                        <div className='icon'>
                                        <div className='icon_box'>
                                            <AiFillEye />
                                        </div>
                                        <div className='icon_box'>
                                            <AiFillHeart />
                                        </div>
                                        </div>
                                    </div>
                                    <div className='info'>
                                        <h3>{curElm.Name}</h3>
                                        <p>{curElm.price} TMT</p>
                                        <button className='btn' onClick={() => addtoCart(curElm)}>Add to Cart</button>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                    </div>
                    <div className='forBtn'>
                    <button>Show More</button>
                    </div>
                </div>
            </div>
            {/* gerek bolsa sag tarapdan aside menu edip bolya manysyz gordum shon un edemok */}
        </div>
    </div>
    <div className='banners'>
        <div className='container'>
            <div className='left_box'>
                <div className='box'>
                    <img src='img/3.webp' alt='logo' />
                </div>
                <div className='box'>
                    <img src='img/3.webp' alt='logo' />
                </div>
            </div>
            <div className='right_box'>
                <div className='top'>
                <img src='img/2.png' alt='logo' />
                <img src='img/2.png' alt='logo' />
                </div>
                <div className='bottom'>
                <img src='img/2.png' alt='logo' />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home