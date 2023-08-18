import React from 'react'
import "./WatchLater.css"
import "../SidePagesStyle.css"
import VideoCard from 'components/card/VideoCard'
import { useWatchLater } from 'contexts/watchLater-context'
import HorizontalCard from 'components/horizontalCard/HorizontalCard'

const WatchLater = () => {

  const { getWatchLater , showWatchLater} = useWatchLater();
  return (
    <div>
      <h2 className='side-pages-style'><u> Watch Later Videos</u></h2>
      
      <div className='watchlater-container'>
      {
        getWatchLater?.map((el, i) => {
          return (
            <HorizontalCard
                 details = {el}
            />
          )
        })

      }
      </div>

    </div>
  )
}

export default WatchLater