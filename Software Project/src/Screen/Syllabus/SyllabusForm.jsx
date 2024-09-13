import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SyllabusForm.module.css";
import { database } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Styled input for file upload
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const SyllabusForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    subjectname: "",
    class: "",
  });
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [pdfFile, setPdfFile] = useState(null); // State to store uploaded PDF file

  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
  };

  const addData = async () => {
    try {
      let userInfo = {
        subjectname: input.subjectname,
        class: input.class,
        pdfFile,
      };

      const postData = await addDoc(
        collection(database, "Syllabus Form Data"),
        userInfo
      );

      console.log("User data added:", postData);
      alert("Syllabus Form successful!");

      navigate("/Dashboard/Syllabus/SyllabusList");
    } catch (error) {
      console.error("Error adding user data:", error);
      alert("Syllabus Form Error. Please try again.");
    }
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Syllabus Form Data"));

      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setUserData(arr);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      console.log("Uploaded file:", file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
            <h1 style={{ fontFamily: "initial", fontSize: "40px" }}>
              SYLLABUS ADDITION FORM
            </h1>

            <div className={styles.inputBox}>
              <label htmlFor="subjectname">Subject Name</label>
              <input
                name="subjectname"
                value={input.subjectname}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="text"
                placeholder="Enter your subject name"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="class">Class</label>
              <input
                name="class"
                value={input.class}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="number"
                placeholder="Enter your class"
                required
              />
            </div>

            {/* File Upload Button */}
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              className={styles.btn}>
              Upload PDF
              <VisuallyHiddenInput
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </Button>

            <button type="submit" className={styles.btn1}>
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SyllabusForm;
