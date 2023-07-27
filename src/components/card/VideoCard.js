import React from 'react';
import "./VideoCard.css"

const VideoCard = ({image, logo, description, channelName}) => {
  return (
    <div className='video-card-container'>
      <div className='video-card'>
        <img className='img-section' src={image} alt="img" />
        
      <div className='video-description'>
        <img className='channel-logo' src={logo} alt="logo"/>
        <p className='content'>
          {description}
          <br />
          <small className='channel-name'>{channelName}</small>
        </p>
        <p><i class=" more-info fas fa-ellipsis-v"></i></p>
      </div>
        
      </div>
    </div>
  )
}

export default VideoCard