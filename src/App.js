import Mockman from "mockman-js";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Navbar from './components/navbar/Navbar';
import Trending from "pages/sidebar-pages/trending/Trending";
import Playlist from "pages/sidebar-pages/playlist/Playlist";
import WatchLater from "pages/sidebar-pages/watchlater/WatchLater";
import Liked from "pages/sidebar-pages/liked/Liked";
import History from "pages/sidebar-pages/history/History";
import Sidebar from "components/sidebar/Sidebar";
// import All from "pages/category-pages/All";
import Music from "pages/category-pages/Music";
import Tech from "pages/category-pages/Tech";
import World from "pages/category-pages/World";
import Badge from "components/badge/Badge";
import VideoPage from "pages/videoPage/VideoPage";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">

      <Navbar />
      {!isLoginPage && <Sidebar />}
      <Sidebar />
      {/* <Badge /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/watchlater' element={<WatchLater />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='/history' element={<History />} />
        {/* <Route path='/all' element={<All />} /> */}
        <Route path='/music' element={<Music />} />
        <Route path='/Tech' element={<Tech />} />
        <Route path='/world' element={<World />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
