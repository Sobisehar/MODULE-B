import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";


const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "", 
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if(input.firstName === loggeduser.firstName &&
      input.lastName === loggeduser.lastName && input.email === loggeduser.email && input.password === loggeduser.password
    ){
        localStorage.setItem("loggedin", true)
        navigate("/Dashboard");
      }
      else{
        alert("Invalid Credentials");
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
                name="firstName"
                value={input.firstName}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="text"
                placeholder="Enter First Name"
                required
              />
              <span className={styles.icon1}>
                <FaUser />
              </span>
            </div>
            <div className={styles.inputBox}>
              <input
                name="lastName"
                value={input.lastName}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="text"
                placeholder="Enter Last Name"
                required
              />
              <span className={styles.icon2}>
                <FaUser />
              </span>
            </div>
            <div className={styles.inputBox}>
              <input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="text"
                placeholder="Enter Email"
                required
              />
              <span className={styles.icon3}>
                <MdEmail />
              </span>
            </div>
            <div className={styles.inputBox}>
              <input
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="password"
                placeholder="Enter Password"
                required
              />
              <span className={styles.icon4}>
                <FaLock />
              </span>
            </div>
            <div className={styles.rememberForgot}>
              <label htmlFor="">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forget Password</a>
            </div>
            <button type="submit" className={styles.btn}>
              Login
            </button>
            <div className={styles.registerLink}>
              <p>
                Don't have an account? <a href="/Signup">Signup</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;