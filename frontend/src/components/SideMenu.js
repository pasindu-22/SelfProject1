import React from 'react';
import {useNavigate} from 'react-router-dom';
import "antd/dist/reset.css";
import {Menu} from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons/lib/icons";

function SideMenu() {
    const navigate = useNavigate();
    return (
      <Menu 
        onClick={({key})=> {
          if (key === "signout") {
            // ToDo: implement signout logic
          } else {
            navigate(key);
          }
         }}
        defaultSelectedKeys={[window.location.pathname]}  //prop to set the default selected menu item
        items={[
          {
            label:"Home",key:"/", 
            icon: <HomeOutlined/>},
          {
            label:"Dashboard",
            key:"/dashboard", 
            icon: <DashboardOutlined/>},
          {
            label:"Users List",
            key:"/userlist", 
            icon: <UnorderedListOutlined/>,
            children: [
            {label: "Active Users", key:"/active"},
            {label: "Inactive Users", key:"/inactive"},
          ]},
          {
            label:"New Admin",
            key:"/admin/new", 
            icon: <UserOutlined/>},
          {
            label:"Signout",
            key:"/signout", 
            icon: <PoweroffOutlined/>, 
            danger: true},
        ]}>
  
        </Menu> );
    
  }

export default SideMenu;