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
import VideoPage from "pages/videoPage/VideoPage";
import RestrictAuth from "components/auth-route/RestrictAuth";
import RequireAuth from "components/auth-route/RequireAuth";

function App() {
  const location = useLocation();

  return (
    <div className="App">

      <Navbar />
      <Routes>

        <Route element={<RestrictAuth />} >
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>

        <Route element={<RequireAuth />}>
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/playlist/:playlistId' element={<Playlist />} />
        </Route>

        <Route path='/' element={<Homepage />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/watchlater' element={<WatchLater />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='/history' element={<History />} />
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
