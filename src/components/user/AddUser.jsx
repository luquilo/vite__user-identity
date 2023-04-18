import React from "react";
import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("submit!");
  };

  return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username" >
              username
            </label>
            <input id="username" type="text"  />

            <label htmlFor="age" >
              age (years)
            </label>
            <input id="age" type="number"  />

          <button type="submit" >
            Add User
          </button>
        </form>
    </Card>
  );
};

export default AddUser;
