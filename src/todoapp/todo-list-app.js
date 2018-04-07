import React, { Component } from 'react';
import isEmpty from "lodash/isEmpty";
import TodoList from "./todo-list";
import AddTodo from "./add-todo";

class TodoListApp extends Component {
	constructor(props) {
		super(props);
		
		this.state = { list: []};
		
		this.markCompleted = this.markCompleted.bind(this);
		this.createTodo = this.createTodo.bind(this);
	}
	
	markCompleted(id) {
		let { list } = this.state;
		this.setState({
			list: list.map(i => {
				return i.id === id ? {...i, completed: true} : i
			})
		});
	}
	
	createTodo(text) {
		if(isEmpty(text)) return;
		
		let { list } = this.state;
		this.setState({
			list: [...list, {text: text, completed: false, id: (list.length+1)}]
		});
	}
	
	render() {
		let { list } = this.state;
		return (
			<div>
				<AddTodo createAddTodoItem={this.createTodo}/>
				<TodoList list={list} markCompleted={this.markCompleted}/>
			</div>
		);
	}
}

export default TodoListApp;

