import React from "react";
import { Route, Routes } from "react-router-dom";  
import Signup from "./Screen/Signup/Signup";
import Login from './Screen/Login/Login'
import Dashboard from './Screen/Dashboard/Dashboard'

const App = () => {
  return (    
    <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
