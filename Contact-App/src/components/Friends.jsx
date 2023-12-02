import React from "react";
import Tab from "./Tab";
import Nav from './Nav';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Friends =()=>{
    // const navigate=useNavigate();
    const navigate=useNavigate();
    // useEffect(()=>{
    //     if(!localStorage.getItem('Loginn'))
    //       navigate('/')
    //   })
    return(
        <>
        {/* <p>Helo</p> */}
        <Nav/>
        <Tab top={"friends"} />
        </>
    )
}
export default Friends;