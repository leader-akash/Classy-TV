import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";

import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from 'contexts/user-context';
import { SidebarProvider } from 'contexts/sidebar-context';
import { VideosProvider } from 'contexts/videos-context';
import { FilterProvider } from 'contexts/filter-context';
import { WatchLaterProvider } from 'contexts/watchLater-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

makeServer();


root.render(

  <React.StrictMode>
    <Router>
      <UserProvider >
        <VideosProvider>
          <WatchLaterProvider>
            <FilterProvider>
              <SidebarProvider>
                <App />
              </SidebarProvider>
            </FilterProvider>
          </WatchLaterProvider>
        </VideosProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>

);
