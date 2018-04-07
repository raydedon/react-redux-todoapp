import React, { Component } from 'react';
import PropTypes from "prop-types";
import TodoListApp from "./todo-list-app";

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = { todoText: '' };
		
		this.onAddTodoTextChange = this.onAddTodoTextChange.bind(this);
		this.createAddTodoItem = this.createAddTodoItem.bind(this);
	}
	
	onAddTodoTextChange(e) {
		this.setState({todoText: e.currentTarget.value});
	}
	
	createAddTodoItem(e) {
		let { createAddTodoItem } = this.props;
		let { todoText } = this.state;
		createAddTodoItem(todoText);
		this.setState({todoText: ''});
	}
	
	render() {
		let { onAddTodoTextChange } = this.props;
		let { todoText } = this.state;
		return (
			<form>
				<input type="text" onChange={this.onAddTodoTextChange} value={todoText}/>
				<button type="button" onClick={this.createAddTodoItem}>+</button>
			</form>
		);
	}
}

AddTodo.proptypes = {
	createAddTodoItem: PropTypes.func.isRequired,
};

export default AddTodo;


