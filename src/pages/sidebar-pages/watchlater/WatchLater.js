import React, { useEffect } from 'react'
import "./WatchLater.css"
import "../SidePagesStyle.css"
import VideoCard from 'components/card/VideoCard'
import { useWatchLater } from 'contexts/watchLater-context'
import HorizontalCard from 'components/horizontalCard/HorizontalCard'
import Sidebar from 'components/sidebar/Sidebar'

const WatchLater = () => {

  const { getWatchLater, showWatchLater } = useWatchLater();

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  return (
    <div>
      <Sidebar />

      <h2 className='side-pages-style'><u> Watch Later Videos</u></h2>

      <>
        {
          getWatchLater.length === 0 ?

            <div className='empty-watchlater'>
              <p className='watchlater-icon'><i className='side-icons fas fa-clock'></i></p>
              Your Watch Later is Empty
            </div>
            :
            <div className='watchlater-container'>
              {
                getWatchLater?.map((el, i) => {
                  return (
                    <HorizontalCard
                      details={el}
                      fromPage={'watchlater'}
                    />
                  )
                })

              }
            </div>
        }
      </>
    </div>
  )
}

export default WatchLater