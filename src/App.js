import React, { useState } from "react";
import { MainCard, GreyLine } from "./StyledComponents";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TodoList from "./TodoList";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjK7mLayFGChOjvXP6VCf_f3w82ZRqTOQ",
  authDomain: "react-firebase-todolist-84701.firebaseapp.com",
  projectId: "react-firebase-todolist-84701",
  storageBucket: "react-firebase-todolist-84701.appspot.com",
  messagingSenderId: "856315925188",
  appId: "1:856315925188:web:a4145024f53ab4184b2f91",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("tried to add new todo", newTodoValue);
  };

  return (
    <Grid container justify="center">
      <MainCard>
        <Typography variant="h2" gutterBottom>
          Todo List
        </Typography>
        <GreyLine />

        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
            id="standard-basic"
            label="new Todo"
            value={newTodoValue}
            onChange={(e) => setNewTodoValue(e.target.value)}
          />
        </form>

        <TodoList />
      </MainCard>
    </Grid>
  );
};

export default App;
