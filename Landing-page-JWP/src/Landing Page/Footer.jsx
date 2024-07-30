import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Capture from "../assets/Capture-removebg-preview.png";
import { Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box>
      <Box
        sx={{ flexGrow: 1, bgcolor: "white" }}
        style={{ marginBottom: "5%" }}>
        <hr />
        <Container>
          <Grid container spacing={4} style={{ marginTop: "1%" }}>
            <Grid item xs style={{}}>
              <img src={Capture} alt="" />
            </Grid>

            <Grid item xs={4}>
              <Typography
                sx={{
                  color: "darkgreen",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "15px",
                }}>
                COMPANY
              </Typography>
              <br />

              <Link
                sx={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif";',
                  textDecoration: "none",
                  color: "#006838",
                  opacity: "0.8",
                }}>
                Home
              </Link>
              <br />

              <Link
                sx={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif";',
                  textDecoration: "none",
                  color: "#006838",
                  opacity: "0.8",
                }}>
                About us
              </Link>
              <br />

              <Link
                sx={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif";',
                  textDecoration: "none",
                  color: "#006838",
                  opacity: "0.8",
                }}>
                Trainings
              </Link>
              <br />

              <Link
                sx={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif";',
                  textDecoration: "none",
                  color: "#006838",
                  opacity: "0.8",
                }}>
                Contact us
              </Link>
              <br />
            </Grid>

            <Grid item xs>
              <Typography
                sx={{
                  color: "darkgreen",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "15px",
                }}>
                CONTACT DETAILS
              </Typography>
              <br />

              <Link
                sx={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
                  textDecoration: "none",
                  color: "#006838",
                  opacity: "0.8",
                }}>
                Muhammad Ali Mughal
              </Link>
              <br />

              <Link
                sx={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
                  textDecoration: "none",
                  color: "#006838",
                  opacity: "0.8",
                }}>
                +923005292675
              </Link>
              <br />

              <Link
                sx={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
                  textDecoration: "none",
                  color: "#006838",
                  opacity: "0.8",
                }}>
                jawantechpk@gmail.com
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box style={{ backgroundColor: "aliceblue" }}>
        <Container>
          <Box sx={{ width: "100%" }}>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Box
                  style={{
                    color: "grey",
                    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif";',
                  }}>
                  © 2022 JawanPakistan
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box style={{ textAlign: "end", color: "grey" }}>
                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedinIn />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
