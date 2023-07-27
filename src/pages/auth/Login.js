import React, {useState } from 'react';
import { Link } from "react-router-dom";
import "./Auth.css";


const Login = () => {


   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

   const handlePasswordVisible = () => {
      setIsPasswordVisible(prev => !prev);
   }

      

   return (
      <div className='login-page'>


         <div>
            <div className="login-container">
               <h2 className='login-header '>Login</h2>
               <form id="loginForm" >
                  <div>
                     <label className="form-inputs"> Email Id </label>
                     <input className='input-box' type="email" id="login-email" placeholder="akash@mail.com"required />
                  </div>
                  <div>
                     <label className="form-inputs"> Password </label>
                     <input className='input-box' type={isPasswordVisible ? 'text' : 'password'} id="loginPassword" placeholder="******"   required />
                     <i onClick={handlePasswordVisible} className={`far ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePassword" style={{ marginLeft: '-30px', cursor:'pointer' }}
                        
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
                     <button className="signin-button" type="submit">Login</button>

                     <button className="signin-guest" type="submit" >Login as Guest</button>
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