import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useUser } from "contexts/user-context";
import { useSidebar } from "contexts/sidebar-context";

const Navbar = () => {


   const {getToken, setGetToken} = useUser();
   const { toggleSidebar } = useSidebar();

   const handleLoginClick = () => {
      toggleSidebar()
   }

   const handleLogout = (e) => {
      localStorage.clear();
      setGetToken("");
   }

   return (
      <>

         <div className="nav-two-container">
            <Link className="logo-hover" to="/"><div className="logo">Classy TV</div></Link>
            <div class="search-bar">
               <input className="search-input" type="text" placeholder="Search Classy TV" />
               <i className="fa-solid fa-magnifying-glass "></i>
            </div>

            {
               !getToken ?
            <Link className="signin-link" to="/login">
            
               <button className="sign-in" onClick={handleLoginClick}>
                  {/* <i className="fa-regular fa-user"></i> */}
                  Login</button>
            </Link>
            :
            <Link className="signin-link" to="/login">
            
               <button className="sign-in logout-btn" onClick={handleLogout}>
                  {/* <i className="fa-regular fa-user"></i> */}
                  Logout</button>
            </Link>
            }
         </div>
      </>
   );
}

export default Navbar;