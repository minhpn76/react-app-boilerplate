import {AppReducerType} from "./types";
import homeReducer from '../modules/home/redux'
import { combineReducers } from "redux";
import languageRecuder from "../languages/redux";
import { loadingBarReducer } from 'react-redux-loading-bar';


export default combineReducers({
  [AppReducerType.LANGUAGE]: languageRecuder,
  [AppReducerType.HOME]: homeReducer,
});
