import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Nav=()=>{
    const navigate=useNavigate();
    const [pro,setpro]=useState(false);
  const [log,setlog]=useState(false);
  const handelpro=(e)=>{
    setpro(true);
  }
  if(pro)
  {
    navigate('/Profile')
  }
  const logouttt=(e)=>{
    localStorage.removeItem('Loginn');
    setlog(true);
  }
  if(log)
  {
    navigate('/')
  }
    return(
        <div className="nav">
                <h1 className="head">Contact App</h1>
                <div className="navleft">
                    <p onClick={logouttt}>LogOut</p>
                    <p onClick={handelpro}>Profile</p>
                </div>
            </div>
    )
}
export default Nav;