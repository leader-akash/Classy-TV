import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";

import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from 'contexts/user-context';
import { SidebarProvider } from 'contexts/sidebar-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

makeServer();


root.render(
  
  <React.StrictMode>
  <Router>
  <UserProvider >
  <SidebarProvider>
    <App />
  </SidebarProvider>
  </UserProvider>
  </Router>
  </React.StrictMode>
  
);
