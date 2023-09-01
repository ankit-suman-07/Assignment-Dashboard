import React from 'react';
import "../css/MainPage.css";
import { TopBar } from '../components/TopBar';
import { Sidebar } from '../components/Sidebar';
import  { DataCard } from '../components/DataCard';
import  { Graph } from '../components/Graph';
import  { PieChart } from '../components/PieChart';
import  { Schedule } from '../components/Schedule';

export const MainPage = () => {
  return (
    <div>
        Main Page
        <Sidebar />
        <TopBar />
        <div className='data-card-div' >
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
        
        <Graph />
        <PieChart />
        <Schedule />
        
    </div>
  )
}
