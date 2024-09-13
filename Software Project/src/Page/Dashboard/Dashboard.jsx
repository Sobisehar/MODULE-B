import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ButtonAppBar from "../../Component/ButtonAppBar/ButtonAppBar";

const Dashboard = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 1,
        }}></div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <ButtonAppBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
