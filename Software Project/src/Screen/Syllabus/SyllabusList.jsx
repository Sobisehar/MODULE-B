import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../config/firebase";
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
import { useNavigate } from "react-router-dom";

const SyllabusList = () => {
  const [syllabusData, setSyllabusData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSyllabusData();
  }, []);

  const fetchSyllabusData = async () => {
    try {
      const data = [];
      const querySnapshot = await getDocs(
        collection(database, "Syllabus Form Data")
      );
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setSyllabusData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleAddClick = () => {
    navigate("/Dashboard/Syllabus/SyllabusForm");
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
          Syllabus List
        </Typography>
        <Grid
          container
          justifyContent="flex-end"
          style={{ marginBottom: "16px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#21445D" }}
            onClick={handleAddClick}>
            Add
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
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  ID
                </TableCell>
                <TableCell
                  style={{
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  Subject Name
                </TableCell>
                <TableCell
                  style={{
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  Class
                </TableCell>
                <TableCell
                  style={{
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  PDF File
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {syllabusData.map((item) => (
                <TableRow
                  key={item.id}
                  style={{
                    backgroundColor: "aliceblue",
                    borderBottom: "2px solid #ddd",
                  }}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.subjectname}</TableCell>
                  <TableCell>{item.class}</TableCell>
                  <TableCell>
                    {item.pdfFile ? (
                      <Button
                        variant="contained"
                        color="primary"
                        href={item.pdfFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textTransform: "none" }}>
                        View PDF
                      </Button>
                    ) : (
                      "No File"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SyllabusList;
