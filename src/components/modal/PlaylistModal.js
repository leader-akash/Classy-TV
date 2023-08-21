import React, { useState } from 'react'
import "./PlaylistModal.css"
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal'
import { usePlaylist } from 'contexts/playlist-context';
import { toast } from 'react-toastify';

const PlaylistModal = ({ isOpen, closeModal, ...details }) => {

  const {allPlaylistNames, nameVal, setNameVal, handleAddVideoToPlaylist, handleCreatePlaylistName } = usePlaylist();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameVal === "") {
      toast.error("Please enter Playlist name")
    }
    else {
      handleCreatePlaylistName(nameVal)
      toast.success(`Playlist created with name "${nameVal}" 🎉`)
      setNameVal("");
    }
  }

  return (
    <Modal open={isOpen} onClose={closeModal} center>
      <div className='my-playlist-container'>
        <div className='myplaylist-heading'>My Playlists</div>
        {
          allPlaylistNames?.map((playlistName) => (
            <div className='playlist-name-container' key={playlistName?._id}>
              <label className='playlist-name-label'>
                <input focus className='playlist-checkbox'  type="checkbox" id={playlistName?.title} 
                 onChange={() => handleAddVideoToPlaylist(details, playlistName?._id)}
                  // checked={el?.videos?.some(({_id}) => _id === allPlaylistNames?.videos?._id)} 
                />
                {playlistName?.title}
              </label>
            </div>

          ))
        }

        <form className='playlist-form' onSubmit={handleSubmit}>
          <label className='input-playlist'> Name: <input className='playlist-name' type='text' value={nameVal} onChange={(e)=>setNameVal(e.target.value)} /> </label>

          <button type="submit" className='create-playlist-btn' >Create Playlist</button>
        </form>
      </div>
    </Modal>
  )
}

export default PlaylistModal