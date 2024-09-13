import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SubjectRegistration.module.css";
import { database } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const SubjectAdd = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    subjectname: "",
    class: "",
    selectgroup: "",
  });
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
  };

  const addData = async () => {
    try {
      let userInfo = {
        subjectname: input.subjectname,
        class: input.class,
        selectgroup: input.selectgroup,
      };

      //  Firestore mai data save karna
      const postData = await addDoc(
        collection(database, "Subject Add Data"),
        userInfo
      );

      console.log("User data added:", postData);
      alert("Subject Add successful!");

      navigate("/Dashboard/Subjects/SubjectList");
    } catch (error) {
      console.error("Error adding user data:", error);
      alert("Subject Adding Error. Please try again.");
    }
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Subject Add Data"));

      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setUserData(arr);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
            <h1 style={{ fontFamily: "initial", fontSize: "40px" }}>
              SUBJECT ADDITION FORM
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

            <div className={styles.inputBox}>
              <label>
                Select group{" "}
                <span style={{ fontWeight: "bold", marginTop: "20px" }}>:</span>
              </label>
              <div className={styles.checkboxGroup}>
                <label>
                  <input
                    type="radio"
                    name="selectgroup"
                    value="General Science"
                    checked={input.selectgroup === "General Science"}
                    onChange={(e) =>
                      setInput({ ...input, selectgroup: e.target.value })
                    }
                  />
                  General Science
                </label>
                <label>
                  <input
                    type="radio"
                    name="selectgroup"
                    value="Pre-Engineering"
                    checked={input.selectgroup === "Pre-Engineering"}
                    onChange={(e) =>
                      setInput({ ...input, selectgroup: e.target.value })
                    }
                  />
                  Pre-Engineering
                </label>
                <label>
                  <input
                    type="radio"
                    name="selectgroup"
                    value="Computer-Science"
                    checked={input.selectgroup === "Computer-Science"}
                    onChange={(e) =>
                      setInput({ ...input, selectgroup: e.target.value })
                    }
                  />
                  Computer-Science
                </label>
              </div>
            </div>

            <button type="submit" className={styles.btn}>
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubjectAdd;
