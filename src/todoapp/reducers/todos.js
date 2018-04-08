import {TODO_MARK_COMPLETED} from "../actions";
import {ADD_TODO} from "../actions/add-todo";

const list = (state = [], {type, text = '', completed = false, id}) => {
	switch(type) {
		case ADD_TODO:
			return [...state, {text, completed: false, id}];
		case TODO_MARK_COMPLETED:
			return state.map(i => {
				return i.id === id ? {...i, completed: !i.completed} : i
			});
		default:
			return state;
	}
};

export default list;