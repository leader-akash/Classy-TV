import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useUser } from 'contexts/user-context';
// import { useSidebar } from 'contexts/sidebar-context';


const Login = () => {

  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  

  const handlePasswordVisible = () => {
    setIsPasswordVisible(prev => !prev);
  }

  const [emailVal, setEmailVal] = useState();
  const [passwordVal, setPasswordVal] = useState();
  const [loginStatus, setLoginStatus] = useState();
  const {setGetToken} = useUser();

  const handleEmail = (e) => {
    setEmailVal(e.target.value);
  }

  const handlePassword = (e) => {
    setPasswordVal(e.target.value);
  }

  const handleLoginAsGuest = (e) => {
      setEmailVal("akash@gmail.com");
      setPasswordVal("akash123")
  }

  const handleLogin = (e) => {
      e.preventDefault(); 
      console.log("login", emailVal, passwordVal)


      axios.post(`/api/auth/login`, 
        {
          email: emailVal,
         password: passwordVal,
        }
      )
      .then((res)=>{
        console.log("res-login", res);
        localStorage.setItem("token", res.data?.encodedToken)
        localStorage.setItem("userinfo",  JSON.stringify(res?.data?.foundUser))
        setGetToken(res.data?.encodedToken)
        toast.success(`welcome back, ${res.data?.foundUser?.name} 🎉 Enjoy Shopping 🛒`);
      navigate("/");
      }
      )
      .catch((err)=>{
        console.log("err", err)
        toast.error('User not found')
      })

  }



  return (
    <div className='login-page'>


      <div>
        <div className="login-container">
          <h2 className='login-header '>Login</h2>
          <form id="loginForm" onSubmit = {handleLogin}>
            <div>
              <label className="form-inputs"> Email Id </label>
              <input className='input-box' type="email" id="login-email" placeholder="akash@mail.com" onChange={handleEmail} value={emailVal} required />
            </div>
            <div>
              <label className="form-inputs"> Password </label>
              <input className='input-box' onChange={handlePassword} value={passwordVal} type={isPasswordVisible ? 'text' : 'password'} id="loginPassword" placeholder="******" required />
              <i onClick={handlePasswordVisible} className={`far ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePassword" style={{ marginLeft: '-30px', cursor: 'pointer' }}

              ></i>
              {/* <i className="far  fa-eye-slash" style={{marginLeft: '-30px'}}></i> */}
            </div>
            <div className='test-credentials'>
              <label className='remember-me'>
                <input className="remember-checkbox" type="checkbox" name="keeplogin" />
                Remember me
              </label>

              <p className='forgot-password'>Forgot Password?</p>
            </div>
            <div id="login-errorContainer"></div>
            <div>
              <button className="signin-button" type="submit" >Login</button>

              <button className="signin-guest" type="submit" onClick={handleLoginAsGuest}>Login as Guest</button>
            </div>

            <div class="new-user">
              <Link className="goto-signup" to="/signup">New on Classy Store? Sign up &gt;</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login