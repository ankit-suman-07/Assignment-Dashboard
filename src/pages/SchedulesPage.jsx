import React from 'react';
import "../css/SchedulesPage.css";
import { Sidebar } from '../components/Sidebar';
import { ScheduleDB } from '../helper/ScheduleDB';
import { ScheduleRow } from '../components/ScheduleRow';
import { colors } from '../helper/ScheduleDB';

export const SchedulesPage = () => {
  return (
    <div className='schedule-page-comp' >
        <Sidebar />
        <div className='schedule-page-div' >
          <div className='top-bar-head' >
            Schedules
          </div>
          <div className='schedule-list' >
      {
        ScheduleDB.map((schedule, idx) => {
          return(
             <ScheduleRow id={idx} schedule={schedule}  color={colors[idx%7]} />
          );
        })
      }
      </div>
        </div>
    </div>
  )
}
