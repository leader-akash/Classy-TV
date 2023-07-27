import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
    <div className='item-container'>
        <div className='sidebar-items'><i class=" side-icons fa-solid fa-house" /> Home</div>
        <div className='sidebar-items'><i class=" side-icons fas fa-fire"></i> Trending</div>
        <div className='sidebar-items'><i class=" side-icons fas fa-history"></i> History</div>
        <div className='sidebar-items'><i class=" side-icons fas fa-list"></i> Playlist</div>
        <div className='sidebar-items'><i class=" side-icons fas fa-thumbs-up"></i> Liked</div>
        <div className='sidebar-items'><i class=" side-icons fas fa-clock"></i> Watch Later</div>
      </div>
    </div>
  )
}

export default Sidebar