import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/Login");
  };
  return (
    <>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
            <h1>SIGNUP</h1>
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
              Signup
            </button>
            <div className={styles.registerLink}>
              <p>
                Don't have an account? <a href="/Login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
