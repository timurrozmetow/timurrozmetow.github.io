import React, { useState } from 'react'
import './contact.css'
const Contact = () => {

  const[user, setUSer] = useState(
    {
      Name: '', email: '', subject: '', Message: ''
    }
  )
  let values,names
  const data = (e) =>
  {
    values = e.target.value
    names= e.target.name
    setUSer({...user, [names]:values})
  }

  const send = async (e) =>{
    const {Name, email,  subject, Message} =user
    e.preventDefault()
    const option={
      method: 'POST',
      headers:{
        'Content-type': 'aplication/json'
      },
      body : JSON.stringify({
        Name, email,  subject, Message
      })
    }
    const send = await fetch(
      'https://data-91205-default-rtdb.firebaseio.com/Message.json',option
      )
      if (send){
        alert("Message Sended")
      }
      else{
        alert("bolonok")
      }
  }
  return (
    <>
    <div className='contact'>
      <div className='container'>
        <form method='POST'>
        <h2>#Contact US</h2>

          <div className='box'>
            <div className='lable'>
              <h4>Name</h4>
            </div>
            <input type='text' placeholder='Name' value={user.Name} name='Name'  onChange={data}/>
          </div>
          <div className='box'>
            <div className='lable'>
              <h4>E-mail</h4>
            </div>
            <input type='text' placeholder='E-mail' value={user.email} name='email'  onChange={data}/>
          </div>
          <div className='box'>
            <div className='lable'>
              <h4>Subject</h4>
            </div>
            <input type='text' placeholder='Subject' value={user.subject} name='subject'  onChange={data}/>
          </div>
          <div className='box'>
            <div className='lable'>
              <h4>Message</h4>
            </div>
            <textarea placeholder='Message' value={user.Message} name='Message' onChange={data} ></textarea>
          </div>
          <button className='btn' onClick={send} type='submit'>Send</button>
        </form>
      </div>
    </div>
    </>
    )
}

export default Contact