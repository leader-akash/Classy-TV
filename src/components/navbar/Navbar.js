import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "contexts/user-context";
import { useSidebar } from "contexts/sidebar-context";
import { useFilter } from "contexts/filter-context";
import { useVideos } from "contexts/videos-context";

const Navbar = () => {

   const location = useLocation();
   const navigate = useNavigate()

   const { getToken, setGetToken } = useUser();
   const { toggleSidebar } = useSidebar();

   const handleLoginClick = () => {
      toggleSidebar()
   }

   const handleLogout = (e) => {
      localStorage.clear();
      setGetToken("");
   }
   const { searchItem, setSearchItem } = useFilter()


   const handleSearch = (e) => {
      setSearchItem(e.target.value);
      if(location.pathname !== "/"){
         setSearchItem("")
      }
   }

   //  **** wihtout timeout 

   const handleSeachPages = () => {
      if (location.pathname !== "/") {
         navigate("/")
      }
   }

   // ***** via setTimeout

   // const handleSeachPages = () => {
   //    setTimeout(()=>{
   //       if(location.pathname !== "/"){
   //          navigate("/")
   //       }
   //    },500)
   // }

   return (
      <>

         <div className="nav-two-container">
            <Link className="logo-hover" to="/"><div className="logo">📺 Classy TV </div></Link>
            <div className="search-bar" onClick={handleSeachPages}>
               <input className="search-input" type="search" placeholder="Search Classy TV" onChange={handleSearch} />
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