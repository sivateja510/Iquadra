
import React from "react";
import Tab from "./Tab";
import Nav from "./Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Neighbours=()=>{
    const navigate=useNavigate();
    // useEffect(()=>{
    //     if(!localStorage.getItem('Loginn'))
    //       navigate('/')
    //   })
    return(
        <>
        <Nav/>
        <Tab top={"neighbours"}/>
        </>
    )
}
export default Neighbours;