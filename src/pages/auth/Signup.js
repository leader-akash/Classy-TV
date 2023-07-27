import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Auth.css";


const Signup = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePasswordVisible = ()=>{
        setIsPasswordVisible(prev => !prev)
    }

    return (

        <div className="input-container signup-form">
            <h2 className='login-header'>Signup</h2>
            <form id="signupForm" >
                <div>
                    <label className="form-inputs"> Name </label>
                    <input className='input-box' type="text" id="fullName" placeholder="Akash" required />
                </div>
                <div>
                    <label className="form-inputs"> Email </label>
                    <input className='input-box' type="email" id="email" placeholder="akash@gmail.com"  required />
                </div>
                <div>
                    <label className="form-inputs"> Password </label>
                    <input className='input-box' type={isPasswordVisible ? "text" : "password"} id="password" placeholder="Password" required />
                    <i className={`far  ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`} style={{marginLeft: '-30px', cursor:'pointer'}} onClick={handlePasswordVisible}></i>
                </div>
                <div>
                    <label className="form-inputs"> Confirm Password </label>
                    <input className='input-box' type="password" id="confirmPassword" placeholder="Confirm Password"  required />
                </div>
                <div id="errorContainer" >
               
                </div>
                
                <div>
                    <button className="sign-button" type="submit">Signup</button>
                </div>

                <div class="new-user">
                    <Link className="goto-signup" to="/login">&lt; Back to Login</Link>
                </div>

            </form>
        </div>
    )
}

export default Signup;