import React, { useEffect, useState } from 'react'
import "./VideoPage.css"
import ReactPlayer from 'react-player/youtube'
import { useNavigate, useParams } from 'react-router'
import { useVideos } from 'contexts/videos-context'
import { useLike } from 'contexts/like-context'
import { useWatchLater } from 'contexts/watchLater-context'
import { useUser } from 'contexts/user-context'
import PlaylistModal from 'components/modal/PlaylistModal'
import Sidebar from 'components/sidebar/Sidebar'

const VideoPage = () => {


  const { videoId } = useParams();
  const navigate = useNavigate();
  const {singleVideo, getSingleVideo} = useVideos();
  const { getToken } = useUser();
  const {addToWatchLater, handleRemoveFromWatchlater, getWatchLater} = useWatchLater();
  const [isOpen, setIsOpen] = useState(false);
  const {likeData, handleLikeData,handleRemoveLike} = useLike();

  useEffect(()=>{
    getSingleVideo(videoId)
  },[])

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
let a = [{
  id: 4,
  name: "ak"
},{
  id: 15,
  name: "test"
}];


  return (
    <div className='video-player-container'>
      <Sidebar />

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
        {
          likeData?.findIndex((el)=> el._id === singleVideo._id) !== -1 && getToken ?
          <div className='youtube-like-btn liked-btn' onClick={()=>handleRemoveLike(singleVideo._id)}>
            <i className='side-icons fas fa-thumbs-up'></i> Liked
          </div>
          :
          <div className='youtube-like-btn' onClick={()=>handleLikeData(singleVideo)}>
            <i className='side-icons fas fa-thumbs-up'></i> Like
          </div>
        }
          
          {
            getWatchLater.findIndex((el)=> el._id === singleVideo._id) !== -1 && getToken ? 
            <div className='youtube-watchlater watchlater-btn' onClick={()=>handleRemoveFromWatchlater(singleVideo._id)}>
            <i className='side-icons fas fa-clock added-watchlater'></i> Watch Later
          </div>
            :
          <div className='youtube-watchlater' onClick={() => getToken ? addToWatchLater(singleVideo) : navigate("/login")}>
            <i className='side-icons fas fa-clock'></i> Watch Later
          </div>
          
          }

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