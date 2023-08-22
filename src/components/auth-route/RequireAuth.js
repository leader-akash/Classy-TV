import React, { useLayoutEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {

    const token = localStorage.getItem("token");
    const location = useLocation();

  return token ? (<Outlet />) : (<Navigate to="/login" state={{from: location}} replace />)
}

export default RequireAuth