import React, { useState } from 'react'
import './shop.css'
import { AiFillEye, AiFillHeart, AiOutlineClose } from 'react-icons/ai'


const Shop = ({shop, Filter, allCateFilter, addtoCart, detail ,detailPage ,closedetail ,showDetail}) => {

    // const [showDetail,setShowDeatil] =useState(false)
    // const [detail, setDetail]= useState([])

    // const detailPage = (product) =>{

    //     const detailData = ([{product}])
    //     const productdetail = detailData[0]['product']

    //     setDetail(productdetail)


    //     setShowDeatil(true)

    // }
    // const closedetail =()=>{
    //     setShowDeatil(false)

    // }

  return (
    <>
    {
        showDetail ?
        <>
            <div className='product_detail'>
                <button className='close_btn' onClick={closedetail}>
                    <AiOutlineClose />
                </button>
                <div className='container'>
                    <div className='img_box'>
                        <img src={detail.img} alt='gorayda'/>
                    </div>
                    <div className='info'>
                        <h2># {detail.cat}</h2>
                        <h3>{detail.Name}</h3>
                        <p>slckvnsd djcsdlkv sdsdhviosd vod vdovihsdvi dviodvio idvsdovsd pvdv sdhvsd</p>
                        <h4>{detail.price} TMT</h4>

                        <button className='btn' onClick={() => addtoCart(detail)}>Add to Cart</button>

                    </div>
                </div>
            </div>
        </>
        :null
    }

    
    <div className='shop'>
        <h1>#shop</h1>
        <p className='Home_shop'>Home .shop</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h2>All category</h2>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={()=> allCateFilter()}>#All</li>
                            <li onClick={()=> Filter ("Gyzyl_Yuzuk")}>#Gyzyl Yuzukler</li>
                            <li onClick={()=> Filter ("Kupe")}>#Gulak Halkalar</li>
                            <li onClick={()=> Filter ("yuzuk")}>#Yuzuk</li>
                            <li onClick={()=> Filter ("halka")}>#halka</li>
                            <li onClick={()=> Filter ("broska")}>#broska</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='img/3.webp' alt='goreayda' />
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                    <img src='img/2.png'  alt='bet surat'/>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>Shop Product</h2>
                    <div className='product_container'>
                        {
                            
                                shop.map((curElm) =>{
                                    return(
                                    <div className='box'>
                                    <div className='img_box'>
                                        <img src={curElm.img} alt='galeru' />
                                        <div className='icon'>
                                        <div className='icon_box' onClick={()=>detailPage(curElm)}>
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

                                    )   
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop