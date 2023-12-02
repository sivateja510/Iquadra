import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Watermark from "./Watermark";
const EditCons=()=>{

    const navigate = useNavigate();
//   useEffect(()=>{
//     if(!localStorage.getItem('Loginn'))
//       navigate('/')
//   })
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      // Check if 'view' key exists in local storage
      const storedData = localStorage.getItem('Loginn');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
        // console.log(parsedData.image);
      } else {
        window.alert("No data found in local storage");
      }
    };

    fetchData(); // Call the function inside useEffect

  }, []);
  const [usename, setusname] = useState('');
  const handlename = (e) => {
    // console.log(e.target.value)
    setusname(e.target.value);
  }
  const [emaill, usemail] = useState('');
  const handlemail = (e) => {
    // console.log(e.target.value)
    usemail(e.target.value);
  }
  const [numb, setnumb] = useState('');
  const handlenum = (e) => {
    // console.log(e.target.value)
    setnumb(e.target.value);
  }
  const [usedob, setdob] = useState('');
  const handledob = (e) => {
    // console.log(e.target.value)
    setdob(e.target.value);
  }
  
  
  const [addr, setaddr] = useState('');
  const handleaddr = (e) => {
    setaddr(e.target.value);
  }

  

  const userData = {
    name: JSON.parse(localStorage.getItem('edit')).name,
    mobile: numb,
    address: addr,
    dob: usedob,
    email:emaill
  };
  const [lofl, setLoffl] = useState(false);

  const regess = (e) => {
    console.log(userData);
    e.preventDefault();
    // setLoffl(true);
    axios.post('http://localhost:8090/Contacte', userData).then((response) => {
      console.log(response);
      setLoffl(true);

    })
      .catch((error) => {
        setLoffl(false);
        console.error('Error:', error);
      });
    console.log(userData);
  }
//   if (lof) {
//     navigate('/Profile');
//   }
  const[lulul,lull]=useState(false);
  const goback=()=>{
    lull(true);

  }
  if(lulul || lofl)
  {
    const se=localStorage.getItem('back');
    window.alert(se);
    navigate('/'+se);
  }

  return (
    <>
    <Watermark />
      <div className='profile-container'>
        <div className="nav-bar">
          {data && (
            <h1>Welcome, <span>{data.Name}</span></h1>
          )}
        </div>
        <div className="main-content">
          <h2 className='he'>Edit Conntact Details.</h2>
          {data && (
            <>
              <div className='content'>
                <div className="input-container">

                  <form>
                    
                    <div className="input">
                      <input type='text' required name="mail" value={emaill} onChange={handlemail} placeholder='Enter Email' />
                    </div>
                    <div className="input">
                      <input type='text' required maxLength={"10"} value={numb} onChange={handlenum} placeholder='Enter Your Mobile' />
                    </div>
                    
                    <div className="input">
                      <label>Date of Birth</label>
                      <input type='date' value={usedob} onChange={handledob} required name='dob' />
                    </div>
                    
                    <div className="input">
                      <textarea placeholder='Address' value={addr} onChange={handleaddr} cols={80} rows={5} />
                    </div>
                    <div className="input">
                      <button onClick={regess} > Submit </button>
                      <button onClick={goback} > Back </button>
                      
                    </div>
                  </form>
                </div>
              </div>
            </>)}

        </div>
      </div> 
    </>
  )
}

export default EditCons;
