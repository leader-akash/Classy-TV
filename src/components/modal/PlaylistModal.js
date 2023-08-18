import React, { useState } from 'react'
import "./PlaylistModal.css"
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal'
import { usePlaylist } from 'contexts/playlist-context';
import { toast } from 'react-toastify';

const PlaylistModal = ({ isOpen, closeModal, ...details }) => {

  const {allPlaylistData, nameVal, handleCreatePlaylist, handleInput,handleVideosInPlaylist , state: {showPlaylist}, dispatch } = usePlaylist()
  
  return (
    <Modal open={isOpen} onClose={closeModal} center>
      <div className='my-playlist-container'>
        <div className='myplaylist-heading'>My Playlists</div>
        {
          allPlaylistData?.map((el) => (
            <div className='playlist-name-container' key={el?._id}>
              <label className='playlist-name-label'>
                <input className='playlist-checkbox'  type="checkbox" id={el.title} 
                 onChange={() => handleVideosInPlaylist(details, el?._id)}
                  // checked={el?.videos?.some(({_id}) => _id === allPlaylistData?.videos?._id)} 
                />
                {el.title}
              </label>
            </div>

          ))
        }

        <form className='playlist-form' onSubmit={handleCreatePlaylist}>
          <label className='input-playlist'> Name: <input className='playlist-name' type='text' value={nameVal} onChange={handleInput} /> </label>

          <button type="submit" className='create-playlist-btn' >Create Playlist</button>
        </form>
      </div>
    </Modal>
  )
}

export default PlaylistModal