import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';


const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [getToken, setGetToken] = useState("");
    const [signupToken, setSignupToken] = useState("")

    useEffect(()=>{
        setGetToken(localStorage.getItem("token"));
        setSignupToken(localStorage.getItem("singup token"))
    },[])

    const [isLoggedIn, setIsLoggedIn]= useState(getToken? true : false);

  return (
    <UserContext.Provider value={{getToken, setGetToken, isLoggedIn, setIsLoggedIn, signupToken, setSignupToken }}>
        {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext);

export {UserProvider, useUser}