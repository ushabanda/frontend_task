// src/reducers/index.js
import { combineReducers } from "redux";
// Import other reducers here
import userReducer from "./userReducer";
import editedReducer from "./editedReducer";

const rootReducer = combineReducers({
  userState: userReducer, // Use your actual reducers here
  editedUser: editedReducer,
});

export default rootReducer;
