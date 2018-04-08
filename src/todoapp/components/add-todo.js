import React, { Component } from 'react';
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.onAddTodoTextChange = this.onAddTodoTextChange.bind(this);
		this.createAddTodoItem = this.createAddTodoItem.bind(this);
	}
	
	onAddTodoTextChange(e) {
		let { onAddTodoTextChange } = this.props;
		onAddTodoTextChange(e.currentTarget.value);
	}
	
	createAddTodoItem(e) {
		let { createAddTodoItem, todoText, onAddTodoTextChange } = this.props;
		if(isEmpty(todoText)) return;
		createAddTodoItem(todoText);
		onAddTodoTextChange('');
	}
	
	render() {
		let { todoText } = this.props;
		return (
			<form>
				<input type="text" onChange={this.onAddTodoTextChange} value={todoText} placeholder="type..."/>
				<button type="button" onClick={this.createAddTodoItem}>+</button>
			</form>
		);
	}
}

AddTodo.proptypes = {
	createAddTodoItem: PropTypes.func.isRequired,
};

export default AddTodo;


