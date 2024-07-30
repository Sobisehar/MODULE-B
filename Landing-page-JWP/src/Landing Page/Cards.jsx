import * as React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Cards = () => {
  return (
    <Container>
      <Box
        style={{
          marginTop: "200px",
          textAlign: "center",
          fontFamily: "sans-serif",
          color: "#006838",
          fontSize: "25px",
        }}>
        <h1>IT Trainings offering in Jawan Pakistan</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          rowGap: "30px",
          columnGap: "50px",
        }}>
        <Box style={{ backgroundColor: "5px solid red", marginTop: "100px" }}>
          <img src={card1} alt="" />
          <h4
            style={{
              fontFamily: "sans-serif",
              marginTop: "10px",
              color: "#000000DE",
              fontSize: "16px roboto, Helvetica",
            }}>
            Web and Mobile Application Development
          </h4>
        </Box>

        <Box style={{ marginTop: "100px" }}>
          <img src={card2} alt="" />
          <h4 style={{ fontFamily: "sans-serif", marginTop: "10px" }}>
            Flutter Mobile Application Development
          </h4>
        </Box>

        <Box style={{ marginTop: "100px" }}>
          <img src={card3} alt="" />
          <h4 style={{ fontFamily: "sans-serif", marginTop: "10px" }}>
            Graphic Design And Video Editing
          </h4>
        </Box>

        <Box style={{ marginTop: "100px" }}>
          <img src={card4} alt="" />
          <h4 style={{ fontFamily: "sans-serif", marginTop: "10px" }}>
            Digital And Social Media Marketing
          </h4>
        </Box>

        <Box style={{ marginTop: "100px" }}>
          <img src={card5} alt="" />
          <h4 style={{ fontFamily: "sans-serif", marginTop: "10px" }}>
            BlockChain Development
          </h4>
        </Box>
      </Box>

      <div
        style={{
          marginTop: "80px",
          border: "3px solid #fff",
          boxShadow: "0px 8px 10px 0px gray",
        }}></div>
    </Container>
  );
};

export default Cards;
