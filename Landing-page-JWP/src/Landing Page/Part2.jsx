import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import image2 from "../assets/image2.png";
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
    <Container fixed>
      <Box sx={{ width: "100%", marginTop: "200px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Item style={{ boxShadow: "none" }}>
              <img src={image2} style={{ width: "300px" }} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Item style={{ boxShadow: "none", textAlign: "left" }}>
              <h1 style={{ color: "#006838", marginTop: "15px" }}>
                Mission And Vision <br />
                Behind Jawan Pakistan
              </h1>

              <p style={{ marginTop: "15px" }}>
                Our vision is to bring our students into the 21st century
                through innovation and modern technology. To create a better
                every day life for every people. This program is not only
                impacting the youth in monetary perspective but it is also
                creating some deep-rooted, long-term psychological effects e.g.
                minimizing frustration among the unemployed youth.
              </p>
              <br />
              <p>
                Our mission is to provide high quality education that connects
                young people with opportunities to transform their lives. The
                educated youngsters who remain unemployed gets frustrated,
                depressed and disheartened when they do not succeed in getting
                their dream jobs. This training reinforces the educated youth to
                earn well through freelancing, develop variety of skills through
                specified domains and promote entrepreneurial culture that
                diverts youths potentials for constructive purposes. This energy
                diversion definitely make the youth more confident, self-reliant
                and constructive asset for a progressing economy.
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
