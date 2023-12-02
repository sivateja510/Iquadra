import React from "react";
import Nav from "./Nav";
import './viewww.css'
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Vieww = () => {
    // const [data,setdata]=useState("");
    const [data, setData] = useState(null);
    const navigate=useNavigate();
    useEffect(() => {
        const fetchData = () => {
            // Check if 'view' key exists in local storage
            const storedData = localStorage.getItem('view');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setData(parsedData);
            } else {
                window.alert("No data found in local storage");
            }
        };

        fetchData(); // Call the function inside useEffect

    }, []);

    const[bac,setbac]=useState(false);
    const back=()=>{
        setbac(true);
    }
    const [bacc, setbacc] = useState(null);

    if(bac){

        const s=localStorage.getItem('back');
        if(s)
        {
            localStorage.removeItem('back');
            localStorage.removeItem('view');
            navigate('/'+s);
        }
        
    }
    return (
        <>
            <Nav />
            {/* <p>hello</p> */}
            <div className="mai">
                <div className="dataaa">
                    {data && (
                        <>
                            <p><strong>Name:</strong> {data.name}</p>
                            <p><strong>Mobile:</strong> {data.mobile}</p>
                            <p><strong>Place:</strong> {data.address}</p>
                            <p><strong>DOB:</strong> {data.dob}</p>
                            <p><strong>Email:</strong> {data.email}</p>
                        </>
                    )}
                </div>
                <button onClick={back}> Back </button>
            </div>

        </>
    )
}
export default Vieww;