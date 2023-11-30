import React from "react";
import './home.css';
import { useState } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { FaMegaport, FaLaptop, FaKey, FaFreeCodeCamp, FaLayerGroup, FaNotesMedical } from "react-icons/fa";
const Home = () => {
    const navigate=useNavigate(); 
  
  const handlelogin=(data)=>{
    navigate('/'+data);
}
    return (
        <div >
            <Nav/>
            <h1 className="he">Welcome</h1>
            <div className="midiv">
                <div className='boxes' onClick={()=>{handlelogin('Friends')}}>
                    <h1>Friends</h1>
                    <FaMegaport className='large-icon'/>
                </div>
                <div className='boxes' onClick={()=>{handlelogin('Relatives')}}>
                    <h1>Relatives</h1>
                    <FaMegaport className='large-icon'/>
                </div>
                <div className='boxes' onClick={()=>{handlelogin('Office')}}>
                    <h1>Office</h1>
                    <FaMegaport className='large-icon'/>
                </div>
                <div className='boxes' onClick={()=>{handlelogin('Neighbours')}}>
                    <h1>Neighbours</h1>
                    <FaMegaport className='large-icon'/>
                </div>
                <div className='boxes' onClick={()=>{handlelogin('Business')}}>
                    <h1>Business</h1>
                    <FaMegaport className='large-icon'/>
                </div>

            </div>
        </div>
    )
}
export default Home;