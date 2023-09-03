import React from 'react';


export const ScheduleRow = ({ id, schedule, color }) => {
  return (
    <div className='schedule-task' style={{ borderLeft: `5px solid ${color}` }} >
        <span className='schedule-name' >{schedule.task}</span>
        <span className='schedule-time' >{ schedule.start_time } - { schedule.end_time }</span>
        <span className='schedule-location' >{ schedule.address }</span>
      </div>
  )
}
