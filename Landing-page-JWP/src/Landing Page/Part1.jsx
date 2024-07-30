import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "../assets/image1.png";
import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Container>
      <Box sx={{ width: "100%", marginTop: "100px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Item style={{ boxShadow: "none", textAlign: "left" }}>
              {" "}
              <h1
                style={{
                  color: "#006838",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}>
                Introduction To <br />
                Jawan Pakistan
              </h1>{" "}
              <p style={{ marginTop: "15px" }}>
                The foundation of every state is the education and skills set of
                its youth. Jawan Pakistan is such an organization of Pakistan
                who is not only working on youth education but also enhancing
                skills set in youth either Free of cost or in a very low cost.
                This initiative, initially developed by a single person and with
                almost no seed capital, promotes entrepreneurship and innovation
                and Sustainable Development Goal, which promotes inclusive and
                sustainable economic growth.
              </p>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Item style={{ boxShadow: "none" }}>
              <img src={Image} style={{ width: "300px" }} alt="" />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
