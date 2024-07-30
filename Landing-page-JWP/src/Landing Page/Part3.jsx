import React from "react";
import image from "../assets/image3.jpg";
import line from "../assets/line.png";
import comma from "../assets/comma.png";

const Part3 = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <div style={{ padding: "6rem" }}>
        <img
          src={image}
          style={{ borderRadius: "100px", width: "200px" }}
          alt=""
        />
        <br />
        <img src={line} alt="" />
      </div>
      <div>
        <h1 style={{ color: "#006838", fontSize: "50px" }}>
          MUHAMMAD ALI MUGHAL
        </h1>
      </div>
      <div style={{ color: "gray", marginTop: "20px" }}>
        <p>Founder of Jawan Pakistan</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <img src={comma} alt="" />
      </div>
      <div style={{ color: "gray", marginTop: "25px" }}>
        <p>
          We aim to be most efficient provider of business process outsourcing
          services
        </p>
        <p>
          by setting the industry standards for cost and quality of services.
          Our long
        </p>
        <p>
          term success will be driven by our relentless focus on recruiting and
        </p>
        <p>
          developing the most talented pool of human capital in our industry.
        </p>
      </div>
      <br />
      <div
        style={{
          marginTop: "80px",
          border: "3px solid #fff",
          boxShadow: "0px 8px 10px 0px gray",
        }}></div>
    </div>
  );
};

export default Part3;
