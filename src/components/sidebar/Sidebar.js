// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from 'contexts/sidebar-context';

const Sidebar = () => {
  const location = useLocation();

  const {showSidebar} = useSidebar();

 

  const isActiveLink = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <>
      <div className={`sidebar-container ${false ? '' : 'hidden'}`}>
    
    {/* <div className='sidebar-container'> */}
    
      <div className='item-container'>
        <Link
          className={`side-links ${isActiveLink('/') ? 'active' : ''}`}
          to='/'
        >
          <div className={`sidebar-items ${isActiveLink('/') ? 'active-text' : ''}`}>
            <i className='side-icons fa-solid fa-house' /> Home
          </div>
        </Link>
        <Link
          className={`side-links ${isActiveLink('/trending') ? 'active' : ''}`}
          to='/trending'
        >
          <div className={`sidebar-items ${isActiveLink('/trending') ? 'active-text' : ''}`}>
            <i className='side-icons fas fa-fire'></i> Trending
          </div>
        </Link>
        <Link
          className={`side-links ${isActiveLink('/history') ? 'active' : ''}`}
          to='/history'
        >
          <div className={`sidebar-items ${isActiveLink('/history') ? 'active-text' : ''}`}>
            <i className='side-icons fas fa-history'></i> History
          </div>
        </Link>
        <Link
          className={`side-links ${isActiveLink('/playlist') ? 'active' : ''}`}
          to='/playlist'
        >
          <div className={`sidebar-items ${isActiveLink('/playlist') ? 'active-text' : ''}`}>
            <i className='side-icons fas fa-list'></i> Playlist
          </div>
        </Link>
        <Link
          className={`side-links ${isActiveLink('/liked') ? 'active' : ''}`}
          to='/liked'
        >
          <div className={`sidebar-items ${isActiveLink('/liked') ? 'active-text' : ''}`}>
            <i className='side-icons fas fa-thumbs-up'></i> Liked
          </div>
        </Link>
        <Link
          className={`side-links ${isActiveLink('/watchlater') ? 'active' : ''}`}
          to='/watchlater'
        >
          <div className={`sidebar-items ${isActiveLink('/watchlater') ? 'active-text' : ''}`}>
            <i className='side-icons fas fa-clock'></i> Watch Later
          </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
