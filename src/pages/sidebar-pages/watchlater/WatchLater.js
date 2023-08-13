import React from 'react'
import "./WatchLater.css"
import "../SidePagesStyle.css"
import VideoCard from 'components/card/VideoCard'
import { useWatchLater } from 'contexts/watchLater-context'

const WatchLater = () => {

  const { getWatchLater , showWatchLater} = useWatchLater();
  console.log("get", getWatchLater)
  return (
    <div>
      <h2 className='side-pages-style'><u> Watch Later Videos</u></h2>

      {
        getWatchLater?.map((el, i) => {
          return (
            <VideoCard
                 details = {el}
            />
          )
        })

      }

    </div>
  )
}

export default WatchLater