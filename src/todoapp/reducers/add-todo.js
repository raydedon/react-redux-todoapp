import {ADD_TODO_INPUT_TEXT_CHANGE} from "../actions/add-todo";

const todoText = (state = '', {type, text}) => {
	switch (type) {
		case ADD_TODO_INPUT_TEXT_CHANGE:
			return text;
		default:
			return state;
	}
}

export default todoText;