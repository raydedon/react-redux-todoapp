export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_INPUT_TEXT_CHANGE = 'ADD_TODO_INPUT_TEXT_CHANGE';

let nextTodoId = 0;

export const createTodo = text => ({
	type: ADD_TODO,
	id: ++nextTodoId,
	text,
	completed: false
});

export const onAddTodoTextChange = text => ({
	type: ADD_TODO_INPUT_TEXT_CHANGE,
	text
});

