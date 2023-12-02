import React from "react";
import Tab from "./Tab";
import Nav from "./Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Office=()=>{
    const navigate=useNavigate();
    // useEffect(()=>{
    //     if(!localStorage.getItem('Loginn'))
    //       navigate('/')
    //   })
    return(
        <>
        <Nav/>
        <Tab top={"office"}/>
        </>
    )
}
export default Office;