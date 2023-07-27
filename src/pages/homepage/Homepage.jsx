import React from 'react'
import "./Homepage.css"
import Sidebar from '../../components/sidebar/Sidebar';
import Badge from '../../components/badge/Badge';
// import VideoCard from '../../components/card/VideoCard';
// import videoCardData from '../../data/VideoCard.data';
import CardItems from './sub-component/CardItems';

const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <Badge />
      <div className="videoCardFlex">
        {/* {
          videoCardData.map((el,i)=>{
            console.log(el);
            return (
            <VideoCard 

              image = {el.image}
              logo = {el.logo}
              description = {el.description}
              channelName = {el.channelName}
            
             />
            )
          })
        } */}
        <CardItems />
      </div>
      
    </div>
  )
}

export default Homepage;