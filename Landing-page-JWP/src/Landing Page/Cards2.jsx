import * as React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Cards2 = () => {
  return (
    <Stack>
      <Box>
        <h1
          style={{
            fontFamily: "sans-serif",
            color: "#006838",
            marginTop: "8%",
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "8%",
          }}>
          Glimpses of sessions conducted by Jawan Pakistan
        </h1>
      </Box>
      <Box>
        <ul
          style={{
            gap: "4px",
            display: "inline-flex",
            flexWrap: "wrap",
            marginLeft: "4%",
          }}>
          <li
            sx={3}
            style={{
              height: "246px",
              gridColumnEnd: "span1",
              gridRowEnd: "span2",
            }}>
            <img src={Img1} alt="" />
          </li>
          <li
            sx={3}
            style={{
              height: "246px",
              gridColumnEnd: "span1",
              gridRowEnd: "span2",
            }}>
            <img src={Img2} alt="" />
          </li>
          <li
            sx={6}
            style={{
              height: "246px",
              gridColumnEnd: "span2",
              gridRowEnd: "span2",
            }}>
            <img src={Img3} alt="" />
          </li>
          <li
            sx={6}
            style={{
              height: "246px",
              gridColumnEnd: "span2",
              gridRowEnd: "span2",
            }}>
            <img src={Img4} alt="" />
          </li>
          <li
            sx={3}
            style={{
              height: "246px",
              gridColumnEnd: "span1",
              gridRowEnd: "span2",
              marginTop: "12.5%",
            }}>
            <img src={Img5} alt="" />
          </li>
          <li
            sx={3}
            style={{
              height: "246px",
              gridColumnEnd: "span1",
              gridRowEnd: "span2",
              marginTop: "12.5%",
              marginBottom: "15%",
            }}>
            <img src={Img6} alt="" />
          </li>
        </ul>
        <hr />
      </Box>
    </Stack>
  );
};

export default Cards2;
