import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const VideoContext = createContext(null);


const VideosProvider = ({children}) => {

    const [allVideos, setAllVideos] = useState([]);

    const [singleVideo, setSingleVideo] = useState();

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

    const getSingleVideo = (_id) => {
        axios.get(`/api/video/${_id}`)
        .then((res)=> {
                setSingleVideo(res?.data?.video);
        })
        .catch((err)=>{
            console.log("player-err", err)
        })
    }

  return (
    <VideoContext.Provider value={{allVideos, setAllVideos, getSingleVideo, singleVideo}}>
        {children}
    </VideoContext.Provider>
  )
}

const useVideos = ()=> useContext(VideoContext)

export {VideosProvider, useVideos}