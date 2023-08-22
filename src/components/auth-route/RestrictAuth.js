import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const RestrictAuth = () => {
  
    const token = localStorage.getItem("token");
  
    return token ? <Navigate to="/" replace /> : <Outlet />
}

export default RestrictAuth