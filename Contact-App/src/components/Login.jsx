import React from 'react'
import './login.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [log, setlog] = useState(false);
    const [reg, setreg] = useState(false);
    const [usename, setusname] = useState('');
    const [usepwd, setpwd] = useState('');
    const navigate = useNavigate();
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
            localStorage.setItem('data',JSON.stringify(userr));
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
    )
}

export default Login
