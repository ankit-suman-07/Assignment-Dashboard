import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthDetails } from './helper/AuthDetails';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap your entire app with AuthDetails */}
    <AuthDetails>
      {/* <TopBar /> */}
      <App />
      {/* Add other components here */}
    </AuthDetails>
    
  </React.StrictMode>
);