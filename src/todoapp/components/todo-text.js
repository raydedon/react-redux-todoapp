import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoText extends Component {
	constructor(props) {
		super(props);
		
		this.editTodo = this.editTodo.bind(this);
		this.saveTodo = this.saveTodo.bind(this);
		this.onEditTodoTextChange = this.onEditTodoTextChange.bind(this);
	}
	
	editTodo(e) {
		e.stopPropagation();
		let {id, text, onEditTodoText} = this.props;
		onEditTodoText(id, text);
	}
	
	saveTodo(e) {
		e.stopPropagation();
		let {id, editTodoText, onSaveTodoText} = this.props;
		onSaveTodoText(id, editTodoText);
	}
	
	onEditTodoTextChange(e) {
		let {onEditTodoTextChange} = this.props;
		onEditTodoTextChange(e.currentTarget.value);
	}

	render() {
		let {text, editTodoText} = this.props;
		return (
			<div className={}>
				<div className="readonly-todo">
					<span className={'todo-text'}>{text}</span>
					<a href={'#'} onClick={this.editTodo} className="todo-text-edit"><i class="fas fa-pencil-alt"></i></a>
				</div>
				<div className="edit-todo">
					<input type="text" value={editTodoText} onChange={this.onEditTodoTextChange} className={'todo-input'}/>
					<a href={'#'} onClick={this.editTodo} className="todo-text-save"><i class="fas fa-check"></i></a>
				</div>
			</div>
		)
	}
}

export default TodoText;
