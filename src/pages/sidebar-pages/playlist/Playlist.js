import React, { useEffect, useState } from 'react'
import "./Playlist.css"
import { usePlaylist } from 'contexts/playlist-context'
import VideoCard from 'components/card/VideoCard';
import PlaylistModal from 'components/modal/PlaylistModal';
import HorizontalCard from 'components/horizontalCard/HorizontalCard';
import axios from 'axios';
import Sidebar from 'components/sidebar/Sidebar';

const Playlist = () => {

  const [isOpen, setIsOpen] = useState(false);

  const { allPlaylistNames, selectedPlaylistVideos, getPlaylistVideos } = usePlaylist()

  const [currPlaylist, setCurrPlaylist] = useState([]);

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  }
const [playlistName, setPlaylistName] = useState([])
  useEffect (() => {
    axios.get(`/api/user/playlists`, {
        headers: {
            authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            setPlaylistName(res?.data?.playlists)
        })
        .catch((err) => {
            console.log("fffff", err)
        })
}, [])

  return (
    <div>
      <Sidebar />

      <h2 className='side-pages-style'><u>Your Playlists</u></h2>
      <div className='playlist-container'>



        <div className='playlist-sidebar'>
          <button className='create-new-playlist-btn' onClick={openModal}> Create New Playlist</button>

          <div className='playlist-guide'>
          Select Playlist to see saved videos 👇
        </div>
          
            {/* allPlaylistNames?.map((el) => { */}
          {
            playlistName?.map((el) => {
              console.log('ppp', playlistName)
              return (
                <div className='playlist-name-sidebar' key={el?._id} onClick={() => getPlaylistVideos(el?._id)}>
                  {el?.title}
                </div>
              )
            })
          }

        </div>

        


        <div className='playlist-horizontal-card'>

          <button className='delete-playlist-btn'>
          
          Delete this Playlist</button>
{/* here */}
          {
            selectedPlaylistVideos?.map((el, i) => {
              return (
                <HorizontalCard
                  details={el.details}
                />
              )
            })
          }
        </div>
      </div>

      <PlaylistModal
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  )
}

export default Playlist