import React from 'react'
import "./VideoPage.css"
import ReactPlayer from 'react-player/youtube'
import YouTubePlayer from 'react-player/youtube'

const VideoPage = () => {
  return (
    <div className='video-player-container'>

      <ReactPlayer className="video-container" url='https://www.youtube.com/watch?v=r_y9vk1L7KE' playing={false} volume={1} controls={true} />

      <div className="youtube-description">
        How Semiconductors Are Manufactured - Exclusive Tour Of SCL, Mohali🔥🔥🔥
      </div>
      <div className='youtube-info-container'>
        <div className='youtube-logo'>
          <img className='youtube-channel-logo' src="https://yt3.googleusercontent.com/ytc/AOPolaQOnwD18xcHvQtSpw8mYQX3gZ_9Fdy-NLlRHfPBP3k=s176-c-k-c0x00ffffff-no-rj" alt="logo" />
        </div>
        <p className='youtube-channel-name'>Technical Guruji</p>

        <div className='youtube-action-btn'>
          <div className='youtube-like-btn'>
            <i className='side-icons fas fa-thumbs-up'></i> Like
          </div>

          <div className='youtube-watchlater'>
            <i className='side-icons fas fa-clock'></i> Watch Later
          </div>
          <div className='youtube-playlist'>
            <i className='side-icons fas fa-list'></i> Save
          </div>
        </div>
      </div>

      <div className='youtube-content'>
      Namaskaar Dosto, yeh ek bahut hi interesting video jaha pe maine aapse baat ki hai Semiconductor Laboratory ke baare mein jo Mohali mein hai. Yaha pe yeh ek exclusive tour hai SCL, Mohali ka jaha pe humne Semiconductor Chips ko banane ki pppri process ko ekdum paas se dikhaya hai. Mujhe umeed hai ki aapko yeh video pasand aayegi.
      </div>

    </div>
  )
}

export default VideoPage