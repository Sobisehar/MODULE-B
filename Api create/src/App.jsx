import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import EditUser from "./Screen/EditUser";
import User from "./Screen/User";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="User" element={<User />} />
      <Route path="EditUser/:id" element={<EditUser />} />
    </Routes>
  );
};

export default App;
