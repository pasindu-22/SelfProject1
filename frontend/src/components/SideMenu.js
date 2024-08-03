import React from 'react';
import {useNavigate} from 'react-router-dom';
import "antd/dist/reset.css";
import {Menu} from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  PoweroffOutlined,
  ProductOutlined ,
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
            label:"Home",
            key:"/home", 
            icon: <HomeOutlined/>},
          {
            label:"Dashboard",
            key:"/dashboard", 
            icon: <DashboardOutlined/>},
          {
            label:"Management",
            key:"/management", 
            icon: <UnorderedListOutlined/>,
            children: [
            {label: "Managers", key:"/management/managers"},
            {label: "Branches", key:"/management/branches"},
          ]},
          {
              label:"New",
              key:"/new", 
              icon: <ProductOutlined />,
              children: [
              {label: "Manager", key:"/new/manager"},
              {label: "Branch", key:"/new/branch"},
              {label: "Customer", key:"/new/customer"},
          ]},
          {
            label:"Signout",
            key:"/", 
            icon: <PoweroffOutlined/>, 
            danger: true},
        ]}>
  
        </Menu> );
    
  }

export default SideMenu;