import {EDIT_TODO_INPUT_TEXT_CHANGE, EDIT_TODO_TEXT, SAVE_TODO_TEXT} from "../actions/todo-item";

const editTodoText = (state = '', {type, id, text}) => {
	switch (type) {
		case EDIT_TODO_INPUT_TEXT_CHANGE:
			return text;
		case EDIT_TODO_TEXT:
			return {id, text};
		case SAVE_TODO_TEXT:
			return {};
		default:
			return state;
	}
};

export default editTodoText;