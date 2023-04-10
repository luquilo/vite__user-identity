import React from "react";
import { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault()
    console.log('submit!')
  }

  return (
    <div className="styles.container">
      <form onSubmit={addUserHandler} className={styles.form}>

        <div className={styles['form-wrapper']}>
          <label htmlFor="username" className={styles.label}>
            username
          </label>
          <input id="username" type="text" className={styles.input} />
        </div>


        <div className={styles['form-wrapper']}>
          <label htmlFor="age" className={styles.label}>
            age (years)
          </label>
          <input id="age" type="number" className={styles.input} />
        </div>


        <button type="submit" className={styles.button}>Add User</button>
        

      </form>
    </div>
  );
};

export default AddUser;
