import React from 'react';
import {Link } from "react-router-dom";
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
      <div className='schedule-task-1' >
        <span className='schedule-name' >Schedule Name</span>
        <span className='schedule-time' >Schedule Name</span>
        <span className='schedule-location' >Schedule Name</span>
      </div>
      <div className='schedule-task-2' >
        <span className='schedule-name' >Schedule Name</span>
        <span className='schedule-time' >Schedule Name</span>
        <span className='schedule-location' >Schedule Name</span>
      </div>
    </div>
  )
}
