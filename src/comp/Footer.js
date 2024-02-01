import React from 'react'
import './footer.css'
import {FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        < FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>lorem ckjsdcs dcsdcd vfbvfdv</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        < FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Get money back</h3>

                        <p>lorem ckjsdcs dcsdcd vfbvfdv</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        < FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                    <h3>24x7</h3>
                        <p>lorem ckjsdcs dcsdcd vfbvfdv</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        < FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>Get money back</h3>
                        <p>lorem ckjsdcs dcsdcd vfbvfdv</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <div className='center'>
                    <img alt='logotype' src='img/logo.svg' />
                    </div>
                    <p>cdkbsckdc kcjnsdcn dchsdcjsd cdlicjsd lcsdlijcsd cdlichdil csdcd cdjch dc dckusdch d</p>

                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Product</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Order</li>
                            <li>New Product</li>
                            <li>Old Product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Contact US</h3>
                        <ul>
                            <li>Bla bla bla street</li>
                            <li>+993-60-00-00-00</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Footer