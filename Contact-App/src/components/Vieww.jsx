import React from "react";
import Nav from "./Nav";
import'./viewww.css'
;import { useState } from "react";
const Vieww =()=>{
    // const [data,setdata]=useState("");
    if(localStorage.getItem('view')==null)
    {
        window.alert("dataa");
    }
    else{
        const dataa=JSON.parse(localStorage.getItem('view'));
        console.log(dataa);
        // setdata(dataa);
    }
    return(
        <>
        <Nav/>
        {/* <p>hello</p> */}
        <div className="dataaa">
        <p>Name:John</p>
        <p>Mobile:7660917546</p>
        <p>Place:Kakinada</p>
        <p>DOB:04-06-2012</p>
        <p>Email:John@gmail.com</p>
        </div>
        </>
    )
}
export default Vieww;