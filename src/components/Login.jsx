import React, { useEffect } from 'react'
import './Login.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //for normal form data
    const [arr, setArr] = useState([])

    // useEffect(() => { console.log(arr) }, [arr])

    const navigate = useNavigate()
    function formValidation(e) {

        var obj = {
            email: email,
            password: password
        }
        // console.log(obj)
        e.preventDefault();
        let result = true

        if (email.length === 0) {
            document.getElementById('email').innerHTML = "email cannot be empty"
            result = false
        }
        else if (email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            document.getElementById('email').innerHTML = ""
        }
        else {
            document.getElementById('email').innerHTML = 'invalid email'
            result = false
        }
        //password
        if (password.length === 0) {
            document.getElementById('pass').innerHTML = "password cannot be empty"
            result = false
        }
        else if (password.length < 4) {
            document.getElementById('pass').innerHTML = "password too small"
            result = false
        }
        else {
            document.getElementById('pass').innerHTML = ""
        }

        if (result) {
            // for normal form 
            setArr([...arr, obj])

        }
        setEmail('')
        setPassword('')

        //authentification
        let storedFormData = JSON.parse(localStorage.getItem('obj'))
        let data_check = storedFormData.filter((data, j) => {
            return data.email === obj.email && data.password === obj.password
        })
        console.log(data_check)
        if (data_check.length === 0) {
            alert('Login failed')
        }
        else {
            alert("login success")
            navigate("/")
            localStorage.setItem('loggedin', true)
        }

    }
    return (
        <div>

            <div className='login'>
                <div className='login_top'>
                    <h1>Sign In</h1>
                </div>
                <div className='login_bottom'>
                    <div className='login_bottom_left'>
                        <br></br>
                        <form onSubmit={formValidation}>
                            <p>Email Address</p>
                            <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} name='email' />
                            <p id='email'></p>
                            <br></br><br></br>
                            <p>Password</p>
                            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} name='password' />
                            <p id='pass'></p>
                            <br></br>
                            <input className='signin_btn' type='submit' value='Sign In' />
                        </form>
                    </div>
                    <div className='login_bottom_right'>
                        <div className='login_bottom_right_txt'>
                            <h4>New customer?</h4>
                            <br></br>
                            <p>Create an account with us and you'll be able to:</p>
                            <ul>

                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Access your order history
                                </li>
                                <li>Track new orders</li>
                            </ul>
                            <Link to='/signup'><button className='signup_btn'>Create account</button></Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
