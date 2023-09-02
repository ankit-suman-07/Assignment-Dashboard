import React from 'react';
import "../css/Dashboard.css";
import { TopBar } from '../components/TopBar';
import  { DataCard } from '../components/DataCard';
import  { Graph } from '../components/Graph';
import  { PieChart } from '../components/PieChart';
import  { Schedule } from '../components/Schedule';

import RevenueIcon from "../icons/revenue.png";
import Transactionicon from "../icons/transaction.png";
import LikesIcon from "../icons/likes.png";
import UsersIcon from "../icons/users.png";

export const Dashboard = () => {
  return (
    <div className='dashboard-comp' >
      <div className='topbar-div' >
        <TopBar />
      </div>
      <div className='data-card-div' >
          <DataCard  title={"Total Revenues"} data={"$" + 2129430} icon={RevenueIcon} color={"#DDEFE0"} />
          <DataCard  title={"Total Transactions"} data={1520} icon={Transactionicon} color={"#F4ECDD"} />
          <DataCard  title={"Total Likes"} data={9721} icon={LikesIcon} color={"#EFDADA"} />
          <DataCard  title={"Total Users"} data={892} icon={UsersIcon} color={"#DEE0EF"} />
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
