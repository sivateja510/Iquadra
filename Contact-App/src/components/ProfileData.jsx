import React from 'react'
import './profiledata.css'
import Nav from './Nav'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import img from '../assets/download.png'
import Watermark from './Watermark'
const ProfileData = () => {
    const navigate = useNavigate();
    // useEffect(()=>{
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
                console.log(parsedData.image);
            } else {
                window.alert("No data found in local storage");
            }
        };

        fetchData(); // Call the function inside useEffect

    }, []);
    const [bacs, setbacs] = useState(false);
    const backk = (e) => {
        setbacs(true);
    }
    if (bacs) {
        navigate('/Home')
    }
    const [ed, seted] = useState(false);
    const editt = (e) => {
        seted(true);
    }
    if (ed) {
        navigate('/Editpro')
    }
    // editt
    



    return (
        <>
            <Nav />
            <Watermark />
            <div className='wrapper'>
                <div className="nav-bar">
                    <h1>Welcome, <span>Siva Teja</span></h1>
                </div>
                <div className="profile-content">
                    <h2 className='he'>My Profile</h2><br />
                    <div className="content">
                        {data && (
                            <>
                                <div className="left">
                                    <div className="item">
                                        <h2>Name:&nbsp;<span>{data.Name}</span></h2>
                                    </div>
                                    <div className="item">
                                        <h2>Email Address:&nbsp;<span>{data.username}</span></h2>
                                    </div>
                                    <div className="item">
                                        <h2>Mobile:&nbsp;<span>{data.Mobile}</span></h2>
                                    </div>
                                    <div className="item">
                                        <h2>Gender:&nbsp;<span>Male</span></h2>
                                    </div>
                                    <div className="item">
                                        <h2>Married:&nbsp;<span>Yes</span></h2>
                                    </div>
                                    <div className="item">
                                        <h2>Date Of Birth:&nbsp;<span>{data.DOB}</span></h2>
                                    </div>
                                    <div className="item">
                                        <h2>Address:&nbsp;<span>{data.Address}</span></h2>
                                    </div>

                                </div>
                                <div className="right">
                                    {/* <p>{data.image}</p> */}
                                    <img className='profile-image' alt='profile Image' src={data.imr} />

                                </div>

                            </>
                        )}
                    </div>
                </div>
                <button onClick={backk}>Back</button>
                        <button onClick={editt}>Edit Profile</button>
            </div>
        </>
    )
}

export default ProfileData
