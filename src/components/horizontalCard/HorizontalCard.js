import React, { useState } from 'react'
import "./HorizontalCard.css"
import PlaylistModal from 'components/modal/PlaylistModal';
import { useWatchLater } from 'contexts/watchLater-context';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'contexts/user-context';
import { useHistory } from 'contexts/history-context';

const HorizontalCard = ({ details }) => {

  const [showOption, setShowOptions] = useState(false);
  const tokenVal = localStorage.getItem("token");
  const { addToWatchLater, getWatchLater, handleRemoveFromWatchlater } = useWatchLater();
  const {handleDeleteHistory, historyData} = useHistory();


  const [isOpen, setIsOpen] = useState(false);

  const { getToken } = useUser();

  const navigate = useNavigate();

  const handleVideoPlayer = () => {
    navigate("/videos")
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

  const handleDeleteFromWatchlater= (_id) => {
    if (getWatchLater?.findIndex((el) => el._id === details._id) !== -1) {
      handleRemoveFromWatchlater(details._id)
    }
  }

  const handleRemoveFromHistory = (_id) => {
      if(historyData?.findIndex((el)=> el._id === details._id) !== -1){
        handleDeleteHistory(details._id);
      }
  }

  // const handlePlaylist = () => {
  //   setIsOpen(true);
  //   setShowOptions(prev => !prev)
  // }

  return (

    <div className='horiz-video'>
    <div className='horiz-video-container' onClick={()=> navigate("/videos")}>
      <div className='horiz-img'>
        <img className='horiz-img-src' src={details.image} alt="logo" />

      </div>
      <div className='horiz-description' >
        <div className='horiz-channel-info'>
          <img className='horiz-channel-logo' src={details.logo} alt="logo" />
          <small className='horiz-channel-name'>{details?.channelName}</small>

        </div>
        <p className='horiz-content'>
          {details.description}
        </p>
      </div>
      </div>
      <div>
        <i className="fa fa-trash horiz-delete-icon" aria-hidden="true" 
        onClick={()=>{
          handleDeleteFromWatchlater();
          handleRemoveFromHistory();
        }}></i>
        <i className=" more-info fas fa-ellipsis-v horiz-option-icon" onClick={() => setShowOptions(prev => !prev)}></i>
      </div>
      {
        showOption ?
          <div className="options horiz-options">

            <div className='' onClick={() => getToken ? handleAddToWatchlater(details._id) : navigate("/login")} >
              {
                getWatchLater.findIndex((el) => el._id === details._id) !== -1 && getToken ?
                  <div className='choose-option option-border'><i className='side-icons fas fa-clock'></i> Remove from Watch Later </div>
                  :
                  <div className='choose-option option-border'><i className='side-icons fas fa-clock'></i> Add to Watch Later </div>
              }
            </div>

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
      />

    </div>

  )
}

export default HorizontalCard