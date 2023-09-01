import React from 'react';
import "../css/Dashboard.css";
import { TopBar } from '../components/TopBar';
import  { DataCard } from '../components/DataCard';
import  { Graph } from '../components/Graph';
import  { PieChart } from '../components/PieChart';
import  { Schedule } from '../components/Schedule';

export const Dashboard = () => {
  return (
    <div className='dashboard-comp' >
      <div className='topbar-div' >
        <TopBar />
      </div>
      <div className='data-card-div' >
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
      </div>
      <div className='graph-div' >
        <Graph />
      </div>
      <div className='bottom-div' >
        <PieChart />
        <Schedule />
      </div>
    </div>
  )
}
