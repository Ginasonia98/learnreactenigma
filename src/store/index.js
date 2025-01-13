import {combineReducers} from "redux";
import { counterReducer } from "./counter";
import { messageReducer } from "./message";
import { activitiesReducer } from "./activities";

export const reducers = combineReducers({
  counter: counterReducer,
  message: messageReducer,
  activities: activitiesReducer, // Menambahkan reducer activities
});