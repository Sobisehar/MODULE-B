import React from "react";
import style from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import "../../App.css";


const Dashboard = () => {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const userName = loggedUser ? `${loggedUser.firstName} ${loggedUser.lastName}` : "User";

  const handleLogout = (e) => {
    e.preventDefault();
    // localStorage.removeItem("loggedin");
    navigate("/Login");
  }


  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <div>
          <h1>DASHBOARD PAGE</h1>
        </div>
        <div>
          <h2>WELCOME</h2>
          <h2>{userName}</h2>
        </div>
        <button onClick={handleLogout} type="submit" className={style.btn}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;