import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";

import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from 'contexts/user-context';
import { VideosProvider } from 'contexts/videos-context';
import { FilterProvider } from 'contexts/filter-context';
import { WatchLaterProvider } from 'contexts/watchLater-context';
import { PlaylistProvider } from 'contexts/playlist-context';
import { HistoryProvider } from 'contexts/history-context';
import { LikeProvider } from 'contexts/like-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

makeServer();


root.render(

  <React.StrictMode>
    <Router>
      <UserProvider >
        <VideosProvider>
          <LikeProvider>
            <HistoryProvider>
              <FilterProvider>
                <PlaylistProvider>
                  <WatchLaterProvider>
                      <App />
                  </WatchLaterProvider>
                </PlaylistProvider>
              </FilterProvider>
            </HistoryProvider>
          </LikeProvider>
        </VideosProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>

);
