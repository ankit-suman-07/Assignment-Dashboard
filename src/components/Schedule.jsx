import React from 'react';
import {Link } from "react-router-dom";
import { ScheduleDB } from '../helper/ScheduleDB';
import { ScheduleRow } from './ScheduleRow';
import { colors } from '../helper/ScheduleDB';
import "../css/Schedule.css";

export const Schedule = () => {


  return (
    <div className='schedule-comp' >
      <div className='schedule-title-div' > 
        <span className='schedule-title-span' >Today's Schedule</span> 
        <Link exact to="/schedulespage" className="schedule-all" >
          <span>View All &gt; </span>
        </Link>
      </div>
      
      <div className='schedule-list' >
      {
        ScheduleDB.map((schedule, idx) => {
          return(
             (idx < 2) && <ScheduleRow id={idx} schedule={schedule}  color={colors[idx]} />
          );
        })
      }
      </div>
      
    </div>
  )
}
