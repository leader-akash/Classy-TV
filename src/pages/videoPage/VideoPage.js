import React, { useEffect, useState } from 'react'
import "./VideoPage.css"
import ReactPlayer from 'react-player/youtube'
import { useNavigate, useParams } from 'react-router'
import { useVideos } from 'contexts/videos-context'
import { useLike } from 'contexts/like-context'
import { useWatchLater } from 'contexts/watchLater-context'
import { useUser } from 'contexts/user-context'
import PlaylistModal from 'components/modal/PlaylistModal'

const VideoPage = () => {


  const { videoId } = useParams();
  const navigate = useNavigate();
  const {singleVideo, getSingleVideo} = useVideos();
  const { getToken } = useUser();
  const {handleLikeData} = useLike();
  const {addToWatchLater} = useWatchLater();
  const [isOpen, setIsOpen] = useState(false);

  console.log("singleVideo",singleVideo)

  useEffect(()=>{
    getSingleVideo(videoId)
  },[])

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='video-player-container'>

      <ReactPlayer className="video-container" url={singleVideo?.videoLink} playing={false} volume={1} controls={true} />

      <div className="youtube-description">
       {singleVideo?.description}
      </div>
      <div className='youtube-info-container'>
        <div className='youtube-logo'>
          <img className='youtube-channel-logo' src={singleVideo?.logo} alt="logo" />
        </div>
        <p className='youtube-channel-name'>{singleVideo?.channelName}</p>

        <div className='youtube-action-btn'>
          <div className='youtube-like-btn' onClick={()=>handleLikeData(singleVideo)}>
            <i className='side-icons fas fa-thumbs-up'></i> Like
          </div>

          <div className='youtube-watchlater' onClick={() => getToken ? addToWatchLater(singleVideo) : navigate("/login")}>
            <i className='side-icons fas fa-clock'></i> Watch Later
          </div>
          <div className='youtube-playlist' onClick={openModal}>
            <i className='side-icons fas fa-list'></i> Save
          </div>
        </div>
      </div>

      <div className='youtube-content'>
      {singleVideo?.content}
      </div>
      
      <PlaylistModal 
        isOpen={isOpen}
        closeModal={closeModal}
        singleVideo={singleVideo}
      />

    </div>
  )
}

export default VideoPage