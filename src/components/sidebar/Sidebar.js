// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from 'contexts/sidebar-context';

const Sidebar = () => {
  const location = useLocation();

  const isActiveLink = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <>
      <div className={`sidebar-container ${false ? '' : 'hidden'}`}>

        {/* <div className='sidebar-container'> */}

        <div className='item-container'>
          <Link
            className='side-links'
            to='/'
          >
            <div className={`sidebar-items ${isActiveLink('/') ? 'active-text' : ''}`}>
              <i className='side-icons fa-solid fa-house' /> Home
            </div>
          </Link>
          <Link
            className='side-links'
            to='/trending'
          >
            <div className={`sidebar-items ${isActiveLink('/trending') ? 'active-text' : ''}`}>
              <i className='side-icons fas fa-fire'></i> Trending
            </div>
          </Link>
          <Link
            className='side-links'
            to='/history'
          >
            <div className={`sidebar-items ${isActiveLink('/history') ? 'active-text' : ''}`}>
              <i className='side-icons fas fa-history'></i> History
            </div>
          </Link>
          <Link
            className='side-links'
            to='/playlist'
          >
            <div className={`sidebar-items ${isActiveLink('/playlist') ? 'active-text' : ''}`}>
              <i className='side-icons fas fa-list'></i> Playlist
            </div>
          </Link>
          <Link
            className='side-links'
            to='/liked'
          >
            <div className={`sidebar-items ${isActiveLink('/liked') ? 'active-text' : ''}`}>
              <i className='side-icons fas fa-thumbs-up'></i> Liked
            </div>
          </Link>
          <Link
            className='side-links'
            to='/watchlater'
          >
            <div className={`sidebar-items ${isActiveLink('/watchlater') ? 'active-text' : ''}`}>
              <i className='side-icons fas fa-clock'></i> Watch Later
            </div>
          </Link>

          <div className='profile-links'>
          <Link className='contact-link' to="https://www.linkedin.com/in/hi-akash/" target='_blank'><i class="fa-brands fa-linkedin"></i></Link>
          <Link className='contact-link' to="https://github.com/leader-akash" target='_blank'><i class="fa-brands fa-github"></i> </Link>
          <Link className='contact-link' to="https://twitter.com/AkashAk50675432" target='_blank'><i class="fa-brands fa-twitter"></i></Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
