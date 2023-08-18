import React, { createContext, useContext, useLayoutEffect, useState } from 'react'
import { useVideos } from './videos-context';
import { useLocation } from 'react-router-dom';

const FilterContext = createContext(null);

const FilterProvider = ({children}) => {

    const [searchItem, setSearchItem] = useState("");

    const {allVideos} = useVideos();

    const location = useLocation()

    const filterSearch = (allVideos, searchItem) => {
        if(searchItem){
            if(location.pathname !== "/"){
                setSearchItem(" ")
            }
            else{
            return allVideos?.filter((videos) => {
                return (
                    videos?.channelName.toLowerCase()?.includes(searchItem.toLowerCase()) 
                    ||
                    videos.description.toLowerCase()?.includes(searchItem.toLowerCase())
                )
            })
        }
       
    }
    else{
        return allVideos;
    }
    }

    const filteredSearch = filterSearch(allVideos, searchItem)


  return (
    <FilterContext.Provider value={{searchItem, setSearchItem, filteredSearch}}>
        {children}
    </FilterContext.Provider>
  )
}

const useFilter = () => useContext(FilterContext);

export {FilterProvider , useFilter}