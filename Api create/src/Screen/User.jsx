import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users", user)
      .then((res) => {
        alert("Create Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 5,
            color: "white",
            backgroundColor: "teal",
            width: "25%",
            textAlign: "center",
          }}>
          Create User
        </Typography>
        <TextField
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          sx={{ mb: 3 }}
          fullWidth
          label="Full Name"
        />
        <TextField
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          sx={{ mb: 3 }}
          fullWidth
          label="User Name"
        />
        <TextField
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          sx={{ mb: 3 }}
          fullWidth
          label="Email"
        />
        <TextField
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          sx={{ mb: 3 }}
          fullWidth
          label="Phone"
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ color: "white", backgroundColor: "teal", width: "15%" }}>
          {" "}
          Create
        </Button>
      </Paper>
    </form>
  );
};

export default User;
