import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate, useLocation } from "react-router-dom";
import { database } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [input, setInput] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify login data with signup data
    const verificationResult = verifyLoginData();

    if (verificationResult === "verified") {
      // If verification is successful, add user data to Firestore
      addData();
    } else {
      alert(verificationResult);
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const addData = async () => {
    try {
      let userInfo = {
        Firstname: input.Firstname,
        Lastname: input.Lastname,
        email: input.email,
        password: input.password,
        rememberMe: rememberMe,
      };

      const postData = await addDoc(
        collection(database, "Signup Data"),
        userInfo
      );

      console.log("User data added:", postData);
      alert("Signup successful!");

      navigate("/Dashboard");
    } catch (error) {
      console.error("Error adding user data:", error);
      alert("Error signing up. Please try again.");
    }
  };

  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Signup Data"));

      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setUserData(arr);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Function to verify login data with signup data
  const verifyLoginData = () => {
    if (location.state?.loginInfo) {
      const { email: loginEmail, password: loginPassword } =
        location.state.loginInfo;
      const { email: signupEmail, password: signupPassword } = input;

      // Check if both email and password are incorrect
      if (loginEmail !== signupEmail && loginPassword !== signupPassword) {
        return "Incorrect email and password. Please try again.";
      }

      // Check if login email matches the signup email
      if (loginEmail !== signupEmail) {
        return "Incorrect email. Please try again.";
      }

      // Check if login password matches the signup password
      if (loginPassword !== signupPassword) {
        return "Incorrect password. Please try again.";
      }

      // If both match
      return "verified";
    }
    return "Login information not provided. Please login first.";
  };

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <h1>SIGNUP</h1>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              name="Firstname"
              value={input.Firstname}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              label="First Name"
              variant="outlined"
              required
            />
            <TextField
              name="Lastname"
              value={input.Lastname}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              label="Last Name"
              variant="outlined"
              required
            />
            <TextField
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              label="Email"
              type="email"
              variant="outlined"
              required
            />
            <TextField
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={handlePasswordVisibility}
                    style={{
                      color: "black",
                      position: "absolute",
                      right: "5px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "20px",
                    }}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </Button>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className={styles.Checkbox}
                />
              }
              label="Remember Me"
            />
            <Button type="submit" variant="contained" className={styles.btn}>
              Signup
            </Button>
          </Box>
          <div className={styles.registerLink}>
            <p>
              Already have an account? <span style={{cursor: 'pointer'}} onClick={()=>navigate("/")}>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
