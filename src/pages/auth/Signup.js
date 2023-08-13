import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Auth.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useUser } from 'contexts/user-context';


const Signup = () => {

  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState();
  const [passwordVal, setPasswordVal] = useState();
  const [confirmPasswordVal, setConfirmPasswordVal] = useState();
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const {setGetToken} = useUser();

  const handlePasswordVisible = () => {
    setIsPasswordVisible(prev => !prev)
  }

  const handleName = (e) => {
    setNameVal(e.target.value);
  }

  const handleEmail = (e) => {
    setEmailVal(e.target.value);
  }

  const handlePassword = (e) => {
    setPasswordVal(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setConfirmPasswordVal(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordVal !== confirmPasswordVal) {
      setIsPasswordMatch(true);
    }
    else {
      axios.post(`/api/auth/signup`, {
        name: nameVal,
        email: emailVal,
        password: passwordVal
      })
        .then((res) => {
          console.log("signup", res);
          localStorage.setItem("singup token", res.data?.encodedToken);
          localStorage.setItem("singup info", JSON.stringify(res.data?.createdUser));
          setGetToken(res.data?.encodedToken)
          toast.success(`Hi ${nameVal}, Welcome  to Classy TV 💖`)
          navigate("/");
        })
        .catch((err) => {
          console.log("err-sign", err);
          toast.error("User already exists 😔")
        })

    }

  }


  return (

    <div className="input-container signup-form">
      <h2 className='login-header'>Signup</h2>
      <form id="signupForm" onSubmit={handleSubmit}>
        <div>
          <label className="form-inputs"> Name </label>
          <input className='input-box' type="text" id="fullName" placeholder="Akash" value={nameVal} onChange={handleName} required />
        </div>
        <div>
          <label className="form-inputs" > Email </label>
          <input className='input-box' type="email" id="email" placeholder="akash@gmail.com" value={emailVal} onChange={handleEmail} required />
        </div>
        <div>
          <label className="form-inputs"> Password </label>
          <input className='input-box' value={passwordVal} onChange={handlePassword} type={isPasswordVisible ? "text" : "password"} id="password" placeholder="Password" required />
          <i className={`far  ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`} style={{ marginLeft: '-30px', cursor: 'pointer' }} onClick={handlePasswordVisible}></i>
        </div>
        <div>
          <label className="form-inputs"> Confirm Password </label>
          <input className='input-box' value={confirmPasswordVal} onChange={handleConfirmPassword} type="password" id="confirmPassword" placeholder="Confirm Password" required />
        </div>
        <div id="errorContainer" >
          {
            isPasswordMatch ? "Password do not match" : null
          }
        </div>

        <div>
          <button className="sign-button" type="submit">Signup</button>
        </div>

        <div className="new-user">
          <Link className="goto-signup" to="/login">&lt; Back to Login</Link>
        </div>

      </form>
    </div>
  )
}

export default Signup;