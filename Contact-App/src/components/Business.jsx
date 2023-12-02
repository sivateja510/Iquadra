import React from "react";
import Tab from "./Tab";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Business=()=>{
    const navigate=useNavigate();
    // useEffect(()=>{
    //     if(!localStorage.getItem('Loginn'))
    //       navigate('/')
    //   })
    return(
        <>
        <Nav/>
        <Tab top={"business"}/>
        </>
    )
}
export default Business;