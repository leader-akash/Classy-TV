import React from 'react'
import "./VideoPage.css"

const VideoPage = () => {
  return (
    <div>

        <video className='video-container'controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>

    </div>
  )
}

export default VideoPage