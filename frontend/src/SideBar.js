import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
const Sidebar = (props) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="grey" backgroundColor="white" style={{  boxShadow: "5px 0px 7px 0px rgba(77,75,75,0.3)" }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            ChestRay
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/home">
              <CDBSidebarMenuItem icon="columns" style={{ color: 'grey' }}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/user">
              <CDBSidebarMenuItem icon="user" style={{ color: 'grey' }}>My Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/generateReport">
              <CDBSidebarMenuItem icon="table" style={{ color: 'grey' }}>Generate Report</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/history">
              <CDBSidebarMenuItem icon="history" style={{ color: 'grey' }}>History</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center', textDecoration: "none" }}>
        <NavLink exact to="" onClick={props.logOut}>
            <div
              style={{
                padding: '0px 45px 380px 5px',
                color: "grey",
                textDecoration: "none"
              }}
            >
              Log Out
            </div>
          </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
export default Sidebar;