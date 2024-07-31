import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "antd/dist/reset.css";
import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AdminForm from './Forms/AdminForm';



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
      <Route path="/" element={Home}></Route>
      <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
      <Route path="/active" element={<div>Active</div>}></Route>
      <Route path="/inactive" element={<div>Inactive</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
      <Route path="/signout" element={<div>Signout</div>}></Route>
      <Route path="/admin/new" element={<AdminForm/>}></Route>
    </Routes>
  </div> 
}

export default App;
