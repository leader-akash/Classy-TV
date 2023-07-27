import React from 'react'
import "./Homepage.css"
import Sidebar from '../../components/sidebar/Sidebar';
import Badge from '../../components/badge/Badge';
// import VideoCard from '../../components/card/VideoCard';
// import videoCardData from '../../data/VideoCard.data';
import CardItems from './sub-component/CardItems';
import NewBadge from 'components/badge/NewBadge';

const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <Badge />
      <div className="videoCardFlex">
        <CardItems />
      </div>
      
    </div>
  )
}

export default Homepage;