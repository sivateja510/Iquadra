import React from "react";
import './home.css';
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./Nav";
import Watermark from "./Watermark";
import { useNavigate } from "react-router-dom";
import { FaUserFriends} from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
const Home = () => {
    const navigate = useNavigate();

    // useEffect(()=>{
    //     if(!localStorage.getItem('Loginn'))
    //       navigate('/')
    //   })
    const handlelogin = (data) => {
        navigate('/' + data);
    }

    const [search, setsearch] = useState("");
    const searchr = (e) => {
        // console.log(e.target.value)
        setsearch(e.target.value);
    }
    const [fin, setfin] = useState([]);
    const getd = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('entire'));
      
        if (data && data.length > 0 && search.length>1) {
        //   const filteredData = data.filter((item) =>
        //     item.name.toLowerCase().includes(search.toLowerCase())
        //   );
          const filtered = data.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.address.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase())
          );
      
        //   console.log(filteredData);
      
          // Update the state with the filtered data
          setfin(filtered);
        }
      };

    return (
        <div className="he">
            <Nav />
            <Watermark />
            <h1 className="he">Welcome</h1>
            <form>
                <input type="text" className="barr" value={search} onChange={searchr} placeholder="Enter name to search" />
                <button onClick={getd}>Search</button>
            </form>
            <div>
                {/* <h2>Filtered Data</h2> */}
                <ul>
                    {fin && fin.map((item, index) => (
                        <li key={index}>
                            <p>Name: {item.name},Number: {item.mobile},Place:{item.address}</p>
                            {/* <p>Number: {item.mobile}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="midiv">
                <div className='boxes' onClick={() => { handlelogin('Friends') }}>
                    <h1>Friends</h1>
                    <FaUserFriends className='large-icon' />
                </div>
                <div className='boxes' onClick={() => { handlelogin('Relatives') }}>
                    <h1>Relatives</h1>
                    
                    <MdFamilyRestroom  className='large-icon' />
                </div>
                <div className='boxes' onClick={() => { handlelogin('Office') }}>
                    <h1>Office</h1>
                    <GiOfficeChair className='large-icon' />
                </div>
                <div className='boxes' onClick={() => { handlelogin('Neighbours') }}>
                    <h1>Neighbours</h1>
                    <FaGroupArrowsRotate className='large-icon' />
                </div>
                <div className='boxes' onClick={() => { handlelogin('Business') }}>
                    <h1>Business</h1>
                    <FaBusinessTime  className='large-icon' />
                </div>
                <div className='boxes' onClick={() => { handlelogin('Task') }}>
                    <h1>TO-Do</h1>
                    <FaBusinessTime  className='large-icon' />
                </div>

            </div>
        </div>
    )
}
export default Home;