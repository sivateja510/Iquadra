import React from 'react'
import './login.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Watermark from './Watermark';
const Login = () => {
    const [log, setlog] = useState(false);
    const [reg, setreg] = useState(false);
    const [usename, setusname] = useState('');
    const [usepwd, setpwd] = useState('');
    const navigate = useNavigate();
    // useEffect(()=>{
    //     if(!localStorage.getItem('Loginn'))
    //       navigate('/')
    //   })
    const [users, setUsers] = useState('');
    const handlechange = (e) => {
        // console.log(e.target.value)
        setusname(e.target.value);
    }
    const handlepwd = (e) => {
        // console.log(e.target.value)
        setpwd(e.target.value);
    }
    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:8090/Logins', {
                method: 'GET'
            });
            const result = await response.json();
            console.log(result);
            setUsers(result);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    const [friends, setFriends] = useState([]);
const [relatives, setRelatives] = useState([]);

const getFriendsData = async () => {
    try {
        const response = await fetch('http://localhost:8090/friends', {
            method: 'GET'
        });
        const result = await response.json();
        console.log(result);
        setFriends(result);
    } catch (error) {
        console.error(error);
    }
}

const getRelativesData = async () => {
    try {
        const response = await fetch('http://localhost:8090/relatives', {
            method: 'GET'
        });
        const result = await response.json();
        console.log(result);
        setRelatives(result);
    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    getFriendsData();
}, []);

useEffect(() => {
    getRelativesData();
}, []);
const [office, setOffice] = useState([]);
const [neighbours, setNeighbours] = useState([]);
const [business, setBusiness] = useState([]);

const getOfficeData = async () => {
    try {
        const response = await fetch('http://localhost:8090/office', {
            method: 'GET'
        });
        const result = await response.json();
        console.log(result);
        setOffice(result);
    } catch (error) {
        console.error(error);
    }
}

const getNeighboursData = async () => {
    try {
        const response = await fetch('http://localhost:8090/neighbours', {
            method: 'GET'
        });
        const result = await response.json();
        console.log(result);
        setNeighbours(result);
    } catch (error) {
        console.error(error);
    }
}

const getBusinessData = async () => {
    try {
        const response = await fetch('http://localhost:8090/business', {
            method: 'GET'
        });
        const result = await response.json();
        console.log(result);
        setBusiness(result);
    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    getOfficeData();
}, []);

useEffect(() => {
    getNeighboursData();
}, []);

useEffect(() => {
    // localStorage.clear();
    getBusinessData();
}, []);

// Combine the data
const combinedData = [...friends, ...relatives,...office, ...neighbours, ...business];
// localStorage.setItem("entire",JSON.stringify(combinedData));

    
    const handleLogin = (e) => {
        // e.preventDefault();
        setlog(true);
        const  userr=users.find((user)=>user.username === usename && user.Password === usepwd )
        console.log(users);
        if(userr=== undefined || userr==null )
        {
            window.alert("user not found");
            setlog(false);
            localStorage.removeItem('data');
        }
        else{
            localStorage.setItem('Loginn',JSON.stringify(userr));
            localStorage.setItem("entire",JSON.stringify(combinedData));
            window.alert(localStorage.getItem('data'));
            setlog(true);
        }
        
    }
    const handleReg = (e) => {
        // e.preventDefault();
        setreg(true);
        
    }
    if (log) {
        navigate('/Home');
    }
    if (reg) {
        navigate('/Signup');
    }
    return (
        <>
        <Watermark />
        <div className='container'>
            <div className='login-container'>
                <div className='login'>
                    <h1><i>i&nbsp;</i>Quadra.</h1>
                    <p>Please Login to your Account</p>
                    <div className='input-container'>
                        <form>
                            <div className="input">
                                <input type='email' name="email" onChange={handlechange} placeholder='Enter Your Email' autoComplete='off'/>
                            </div>
                            <div className="input">
                                <input type='password'  name="password" onChange={handlepwd} placeholder='Enter Your Password' autoComplete='off'/>
                            </div>
                            <div className="input">
                                <input type='submit' value={"Login"} onClick={handleLogin} />
                            </div>
                        </form>
                    </div>
                    <div className="ref-links">
                        <p onClick={handleReg}>Don't You Have An Account <a href='#'>Sign Up</a></p>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}

export default Login
