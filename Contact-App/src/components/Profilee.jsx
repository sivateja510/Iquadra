import React, { useState } from 'react'
import './profilee.css'
// import Nav from './Nav'
// import { useNavigate } from 'react-router-dom';

const Profile = () => {
  
  return (
    <>
       <div className='profile-container'>
      <div className="nav-bar">
        <h1>Welcome, <span>Siva Teja</span></h1>
      </div>
      <div className="main-content">
        <h2 className='he'>Edit Profile Details.</h2>
        <div className='content'>
         <div className="input-container">
         <form>
            <div className="input">
              <input type='text' required name="name" placeholder='Enter Your Name' autoComplete='off' />
            </div>

            <div className="input">
              <input type='email' required name="email" placeholder='Enter Your Email' autoComplete='off' />
            </div>
            <div className="input">
              <input type='password' required name="password" placeholder='Enter Your Password' />
            </div>
            <div className="input">
              <input type='text' required maxLength={"10"} placeholder='Enter Your Mobile' />
            </div>
            <div className="input">
              <label>Date of Birth</label>
              <input type='date' required name='dob' />
            </div>
            <div className="input">
              <label>Upload Profile Picture</label>
              <input type='file' />
            </div>
            <div className="input">
              <textarea placeholder='Address' cols={80} rows={5} />
            </div>
            <div className="input">
              <input type='submit' value={"Update Data"} />
            </div>
          </form>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
