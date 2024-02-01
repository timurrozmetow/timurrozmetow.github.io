import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
import Contact from './contact'
const Rout = ({shop, Filter,allCateFilter, addtoCart, cart, setCart, detail, closedetail, showDetail, detailPage}) => {
  return (
    <>
    <Routes>
      
        <Route path='/' element={<Home addtoCart={addtoCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='shop' element={<Shop detail={detail} closedetail={closedetail} showDetail={showDetail} detailPage={detailPage} shop={shop} Filter={Filter} allCateFilter={allCateFilter}  addtoCart={addtoCart} />} />
        <Route path='/contact' element={<Contact />} />


    </Routes>
    </>
  )
}

export default Rout