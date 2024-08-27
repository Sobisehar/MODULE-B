import React from "react";
import "./App.css";
import ToDo from "./ToDo App/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ToDo />} />
    </Routes>
  );
};

export default App;
