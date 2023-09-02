import React,  {useState} from "react";
import {Link, NavLink } from "react-router-dom";

import "../css/Sidebar.css";

import DashboardIcon from "../icons/dashboard_icon.png";
import TransactionIcon from "../icons/transaction_icon.png";
import ScheduleIcon from "../icons/schedules.png";
import UsersIcon from "../icons/user_icon.png";
import SerttingsIcon from "../icons/setting_icon.png";

export const Sidebar = () => {
  const [navbar, setNavBar] = useState(false);
  return (
    <div className='sidebar-div' >
      <div className='sidebar-top' >
        
        <div className="sidebar-logo" >
                <Link exact to="/" className="logo-text" > 
                    Board.
                </Link>     
            </div>
        
        <div className="sidebar-nav" >
                <NavLink exact to="/" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  ><img src={DashboardIcon} /> <span>Dashboard</span></NavLink>
                <NavLink exact to="/transactions" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  ><img src={TransactionIcon} /> <span>Transactions</span></NavLink>
                <NavLink exact to="/schedulespage" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  ><img src={ScheduleIcon} /> <span>Schedules</span></NavLink>
                <NavLink exact to="/users" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  ><img src={UsersIcon} /> <span>Users</span></NavLink>
                <NavLink exact to="/settings" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  ><img src={SerttingsIcon} /> <span>Settings</span></NavLink>
            </div>

      </div>
      <div className='sidebar-bottom' >
              <NavLink exact to="/help" className="link bottom"  activeClassName="active" onClick={ () => {setNavBar(false)} }  >Help</NavLink>
              <NavLink exact to="/contactus" className="link bottom"  activeClassName="active" onClick={ () => {setNavBar(false)} }  >Contact Us</NavLink>
      </div>
    </div>
  )
}
