import React from 'react';
import "../css/SchedulesPage.css";
import { Sidebar } from '../components/Sidebar';

export const SchedulesPage = () => {
  return (
    <div className='schedule-page-comp' >
        <Sidebar />
        <div className='schedule-page-div' >
        <div className='top-bar-head' >
          Schedules
        </div>
        </div>
    </div>
  )
}
