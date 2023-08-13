import React, { useState } from 'react';
import "./VideoCard.css"
import axios from 'axios';
import { useWatchLater } from 'contexts/watchLater-context';
import { useNavigate } from 'react-router-dom';

// const VideoCard = ({image, logo, description, channelName, _id}) => {
const VideoCard = ({ details }) => {

  const [showOption, setShowOptions] = useState(false);
  const tokenVal = localStorage.getItem("token");
  const {addToWatchLater} = useWatchLater();

  const navigate = useNavigate();

  const handleVideoPlayer = () => {
      
    navigate("/videos")
  }


return (
  // <div className='video-card-container'>
    <div className='video-card' onClick={handleVideoPlayer}>
      <img className='img-section' src={details.image} alt="img" />

      <div className='video-description'>
        <img className='channel-logo' src={details.logo} alt="logo" />
        <p className='content'>
          {details?.description}
          <br />
          <small className='channel-name'>{details?.channelName}</small>
        </p>
        <p><i className=" more-info fas fa-ellipsis-v option-icon" onClick={() => setShowOptions(prev => !prev)
        }></i></p>
        {
          showOption ?
            <div className="options">
              <div className='choose-option option-border' onClick={()=> addToWatchLater(details)} > <i className='side-icons fas fa-clock'></i>  Add to Watch Later</div>
              <div className='choose-option'> <i className='side-icons fas fa-list'></i> Save to Playlist</div>
            </div>
            :
            null
        }
      </div>

    </div>
  // </div>
)
}

export default VideoCard