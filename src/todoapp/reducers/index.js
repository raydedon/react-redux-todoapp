import { combineReducers } from 'redux';
import list from './todos';
import todoText from "./add-todo";

const rootReducer = combineReducers({
	list,
	todoText
});

export default rootReducer;