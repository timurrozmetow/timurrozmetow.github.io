import React, { useState } from 'react'
import Nav from './comp/Nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/Footer'
import Homeproduct from './comp/home_product'

const App = () => {
  const [cart, setCart] = useState([])
  const [shop, setShop] =useState(Homeproduct)
  const [search, setSearch] =useState('')
  const Filter =(x)=>{
    const cateFilter =Homeproduct.filter((product) =>{
      return product.cat === x
    })
    setShop(cateFilter)
  }
  const allCateFilter =()=>{
    setShop(Homeproduct)
}
const searchlenght=( search || []).length === 0
const searchProduct =()=>{
if(searchlenght){
  alert("please search another")
  setShop(Homeproduct)
}else{
  
    const searchFilter = Homeproduct.filter((x) =>{
      return x.cat === search
    })
    setShop(searchFilter)
}
}

const addtoCart = (product) =>{
  const exist = cart.find((x)=>{
    return x.id === product.id
  })
  if(exist){
    alert('cs')
  }else{
    setCart([...cart, {...product, qty:1}])
    // alert('added')
  }
  
}


// for Shop view
const [showDetail,setShowDeatil] =useState(false)
const [detail, setDetail]= useState([])

const detailPage = (product) =>{
  
    const detailData = ([{product}])
    const productdetail = detailData[0]['product']

    setDetail(productdetail)


    setShowDeatil(true)

}
const closedetail =()=>{
    setShowDeatil(false)

}
  return (
    <BrowserRouter >
    <Nav search={search} setSearch={setSearch} searchProduct={searchProduct}  />
    <Rout detail={detail} closedetail={closedetail} showDetail={showDetail} detailPage={detailPage} setCart={setCart} cart={cart} shop={shop} Filter={Filter} allCateFilter={allCateFilter}  addtoCart={addtoCart} />
    <Footer />
    </BrowserRouter>
  )
}

export default App