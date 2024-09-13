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

const ClassList = () => {
  const [classData, setClassData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const data = [];
      const querySnapshot = await getDocs(
        collection(database, "Class Registration Data")
      );
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setClassData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleAddClick = () => {
    navigate("/Dashboard/Class/ClassRegisForm");
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
          Class List
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
                  First Name
                </TableCell>
                <TableCell
                  style={{
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  Last Name
                </TableCell>
                <TableCell
                  style={{
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  Email
                </TableCell>
                <TableCell
                  style={{
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  Phone Number
                </TableCell>
                <TableCell
                  style={{
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  DateofBirth
                </TableCell>
                <TableCell
                  style={{
                    color: "beige",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  Qualification
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
                  Gender
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classData.map((item) => (
                <TableRow
                  key={item.id}
                  style={{
                    backgroundColor: "aliceblue",
                    borderBottom: "2px solid #ddd",
                  }}>
                  <TableCell>{item.id}</TableCell> {/* Display ID */}
                  <TableCell>{item.Firstname}</TableCell>
                  <TableCell>{item.Lastname}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phoneNo}</TableCell>
                  <TableCell>{item.dateOfBirth}</TableCell>
                  <TableCell>{item.qualification}</TableCell>
                  <TableCell>{item.class}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ClassList;
