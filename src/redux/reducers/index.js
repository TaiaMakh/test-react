import { combineReducers } from "redux";
import { oompasReducer } from "./oompasReducer";

const reducers = combineReducers({
    oompasStorage: oompasReducer,
})

export default reducers;