import React, { useState } from 'react'
import './profilee.css'
// import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Watermark from './Watermark';
// import Nav from './Nav'
// import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(!localStorage.getItem('Loginn'))
  //     navigate('/')
  // })
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
  const [usepwd, setpwd] = useState('');
  const handlepwd = (e) => {
    // console.log(e.target.value)
    setpwd(e.target.value);
  }
  const [usedob, setdob] = useState('');
  const handledob = (e) => {
    // console.log(e.target.value)
    setdob(e.target.value);
  }
  const [emaill, setemail] = useState('');
  const handleemail = (e) => {
    // console.log(e.target.value)
    setemail(e.target.value);
  }
  const [numb, setnumb] = useState('');
  const handlenum = (e) => {
    // console.log(e.target.value)
    setnumb(e.target.value);
  }
  const [addr, setaddr] = useState('');
  const handleaddr = (e) => {
    // console.log(e.target.value)
    setaddr(e.target.value);
  }

  const [imag, setimag] = useState('');
  const handelpic = (e) => {
    // console.log(e.target.value)
    setimag(e.target.value);
  }

  const userData = {
    username: JSON.parse(localStorage.getItem('Loginn')).username,
    Password: usepwd,
    Mobile: numb,
    Address: addr,
    DOB: usedob,
    imr: imag
  };
  const [lof, setLoff] = useState(false);

  const reges = async (e) => {
    window.alert("updated sucessfully");
    // e.preventDefault();
    setLoff(true);
    axios.post('http://localhost:8090/Loginss', userData).then((response) => {
      console.log(response);
      setLoff(true);

    })
      .catch((error) => {
        setLoff(false);
        console.error('Error:', error);
      });
    console.log(userData);
  }
  if (lof) {
    navigate('/Profile');
  }
  const[lulu,lul]=useState(false);
  const goback=()=>{
    lul(true);

  }
  if(lulu)
  {
    navigate('/Profile')
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
          <h2 className='he'>Edit Profile Details.</h2>
          {data && (
            <>
              <div className='content'>
                <div className="input-container">

                  <form>
                    <div className="input">
                      <input type='password' required name="password" value={usepwd} onChange={handlepwd} placeholder='Enter Your Password' />
                    </div>
                    <div className="input">
                      <input type='text' required maxLength={"10"} value={numb} onChange={handlenum} placeholder='Enter Your Mobile' />
                    </div>
                    <div className="input">
                      <label>Date of Birth</label>
                      <input type='date' value={usedob} onChange={handledob} required name='dob' />
                    </div>
                    <div className="input">
                      <label>Upload Profile Picture Link</label>
                      <input type='text' value={imag} onChange={handelpic} />
                    </div>
                    <div className="input">
                      <textarea placeholder='Address' value={addr} onChange={handleaddr} cols={80} rows={5} />
                    </div>
                    <div className="input">
                      <button onClick={reges} > Submit </button>
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

export default Profile
