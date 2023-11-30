import React from "react";
import Tab from "./Tab";
import Nav from './Nav';
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const Friends =()=>{
    // const navigate=useNavigate();
    return(
        <>
        {/* <p>Helo</p> */}
        <Nav/>
        <Tab top={"friends"} />
        </>
    )
}
export default Friends;