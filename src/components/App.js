import "../App.css";
import AppRouter from "./Router/Router";
import React, { useReducer } from "react";
import { toDoActionTypes } from "../actionTypes";

export const AppContext = React.createContext();

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case toDoActionTypes.COUNTER_INCREMENT:
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload };
    default:
      throw new Error();
  }
}

function App() {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      <div className="main-wrapper">
        <AppRouter />
      </div>
    </AppContext.Provider>
  );
}

export default App;
