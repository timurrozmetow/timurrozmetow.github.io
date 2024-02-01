import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Cart = ({cart, setCart}) => {
  // console.log(cart);
  const incqty=(product)=>{
    const exist = cart.find((x) =>{
      return x.id === product.id
    })

    setCart(cart.map((curElm) =>{
      return curElm.id === product.id ? {...exist, qty: exist.qty +1 } : curElm
    }))
  }
  const decqty=(product)=>{
    const exist = cart.find((x) =>{
      return x.id === product.id
    })

    setCart(cart.map((curElm) =>{
      return curElm.id === product.id ? {...exist, qty: exist.qty - 1 } : curElm
    }))
  }

  const removeproduvt= (product)=>{
    const exist = cart.find((x) =>{
      return x.id === product.id
    })
    if(exist.qty > 0){
      setCart(cart.filter((curElm) =>{
        return curElm.id !== product.id
      }))
    }
  }
  const total= cart.reduce((price, item) => price + item.qty *item.price, 0)
  return (

    <>
    <div className='cart'>
    <h2>#cart</h2>
    {
        cart.length
        == 0  &&
        <>
        <div className='empty_cart'>
          <h3>Your shipping cart is empty</h3>
          <Link to='/shop'> <button>Shop Now</button>  </Link>
          
        </div>
        </> 
    }
    <div className='container'>
      {
        cart.map((curElm) => 
        {
          return(
            <>
              <div className='box'>
                  <div className='img_box'>
                      <img src={curElm.img} alt='goraydaa' />
                  </div>
                  <div className='detail'>
                    <div className='info'>
                  <h3>{curElm.cat}</h3>
                  <h4>{curElm.Name}</h4>
                  <p>Price: {curElm.price} TMT</p>
                  <p>Total : {curElm.price * curElm.qty} TMT</p>
                  </div>
                  <div className='quantity'>
                    <button onClick={()=> incqty (curElm)}>+</button>
                    <input type='number' value={curElm.qty} />
                    <button onClick={()=> decqty (curElm)}>-</button>
                  </div>
                  <div className='icon'>
                    <li onClick={() => removeproduvt(curElm)}><AiOutlineClose /></li>
                  </div>
                  </div>
              </div>
            </>
          )
        })
      }
    
    </div>
    <div className='bottom'>
      {
        cart.length > 0 &&
        <>
              <div className='Total'>
                <h4>Total: {total} TMT</h4>
              </div>

              <button>checkout</button>

        </>
      }

    </div>
    </div>
    </>
  )
}


export default Cart