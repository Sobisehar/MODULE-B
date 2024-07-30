import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Form = () => {
  return (
    <Container>
      <Stack>
        <div
          style={{
            border: "1px solid white",
            height: "100%",
            width: "55%",
            marginTop: "10%",
            backgroundColor: "white",
            boxShadow: "0px 0px 8px 0px",
            margin: "auto",
            fontFamily: "sans-serif",
            borderRadius: "10px",
            marginBottom: "10%",
          }}>
          <Container>
            <div style={{ marginTop: "20px", color: "gray" }}>
              <h1 style={{ marginTop: "5%" }}>Contact</h1>
              <br />
              <form>
                <label>
                  Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  style={{
                    height: "45px",
                    width: "100%",
                    marginTop: "20px",
                    color: "gray",
                    borderRadius: "5px",
                    border: "1px solid #7777",
                    paddingLeft: "2%",
                  }}
                  type="text"
                />

                <br />
                <br />

                <label>
                  Email<span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  style={{
                    height: "45px",
                    width: "100%",
                    marginTop: "20px",
                    color: "grey",
                    borderRadius: "5px",
                    border: "1px solid #7777",
                    paddingLeft: "2%",
                  }}
                  type="email"
                  placeholder="abc@gmail.com"
                />

                <br />
                <br />

                <label>
                  Phone Number<span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  style={{
                    height: "45px",
                    width: "100%",
                    marginTop: "20px",
                    color: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #7777",
                    paddingLeft: "2%",
                  }}
                  type="number"
                  placeholder="xxxxxxxxxxx"
                />

                <br />
                <br />

                <label>
                  Message<span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  style={{
                    height: "120px",
                    width: "100%",
                    marginTop: "20px",
                    color: "grey",
                    borderRadius: "5px",
                    border: "1px solid #7777",
                    paddingLeft: "2%",
                  }}
                  type="text"
                />
              </form>

              <button
                style={{
                  backgroundColor: "#006838",
                  color: "white",
                  height: "45px",
                  width: "100%",
                  border: "none",
                  marginTop: "20px",
                  fontSize: "15px",
                  borderRadius: "5px",
                  marginBottom: "35px",
                }}>
                Submit
              </button>
            </div>
          </Container>
        </div>
      </Stack>
    </Container>
  );
};

export default Form;
