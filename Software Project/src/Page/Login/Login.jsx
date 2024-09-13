import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Navigate, useNavigate } from "react-router-dom";
import { auth, database } from "../../config/firebase";
import styles from "./Login.module.css";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Signup", { state: { loginInfo: input } });
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPassword = async () => {
    if (!input.email) {
      alert("Please enter your email to reset your password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, input.email);
      alert("Password reset email sent! Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("Error sending password reset email. Please try again.");
    }
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <form onSubmit={handleLogin}>
            <h1>LOGIN</h1>
            <div className={styles.inputBox}>
              <input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <input
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <span className={styles.icon4} onClick={handlePasswordVisibility}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>
            <div className={styles.rememberForgot}>
              <label htmlFor="">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" onClick={handleForgotPassword}>
                Forget Password
              </a>
            </div>
            <button type="submit" className={styles.btn}>
              Login
            </button>
            <div className={styles.registerLink}>
              <p>
                Don't have an account? <span style={{cursor: 'pointer'}} onClick={()=> navigate('/Signup')}>Signup</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
