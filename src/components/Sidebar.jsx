import React,  {useState} from "react";
import {Link, NavLink } from "react-router-dom";

import "../css/Sidebar.css";

import DashboardIcon from "../icons/dashboard_icon.png";
import TransactionIcon from "../icons/transaction_icon.png";
import ScheduleIcon from "../icons/schedules.png";
import UsersIcon from "../icons/user_icon.png";
import SerttingsIcon from "../icons/setting_icon.png";
import Menu from "../icons/burger-menu.png";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
    <div className="sidebar-top-bar" >
            <Link exact to="/" className="logo-text" > 
                    Board.
            </Link>
            <button className="menu-btn" onClick={() => setSidebar(!sidebar)} >
                  <img src={Menu} />
            </button>  
        </div>
    <div className='sidebar-div' id={sidebar ? "open" : "close"} >
      <div className='sidebar-top' >
        
        
        <div className="sidebar-logo" >
                <NavLink exact to="/" className="logo-text"  onClick={ () => {setSidebar(false)} }  > 
                    Board.
                </NavLink>      
            </div>
        
        <div className="sidebar-nav" >
                <NavLink exact to="/mainpage" className="link"  activeClassName="active" onClick={ () => {setSidebar(false)} }  ><img src={DashboardIcon} /> <span>Dashboard</span></NavLink>
                <NavLink exact to="/transactions" className="link"  activeClassName="active" onClick={ () => {setSidebar(false)} }  ><img src={TransactionIcon} /> <span>Transactions</span></NavLink>
                <NavLink exact to="/schedulespage" className="link"  activeClassName="active" onClick={ () => {setSidebar(false)} }  ><img src={ScheduleIcon} /> <span>Schedules</span></NavLink>
                <NavLink exact to="/users" className="link"  activeClassName="active" onClick={ () => {setSidebar(false)} }  ><img src={UsersIcon} /> <span>Users</span></NavLink>
                <NavLink exact to="/settings" className="link"  activeClassName="active" onClick={ () => {setSidebar(false)} }  ><img src={SerttingsIcon} /> <span>Settings</span></NavLink>
            </div>

      </div>
      <div className='sidebar-bottom' >
              <NavLink exact to="/help" className="link bottom"  activeClassName="active" onClick={ () => {setSidebar(false)} }  >Help</NavLink>
              <NavLink exact to="/contactus" className="link bottom"  activeClassName="active" onClick={ () => {setSidebar(false)} }  >Contact Us</NavLink>
      </div>
    </div>
    </>
  )
}
