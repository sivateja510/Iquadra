import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate();
    const [log,setlog]=useState(false);
    const handleLogin=(e)=>{
        setlog(true);
    }
    if(log){
        navigate('/')
    }
    return (
        <div className='containers'>
            <div className='login-containers'>
                <div className='logins'>
                    <h1><i>i&nbsp;</i>Quadra.</h1>
                    <p>Please Create your Account</p>
                    <div className='input-containers'>
                        <form>
                            <div className="inputs">
                                <input type='text' required name="name" placeholder='Enter Your Name' autoComplete='off' />
                            </div>

                            <div className="inputs">
                                <input type='email' required name="email" placeholder='Enter Your Email' autoComplete='off' />
                            </div>
                            <div className="inputs">
                                <input type='password' required name="password" placeholder='Enter Your Password' />
                            </div>
                            <div className="inputs">
                                <input type='text' required maxLength={"10"} placeholder='Enter Your Mobile' />
                            </div>
                            <div className="inputs">
                                <label>Date of Birth</label>
                                <input type='date' required name='dob' />
                            </div>
                            <div className="inputs">
                                <label>Upload Profile Picture</label>
                                <input type='file' />
                            </div>
                            <div className="inputs">
                                <textarea placeholder='Address' cols={45} rows={4} />
                            </div>
                            <div className="inputs">
                                <input type='submit' value={"Create Account"} />
                            </div>
                        </form>
                    </div>
                    <div className="ref-linkss">
                        <p onClick={handleLogin}>Already have an Account <a href='#'>Login</a></p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Signup
