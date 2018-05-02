import { combineReducers } from 'redux';
import list from './todos';
import todoText from "./add-todo";
import editTodoText from "./edit-todo";

const rootReducer = combineReducers({
	list,
	todoText,
	editTodoText
});

export default rootReducer;