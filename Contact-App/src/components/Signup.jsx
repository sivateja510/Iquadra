import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Watermark from './Watermark';
const Signup = () => {
    const navigate=useNavigate();
    const [log,setlog]=useState(false);
    const handleLogin=(e)=>{
        setlog(true);
    }
    if(log){
        navigate('/')
    }

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
        username: usename,
        password: usepwd,
        email: emaill,
        mobile:numb,
        address:addr,
        dob:usedob,
        imr:imag
    };
    const [lof,setLoff]=useState(false);

    const reges = (e) => {
        setLoff(true);
       
        window.alert(JSON.stringify(userData));
        if (!userData.username || !userData.password || !userData.email) {
            console.error('One or more fields are empty. Please fill in all required fields.');
            window.alert("empty detected");
            return; // Exit the function if any field is empty
        }
        
        axios.post('http://localhost:8090/Logins', userData).then((response) => {
            console.log(response);
            
        })
        .catch((error) => {
            setLoff(false);
            console.error('Error:', error);
        });

    }
    if(lof)
    {
        navigate('/');
    }

    return (
        <><Watermark />
        <div className='containers'>
            
            <div className='login-containers'>
                <div className='logins'>
                    <h1><i>i&nbsp;</i>Quadra.</h1>
                    <p>Please Create your Account</p>
                    <div className='input-containers'>
                        <form>
                            <div className="inputs">
                                <input type='text' required value={usename} onChange={handlename}placeholder='Enter Your Name' autoComplete='off' />
                            </div>

                            <div className="inputs">
                                <input type='email' required value={emaill} onChange={handleemail} placeholder='Enter Your Email' autoComplete='off' />
                            </div>
                            <div className="inputs">
                                <input type='password' required value={usepwd} onChange={handlepwd} placeholder='Enter Your Password' />
                            </div>
                            <div className="inputs">
                                <input type='text' required value={numb} onChange={handlenum} maxLength={"10"} placeholder='Enter Your Mobile' />
                            </div>
                            <div className="inputs">
                                {/* <label>Date of Birth</label> */}
                                <input type='date' required value={usedob} onChange={handledob}  />
                            </div>
                            <div className="inputs">
                                {/* <label>Upload Profile Picture Link</label> */}
                                <input type='text' required value={imag} onChange={handelpic} placeholder='Upload Profile Picture Link' />
                            </div>
                            <div className="inputs">
                                <textarea placeholder='Address' cols={45} rows={4} value={addr} onChange={handleaddr} />
                            </div>
                            <div className="inputs">
                                <input type='submit' value={"Create Account"} onClick={reges} />
                            </div>
                        </form>
                    </div>
                    <div className="ref-linkss">
                        <p onClick={handleLogin}>Already have an Account <a href='#'>Login</a></p>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}

export default Signup
