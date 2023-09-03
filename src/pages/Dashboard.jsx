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
  const revenue = 2129430;
  const transaction = 1520;
  const likes = 9721;
  const users = 892;

  const formattedRevenue = revenue.toLocaleString('en-US', {
    
  });
  const formattedTransaction = transaction.toLocaleString('en-US', {
    
  });
  const formattedLikes = likes.toLocaleString('en-US', {
    
  });
  const formattedUsers = users.toLocaleString('en-US', {
    
  });
  return (
    <div className='dashboard-comp' >
      <div className='topbar-div' >
        <TopBar />
      </div>
      <div className='data-card-div' >
          <DataCard  title={"Total Revenues"} data={"$" + formattedRevenue} icon={RevenueIcon} color={"#DDEFE0"} />
          <DataCard  title={"Total Transactions"} data={formattedTransaction} icon={Transactionicon} color={"#F4ECDD"} />
          <DataCard  title={"Total Likes"} data={formattedLikes} icon={LikesIcon} color={"#EFDADA"} />
          <DataCard  title={"Total Users"} data={formattedUsers} icon={UsersIcon} color={"#DEE0EF"} />
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
