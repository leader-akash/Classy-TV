import React, { useState } from 'react';
import "./VideoCard.css"
import axios from 'axios';
import { useWatchLater } from 'contexts/watchLater-context';
import { Link, useNavigate } from 'react-router-dom';
import PlaylistModal from 'components/modal/PlaylistModal';
import { useUser } from 'contexts/user-context';
import { toast } from 'react-toastify';
import { useHistory } from 'contexts/history-context';

// const VideoCard = ({image, logo, description, channelName, _id}) => {
const VideoCard = ({ details }) => {

  const [showOption, setShowOptions] = useState(false);
  const tokenVal = localStorage.getItem("token");
  const { addToWatchLater, getWatchLater, handleRemoveFromWatchlater } = useWatchLater();
  const {handleHistory} = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const { getToken } = useUser();

  const navigate = useNavigate();

  const handleVideoPlayer = () => {
    navigate(`/videos/${details._id}`)
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleAddToWatchlater = (_id) => {
    if (getWatchLater?.findIndex((el) => el._id === details._id) !== -1) {
      handleRemoveFromWatchlater(details._id)
    }
    else {
      addToWatchLater(details)
    }
    setShowOptions(prev => !prev)
  }

  // const handlePlaylist = () => {
  //   setIsOpen(true);
  //   setShowOptions(prev => !prev)
  // }


  return (
    // <div className='video-card-container'>

    <div className='video-card' >

      <img className='img-section' src={details.image} alt="img" 
      onClick={()=>
      {
        handleVideoPlayer();
        handleHistory(details)
      }} />

      <div className='video-description' onClick={handleVideoPlayer}>
        <img className='channel-logo' src={details.logo} alt="logo" />
        <p className='content'>
          {details?.description}
        </p>
        <small className='channel-name'>{details?.channelName}</small>
      </div>
      <p className='option-position' onClick={() => setShowOptions(prev => !prev)} ><i className=" more-info fas fa-ellipsis-v option-icon"
      ></i></p>
      {
        showOption ?
          <div className="options">

            <div className='' onClick={() => getToken ? handleAddToWatchlater(details._id) : navigate("/login")} >
              {
                getWatchLater.findIndex((el) => el._id === details._id) !== -1 && getToken ?
                  <div className='choose-option option-border'><i className='side-icons fas fa-clock'></i> Remove from Watch Later </div>
                  :
                  <div className='choose-option option-border'><i className='side-icons fas fa-clock'></i> Add to Watch Later </div>
              }
            </div>

            {/* <div className='choose-option' onClick={() => getToken ? handlePlaylist : navigate("/login")}> 
            <i className='side-icons fas fa-list'></i> Save to Playlist
            </div> */}

            <div className='choose-option' onClick={() => {
              openModal();
              setShowOptions(prev => !prev)
            }}> <i className='side-icons fas fa-list'></i> Save to Playlist
            </div>

          </div>
          :
          null
      }

      <PlaylistModal
        isOpen={isOpen}
        closeModal={closeModal}
        details={details}
      />

    </div>
    // </div> 
  )
}

export default VideoCard