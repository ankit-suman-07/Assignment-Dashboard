import React from 'react';
import "../css/MainPage.css";
import { Sidebar } from '../components/Sidebar';
import { Dashboard } from './Dashboard';

export const MainPage = () => {
  return (
    <div className='main-page-comp' >
        <Sidebar />
        <Dashboard />
        
    </div>
  )
}
