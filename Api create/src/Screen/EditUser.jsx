import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const [editUser, setEditUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setEditUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3000/users/" + id, editUser)
      .then((res) => {
        alert("Updated Successfully...");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 30px 0px",
        marginLeft: "20%",
        marginTop: "3%",
      }}>
      <form onSubmit={handleSubmit}>
        <Paper sx={{ padding: 4 }}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 5,
              color: "white",
              backgroundColor: "teal",
              width: "25%",
              textAlign: "center",
            }}>
            Edit User
          </Typography>
          <TextField
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            name="name"
            value={editUser.name || ""}
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            onChange={(e) =>
              setEditUser({ ...editUser, username: e.target.value })
            }
            name="username"
            value={editUser.username || ""}
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            onChange={(e) =>
              setEditUser({ ...editUser, email: e.target.value })
            }
            name="email"
            value={editUser.email || ""}
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            onChange={(e) =>
              setEditUser({ ...editUser, phone: e.target.value })
            }
            name="phone"
            value={editUser.phone || ""}
            sx={{ mb: 3 }}
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ color: "white", backgroundColor: "teal", width: "25%" }}>
            Done
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default EditUser;
