import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "../Component/Table";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(" http://localhost:3000/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(userData)

  return (
    <Box>
      <Button
        onClick={() => navigate("/User")}
        sx={{
          marginBottom: 5,
          float: "right",
          marginTop: 3,
          boxShadow: "10px 10px 10px 10px",
          backgroundColor: "teal",
        }}
        variant="contained">
        Create new User
      </Button>
      <Table data={userData} />
    </Box>
  );
};

export default Home;
