import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo.css'
import TodoTextCont from "../containers/todo-text-cont";

class Todo extends Component {
	constructor(props) {
		super(props);
		
		this.markCompleted = this.markCompleted.bind(this);
	}
	
	markCompleted() {
		let { id, markCompleted } = this.props;
		markCompleted(id);
	}
	
	render() {
		let { completed, text } = this.props;
		return (
			<li className={`todo-item ${completed ? 'todo-completed' : 'todo-notcomplete'}`}
			    onClick={this.markCompleted}>
				<TodoTextCont text={text}/>
			</li>
		);
	}
}

Todo.proptypes = {
	markCompleted: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

Todo.defaultProps = {
	completed: false,
	text: '',
};

export default Todo;
