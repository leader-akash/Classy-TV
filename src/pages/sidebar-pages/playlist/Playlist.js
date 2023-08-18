import React, { useState } from 'react'
import "./Playlist.css"
import { usePlaylist } from 'contexts/playlist-context'
import VideoCard from 'components/card/VideoCard';
import PlaylistModal from 'components/modal/PlaylistModal';
import HorizontalCard from 'components/horizontalCard/HorizontalCard';

const Playlist = () => {

  const [isOpen, setIsOpen] = useState(false);

  const { allPlaylistData, playlist, getPlaylist } = usePlaylist()

  const [currPlaylist, setCurrPlaylist] = useState([]);

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handlePlaylistVideos = () => {
    setCurrPlaylist(playlist?.title)
  }

  return (
    <div>
      <h2 className='side-pages-style'><u>Your Playlists</u></h2>
      <div className='playlist-container'>
        <div className='playlist-sidebar'>
          <button className='create-new-playlist-btn' onClick={openModal}> Create New Playlist</button>

          {
            allPlaylistData?.map((el) => {
              console.log("addtoplay", allPlaylistData)
              return (
                <div className='playlist-name-sidebar' key={el?._id} onClick={() => getPlaylist(el?._id)}>
                  {el.title}
                </div>
              )
            })
          }

        </div>

        <div className='playlist-horizontal-card'>
          {
            playlist?.map((el, i) => {
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