import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const PlaylistContext = createContext(null)

const PlaylistProvider = ({ children }) => {

  const [allPlaylistNames, setAllPlaylistNames] = useState([]);
  const [nameVal, setNameVal] = useState("");
  const [selectedPlaylistVideos, setSelectedPlaylistVideos] = useState([]);

  // for title
  const handleCreatePlaylistName = (title) => {
    axios.post(`/api/user/playlists`,
      {
        playlist: { title: title, description: "" }
      },
      {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then((res) => {
        setAllPlaylistNames(res?.data?.playlists)
      })
      .catch((err) => {
        console.log("play-err", err)
      })
  }

  useEffect(() => {
    axios.get(`/api/user/playlists`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setAllPlaylistNames(res?.data?.playlists)
      })
      .catch((err) => {
        console.log("err", err)
      })
  }, [nameVal])

  // here playlist name


  const [playlistsNamesAndVideos, setPlaylistsNamesAndVideos] = useState([]);
  // for videos 
  // here 

  // const singlePlaylist = (id) => {
  //   axios.get(`/api/user/playlists/${id}`, {
  //     headers: {
  //       authorization: localStorage.getItem("token")
  //     }
  //   })
  //     .then((res) => {
  //       console.log('gett', res)
  //       //     setSelectedPlaylistVideos(res?.data?.playlist?.videos)
  //     
  //     .catch((err) => {
  //       console.log("res-err", err)
  //     })
  // }
  const handleAddVideoToPlaylist = (video, playlistId) => {
    console.log('pid', playlistId, 'det', video)
    axios.post(`/api/user/playlists/${playlistId}`,
      { video }, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setPlaylistsNamesAndVideos(prev => [...prev, res?.data?.playlist])
        toast.success(`Video added in Playlist ${nameVal}`)
      })
      .catch((err) => {
        console.log("play-video-err", err)
        toast.error(err?.message)
      })
  }

  const getPlaylistVideos = (_id) => {
    console.log('myvideos', playlistsNamesAndVideos, _id)
    const videoObj = playlistsNamesAndVideos.find(el => el?._id === _id);
    setSelectedPlaylistVideos(videoObj?.videos)
  }


  // useEffect(()=>{
  //     getPlaylistVideos();
  // },[])


  return (
    <PlaylistContext.Provider value={{ allPlaylistNames, setAllPlaylistNames, handleCreatePlaylistName, nameVal, setNameVal, selectedPlaylistVideos, getPlaylistVideos, handleAddVideoToPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  )
}

const usePlaylist = () => useContext(PlaylistContext)

export { PlaylistProvider, usePlaylist }