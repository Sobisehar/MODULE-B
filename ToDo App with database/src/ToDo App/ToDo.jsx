import React, { useState, useEffect } from "react";
import styles from "./ToDo.module.css";
import Button from "react-bootstrap/Button";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import db from "../config/Firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const ToDo = () => {
  const [inpVal, setinputVal] = useState("");
  const [allInput, setallInput] = useState([]);
  const todosCollectionRef = collection(db, "todos");

  // Fetch todos from Firebase
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      setallInput(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchTodos();
  }, []);

  const inpChange = (e) => {
    const value = e.target.value;
    // Capitalize first letter
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setinputVal(capitalizedValue);
  };

  const inpAdd = async () => {
    if (inpVal.trim()) {
      await addDoc(todosCollectionRef, { name: inpVal });
      setinputVal("");
      const data = await getDocs(todosCollectionRef);
      setallInput(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } else {
      alert("Please Enter");
    }
  };

  const inpAllDlt = async () => {
    const data = await getDocs(todosCollectionRef);
    data.docs.forEach(async (document) => {
      await deleteDoc(doc(db, "todos", document.id));
    });
    setallInput([]);
  };

  const liDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    setallInput(allInput.filter((e) => e.id !== id));
  };

  const liEdit = async (id) => {
    let editVal = prompt("Enter New Value");
    if (editVal) {
      editVal = editVal.charAt(0).toUpperCase() + editVal.slice(1);
      const todoDoc = doc(db, "todos", id);
      await updateDoc(todoDoc, { name: editVal });
      setallInput(
        allInput.map((e) => (e.id === id ? { ...e, name: editVal } : e))
      );
    }
  };

  return (
    <div className={styles.bg}>
      <div className={styles.top}>
        <input
          onChange={inpChange}
          value={inpVal}
          className={styles.inp}
          type="text"
          placeholder="Enter Your Name"
        />
        <Button
          onClick={inpAdd}
          className={styles.btn}
          variant="outline-secondary">
          Add
        </Button>{" "}
        <Button
          onClick={inpAllDlt}
          className={styles.btn}
          variant="outline-secondary">
          Delete
        </Button>{" "}
      </div>

      <div>
        {allInput.map((e) => {
          return (
            <div key={e.id}>
              <div className={`mt-5 ${styles.list}`}>
                <div style={{ textTransform: "" }}>
                  {e.name}
                  <span className={styles.icon}>
                    <FaUserEdit
                      onClick={() => liEdit(e.id)}
                      style={{ color: "teal" }}
                    />
                    <MdDelete
                      onClick={() => liDelete(e.id)}
                      style={{ color: "gray", marginLeft: "15px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
