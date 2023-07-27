import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

   return (
      <>

         <div className="nav-two-container">
            <Link className="logo-hover" to="/"><div className="logo">Classy TV</div></Link>
            <div class="search-bar">
               <input className="search-input" type="text" placeholder="Search Classy TV" />
               <i className="fa-solid fa-magnifying-glass "></i>
            </div>


            <Link className="signin-link" to="/login">
               <button className="sign-in">
                  {/* <i className="fa-regular fa-user"></i> */}
                  Login</button>
            </Link>

         </div>
      </>
   );
}

export default Navbar;