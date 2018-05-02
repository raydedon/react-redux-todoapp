export const EDIT_TODO_INPUT_TEXT_CHANGE = 'EDIT_TODO_INPUT_TEXT_CHANGE';
export const EDIT_TODO_TEXT = 'EDIT_TODO_TEXT';
export const SAVE_TODO_TEXT = 'SAVE_TODO_TEXT';

export const onEditTodoTextChange = editTodoText => ({
	type: EDIT_TODO_INPUT_TEXT_CHANGE,
	editTodoText
});

export const onEditTodoText = (id, text) => ({
	type: SAVE_TODO_TEXT,
	id,
	text
});

export const onSaveTodoText = (id, text) => ({
	type: SAVE_TODO_TEXT,
	id,
	text
});
