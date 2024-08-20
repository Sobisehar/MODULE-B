import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables({ data }) {
  const navigate = useNavigate();

  const handleDeleteSubmit = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then((res) => {
        alert("Permanently Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundImage:
          "url(https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-ppt-cover-simple-geometry-image_793682.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <Table
        sx={{ minWidth: 700, width: "100%" }}
        aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="right">UserName</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e, i) => (
            <StyledTableRow key={e.id}>
              <StyledTableCell component="th" scope="row">
                {e.id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {e.name}
              </StyledTableCell>
              <StyledTableCell align="right">{e.email}</StyledTableCell>
              <StyledTableCell align="right">{e.username}</StyledTableCell>
              <StyledTableCell align="right">{e.phone}</StyledTableCell>
              <StyledTableCell align="right">
                <DeleteIcon
                  onClick={() => handleDeleteSubmit(e.id)}
                  sx={{ paddingRight: 3, color: "tomato" }}
                />
                <EditIcon
                  onClick={() => navigate(`/editUser/${e.id}`)}
                  sx={{ color: "gray", cursor: "pointer" }}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
