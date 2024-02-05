import React, { useEffect, useState } from 'react'
import './Signup.css'
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [country, setCountry] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [add1, setAdd1] = useState('')
    const [add2, setAdd2] = useState('')
    const [cname, setCname] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [code, setCode] = useState('')
    const [number, setNumber] = useState('')
    const [arr, setArr] = useState([])
    //useeffect to not return empty array 
    useEffect(() => { console.log(arr) }, [arr])
    function Validate(e) {

        let obj = {
            email: email,
            password: password,
            cpassword: cpassword,
            country: country,
            fname: fname,
            lname: lname,
            add1: add1,
            add2: add2,
            cname: cname,
            city: city,
            state: state,
            code: code,
            number: number
        };
        e.preventDefault();
        let result = true;

        //email
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
            document.getElementById('password').innerHTML = "password cannot be empty"
            result = false
        }
        else if (password.length < 4) {
            document.getElementById('password').innerHTML = "password too small"
            result = false
        }
        else {
            document.getElementById('password').innerHTML = ""
        }

        //cpassword
        if (cpassword.length === 0) {
            document.getElementById('cpassword').innerHTML = "password cannot be empty"
            result = false
        }
        else if (cpassword === password) {
            document.getElementById('cpassword').innerHTML = ""
        }
        else {
            document.getElementById('cpassword').innerHTML = "password did not match"
            result = false
        }
        //first name
        if (fname.length === 0) {
            document.getElementById('fname').innerHTML = "first name cannot be empty"
            result = false
        }
        else {
            document.getElementById('fname').innerHTML = ""
        }
        //last name
        if (lname.length === 0) {
            document.getElementById('lname').innerHTML = "last name cannot be empty"
            result = false
        }
        else {
            document.getElementById('lname').innerHTML = ""
        }
        //address1
        if (add1.length === 0) {
            document.getElementById('add1').innerHTML = "address cannot be empty"
            result = false
        }
        else {
            document.getElementById('add1').innerHTML = ""
        }
        //address2
        if (add1.length === 0) {
            document.getElementById('add2').innerHTML = "address cannot be empty"
            result = false
        }
        else {
            document.getElementById('add2').innerHTML = ""
        }
        //Company name
        if (cname.length === 0) {
            document.getElementById('cname').innerHTML = "address cannot be empty"
            result = false
        }
        else {
            document.getElementById('cname').innerHTML = ""
        }
        //City
        if (city.length === 0) {
            document.getElementById('city').innerHTML = "address cannot be empty"
            result = false
        }
        else {
            document.getElementById('city').innerHTML = ""
        }
        //state
        if (state.length === 0) {
            document.getElementById('state').innerHTML = "address cannot be empty"
            result = false
        }
        else {
            document.getElementById('state').innerHTML = ""
        }
        //number
        if (number.match(/^\d{10}$/)) {
            document.getElementById('number').innerHTML = ""
        }
        else if (number.length === 0) {
            document.getElementById('number').innerHTML = "number cannot be empty"
            result = false
        }
        else {
            document.getElementById('number').innerHTML = "invalid number"
            result = false
        }
        //zip code
        if (code.length === 0) {
            document.getElementById('code').innerHTML = "zip code cannot be empty"
            result = false
        }
        else {
            document.getElementById('code').innerHTML = ""
        }
        //country
        if (country === '') {
            document.getElementById('country').innerHTML = "choose country"
            result = false
        }
        else {
            document.getElementById('country').innerHTML = ""
        }
        if (result) {
            // for normal form 
            setArr([...arr, obj])
            console.log(arr);
            saveFormData(obj)
            alert('signup success')
        }
        setEmail('')
        setPassword('')
        setAdd1('')
        setAdd2('')
        setCity('')
        setCname('')
        setCode('')
        setCountry('')
        setCpassword('')
        setFname('')
        setLname('')
        setNumber('')
        setState('')
        // local storage start
        function saveFormData(obj) {
            //getting empty array
            let storedFormData = JSON.parse(localStorage.getItem('obj')) || [];

            //storing data of obj in localstorage
            localStorage.setItem('obj', JSON.stringify([...storedFormData, obj]))

            //getting stored data in localstorage in storedFormData
            storedFormData = JSON.parse(localStorage.getItem('obj')) || [];
        }

    }
    return (

        <div className='signup'>
            <div className='signup_top'>
                <h1>New Account</h1>
            </div>
            <div className='signup_bottom'>

                <form onSubmit={Validate}>
                    <div className='signup_bottom2'>
                        <div className="signup_bottom_left">
                            <p>Email Address</p>
                            <input type='email' name='email' value={email} onChange={((e) => setEmail(e.target.value))} />
                            <p id='email'></p>
                            <p>Confirm Password</p>
                            <input type='password' name='cpassword' value={cpassword} onChange={((e) => setCpassword(e.target.value))} />
                            <p id='cpassword'></p>
                            <p>First Name</p>
                            <input type='text' name='fname' value={fname} onChange={((e) => setFname(e.target.value))} />
                            <p id='fname'></p>
                            <p>Address Line1</p>
                            <input type='text' name='add1' value={add1} onChange={((e) => setAdd1(e.target.value))} />
                            <p id='add1'></p>
                            <p>Company Name</p>
                            <input type='text' name='cname' value={cname} onChange={((e) => setCname(e.target.value))} />
                            <p id='cname'></p>
                            <p>State/Province</p>
                            <input type='text' name='state' value={state} onChange={((e) => setState(e.target.value))} />
                            <p id='state'></p>
                            <p>Phone Number</p>
                            <input type='text' name='number' value={number} onChange={((e) => setNumber(e.target.value))} />
                            <p id='number'></p>
                        </div>

                        <div className="signup_bottom_right">
                            <p>Password</p>
                            <input type='password' name='password' value={password} onChange={((e) => setPassword(e.target.value))} />
                            <p id='password'></p>
                            <p>Country</p>
                            <select name='country' value={country} onChange={((e) => setCountry(e.target.value))} >
                                <option>Select Country</option>
                                <option>India</option>
                                <option>Japan</option>=-098
                                <option>China</option>
                                <option>UK</option>
                            </select>
                            <p id='country'></p>
                            <p>Last Name</p>
                            <input type='text' name='lname' value={lname} onChange={((e) => setLname(e.target.value))} />
                            <p id='lname'></p>
                            <p>Address Line2</p>
                            <input type='text' name='add2' value={add2} onChange={((e) => setAdd2(e.target.value))} />
                            <p id='add2'></p>
                            <p>City</p>
                            <input type='text' name='city' value={city} onChange={((e) => setCity(e.target.value))} />
                            <p id='city'></p>
                            <p>ZIP/Postcode</p>
                            <input type='text' name='code' value={code} onChange={((e) => setCode(e.target.value))} />
                            <p id='code'></p>
                        </div>
                    </div>
                    <div className='submit_btn'> <input type='submit' value='Create Account' /></div>
                </form>
            </div>
        </div>


    )
}

export default Signup
