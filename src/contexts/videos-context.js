import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const VideoContext = createContext(null);


const VideosProvider = ({children}) => {

    const [allVideos, setAllVideos] = useState([]);

    const getAllVideos = async () => {
        try {
             const videoResponse = await axios.get(`/api/videos`)
             setAllVideos(videoResponse?.data?.videos)
        }
        catch (error) {
            console.log("videoErr", error)
        }
    }

    useEffect(()=> {
        getAllVideos();
    }, [])


  return (
    <VideoContext.Provider value={{allVideos, setAllVideos}}>
        {children}
    </VideoContext.Provider>
  )
}

const useVideos = ()=> useContext(VideoContext)

export {VideosProvider, useVideos}