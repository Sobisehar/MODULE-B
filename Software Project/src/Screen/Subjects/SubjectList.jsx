import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubjectsData();
  }, []);

  const fetchSubjectsData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Subject Add Data"));
      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setSubjects(arr);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const handleAddClick = () => {
    navigate("/Dashboard/Subjects/SubjectRegistration");
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ minHeight: "100vh", marginTop: "5%" }}>
      <Grid item xs={12} md={10}>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            textAlign: "center",
            marginBottom: "16px",
            fontWeight: "bold",
            fontSize: "40px",
            color: "#21445D",
            fontFamily: "initial",
          }}>
          SUBJECT LIST
        </Typography>
        <Grid
          container
          justifyContent="flex-end"
          style={{ marginBottom: "16px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#21445D" }}
            onClick={handleAddClick}>
            Add New Subject
          </Button>
        </Grid>
        <TableContainer
          component={Paper}
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#19969e" }}>
                <TableCell
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}>
                  ID
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}>
                  Subject Name
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}>
                  Class
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}>
                  Group
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow
                  key={subject.id}
                  style={{
                    backgroundColor: "aliceblue",
                    borderBottom: "2px solid #ddd",
                  }}>
                  <TableCell>{subject.id}</TableCell>
                  <TableCell>{subject.subjectname}</TableCell>
                  <TableCell>{subject.class}</TableCell>
                  <TableCell>{subject.selectgroup}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SubjectsList;
