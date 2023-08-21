import React from 'react'
import "./Liked.css"
import { useLike } from 'contexts/like-context'
import HorizontalCard from 'components/horizontalCard/HorizontalCard';
import Sidebar from 'components/sidebar/Sidebar';

const Liked = () => {

  const { likeData } = useLike();

  return (
    <div>
      <Sidebar />

      <h2 className='side-pages-style'><u> Liked Videos</u></h2>
      {
        likeData.length === 0 ?
      
      <div className='empty-like'>
        <p className='watchlater-icon like-icon'><i className='side-icons fas fa-thumbs-up'></i></p>
        Your have not Liked any video yet !
      </div>
        :
      <div className='like-container'>
        {
          likeData.map((el) => {
            return (
              <HorizontalCard
                details={el}
              />
            )
          })
        }
      </div>
      }
    </div>
  )
}

export default Liked