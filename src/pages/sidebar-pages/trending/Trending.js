import React, { useEffect } from 'react'
import "./Trending.css"
import { useVideos } from 'contexts/videos-context'
import VideoCard from 'components/card/VideoCard'
import Sidebar from 'components/sidebar/Sidebar'
import { useFilter } from 'contexts/filter-context'

const Trending = () => {

  const { allVideos } = useVideos();
  const { filteredSearch } = useFilter();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div>
      <Sidebar />

      <h2 className='side-pages-style'><u>Trending Videos</u></h2>

      <div className='trending-container'>
        {
          allVideos?.map((el, i) => {
            return (
              <VideoCard
                details={el}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Trending