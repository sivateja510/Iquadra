import React from 'react'
import './profiledata.css'
import Nav from './Nav'
// import img from '../assets/download.png'

const ProfileData = () => {
    return (
        <>
        <Nav/>
        
        <div className='wrapper'>
            <div className="nav-bar">
                <h1>Welcome, <span>Siva Teja</span></h1>
            </div>
            <div className="profile-content">
                <h2 className='he'>My Profile</h2><br />
                <div className="content">

                    <div className="left">
                        <div className="item">
                            <h2>Name:&nbsp;<span>Siva Teja B</span></h2>
                        </div>
                        <div className="item">
                            <h2>Email Address:&nbsp;<span>siva@gmail.com</span></h2>
                        </div>
                        <div className="item">
                            <h2>Mobile:&nbsp;<span>8786887668</span></h2>
                        </div>
                        <div className="item">
                            <h2>Gender:&nbsp;<span>Male</span></h2>
                        </div>
                        <div className="item">
                            <h2>Married:&nbsp;<span>Yes</span></h2>
                        </div>
                        <div className="item">
                            <h2>Date Of Birth:&nbsp;<span>20-10-1990</span></h2>
                        </div>
                        <div className="item">
                            <h2>Address:&nbsp;<span>On earth,I dont know the exact place where hero lives</span></h2>
                        </div>

                    </div>
                    <div className="right">
                        {/* <img className='profile-image' alt='profile Image' src={img} /> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfileData
