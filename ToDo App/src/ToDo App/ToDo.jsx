import React, { useState } from 'react'
import styles from './ToDo.module.css'
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const ToDo = () => {
const [inpVal , setinputVal] = useState('');
const [allInput, setallInput] = useState([]);

const inpChange = (e)=>{
  setinputVal(e.target.value);
  // e.preventDafault()
}

const inpAdd= () =>{
  if (inpVal.trim()){
    setallInput((e)=>[...e, inpVal])
    setinputVal(' ')
  }
  else{
    alert("Please Enter")
  }
}

const inpAllDlt = () =>{
  setallInput([ ]);
};

const liDelete = (index) => {
  setallInput(allInput.filter((e, i) => i !== index));
};

const liEdit = (index) => {
  let editVal = prompt("Enter New Value");
  let newInputArray = [...allInput]; 
  newTodoArray[index] = editVal;
  setallInput(newInputArray); 
};


  return (
    <div className={styles.bg}>
      <div className={styles.top}>
        <input onChange={inpChange} className={styles.inp} type="text" placeholder='Enter Your Name'/>
        <Button onClick={inpAdd} className={styles.btn} variant="outline-secondary">Add</Button>{' '}
        <Button onClick={inpAllDlt} className={styles.btn} variant="outline-secondary">Delete</Button>{' '}
      </div>


      <div>
        {allInput.map((e, i) => {
          return (
            <div key={i}>
              <ul className={`mt-5 ${styles.list}`}>
                <li>
                  {e}
                  <span className={styles.icon}>
                   <FaUserEdit onClick={() => liEdit(i)}/>
                    <MdDelete onClick={() => liDelete(i)}/>
                  </span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>





    </div>



  )
}

export default ToDo