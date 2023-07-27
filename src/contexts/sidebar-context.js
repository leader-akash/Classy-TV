import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Children } from 'react';
import { createContext } from 'react'


const SidebarContext = createContext(null);

const SidebarProvider = ({children}) => {

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <SidebarContext.Provider value={{showSidebar, setShowSidebar, toggleSidebar}}>
      {children}
    </SidebarContext.Provider>
  )
}

const useSidebar = () =>  useContext(SidebarContext);

export {SidebarProvider, useSidebar}