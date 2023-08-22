import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import Sidebar from '../../components/sidebar/Sidebar';
import Badge from '../../components/badge/Badge';
// import videoCardData from '../../data/VideoCard.data';
// import CardItems from './sub-component/CardItems';
import { useFilter } from 'contexts/filter-context';
import VideoCard from 'components/card/VideoCard';
import { useVideos } from 'contexts/videos-context';
// import NewBadge from 'components/badge/NewBadge';

const Homepage = () => {

  const { filteredSearch } = useFilter();

  const [activeCategory, setActiveCategory] = useState('All');
  const { allVideos } = useVideos();

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])


  const handleFilter = (val) => {
    setActiveCategory(val)
  }


  const filteredCategory =
    activeCategory !== 'All' ?
      filteredSearch.filter((el) => el.category === activeCategory) : filteredSearch;


  return (
    <div className='gallery-flex'>
      <Sidebar />
      <div className='gallery-container'>

        <div className='badge-container'>

          <button className={`badge-items ${activeCategory === 'All' ? 'active' : ''}`} onClick={() => handleFilter('All')}>All</button>
          <button className={`badge-items ${activeCategory === 'Music' ? 'active' : ''}`} onClick={() => handleFilter('Music')}>Music</button>
          <button className={`badge-items ${activeCategory === 'Tech' ? 'active' : ''}`} onClick={() => handleFilter('Tech')}>Tech</button>
          <button className={`badge-items ${activeCategory === 'World' ? 'active' : ''}`} onClick={() => handleFilter('World')}>World</button>

        </div>

        <div className="videoCardFlex">
          {filteredCategory?.length ? (
            filteredCategory.map((el, i) => {
              return <VideoCard details={el} />;
            })
          ) : (
            <div className='no-search'>
            <div className='no-video'>No videos found !!</div>
            <p className=' try-search'>Try searching for another video...</p>
            </div>
          )}
        </div>


      </div>
    </div>
  )
}

export default Homepage;