import React from 'react'
import "./Liked.css"
import { useLike } from 'contexts/like-context'
import HorizontalCard from 'components/horizontalCard/HorizontalCard';

const Liked = () => {

  const {likeData} = useLike();

  return (
    <div>
      <h2 className='side-pages-style'><u> Liked Videos</u></h2>
      <div className='like-container'>

      
      {
        likeData.map((el)=>{
          return(
            <HorizontalCard 
              details={el}
            />
          )
        })
      }
      </div>

    </div>
  )
}

export default Liked