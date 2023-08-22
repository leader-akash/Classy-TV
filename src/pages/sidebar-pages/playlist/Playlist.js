import React, { useEffect, useState } from 'react';
import "./Playlist.css";
import { usePlaylist } from 'contexts/playlist-context';
import PlaylistModal from 'components/modal/PlaylistModal';
import HorizontalCard from 'components/horizontalCard/HorizontalCard';
import Sidebar from 'components/sidebar/Sidebar';
import { useFilter } from 'contexts/filter-context';
import { useUser } from 'contexts/user-context';
import { useNavigate } from 'react-router-dom';

const Playlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {setSearchItem} = useFilter();
  const {getToken} = useUser();

  const { allPlaylistNames, setAllPlaylistNames, selectedPlaylistVideos, getPlaylistVideos, handleDeletePlaylist } = usePlaylist();

  const [currPlaylist, setCurrPlaylist] = useState([]);
  const navigate = useNavigate();

  const playlistId = selectedPlaylistVideos?._id;

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    setSearchItem("");
  },[])

  const openModal = () => {
    if(getToken){
    setIsOpen(true);
    }
    else{
      navigate("/login")
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <div>
      <Sidebar />

      <h2 className='side-pages-style'><u>Your Playlists</u></h2>
      <div className='playlist-container'>
        <div className='playlist-sidebar'>
          <button className='create-new-playlist-btn' onClick={openModal}> Create New Playlist</button>
          {allPlaylistNames?.map((el) => (
            <div className={`playlist-name-sidebar ${el._id === playlistId ? 'active-plyalist-name' : ''}`} key={el?._id} onClick={() => getPlaylistVideos(el?._id)}>
              {el?.title}
            </div>
          ))}
        </div>

        <div className='playlist-horizontal-card'>
          {allPlaylistNames?.some((el) => el?._id === selectedPlaylistVideos?._id) && selectedPlaylistVideos?.videos?.length ?
            selectedPlaylistVideos?.videos?.map((el, i) => (
              <div >
                <button className='delete-playlist-btn' onClick={() => handleDeletePlaylist(playlistId)}>Delete this Playlist</button>
                <HorizontalCard
                 details={el.details} 
                  fromPage={"playlist"}
                 />
              </div>
            )) : 
            <div className='playlist-tour'>
            <p className='playlist-icon'><i className='side-icons fas fa-list'></i></p>
            Your playlist videos will appear here !! 
            </div>
            }
        </div>
      </div>

      <PlaylistModal
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Playlist;
