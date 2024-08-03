import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "antd/dist/reset.css";
import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AdminForm from './Forms/AdminForm';
import BranchForm from './Forms/BranchForm';
import ManagerList from './Lists/ManagerList';
import BranchList from './Lists/BranchList';
import LoginForm from './Forms/LoginForm';
import CustomerForm from './Forms/CustomerForm';



function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",flex:1, height:"100vh", background:"#b7dcfa"}}>
      <Header/>
      <div style={{display:"flex",flexDirection:"row",flex:1, backgroundColor:"#b7dcfa"}}>
        <SideMenu/>
        <Content/>
      </div>
      <Footer/>
    </div>
    
    
  );
}
 

// define routes
function Content() {
  return <div>  
    <Routes>
      <Route path="/login" element={LoginForm}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
      <Route path="/signout" element={<div>Signout</div>}></Route>
      <Route path="/new/manager" element={<AdminForm/>}></Route>
      <Route path="/new/branch" element={<BranchForm/>}></Route>
      <Route path="/new/customer" element={<CustomerForm/>}></Route>
      <Route path="/management/managers" element={<ManagerList/>}></Route>
      <Route path="/management/branches" element={<BranchList/>}></Route>
    </Routes>
  </div> 
}

export default App;
