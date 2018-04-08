import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../todo.css'

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
		return <li className={`${completed ? 'todo-completed' : 'todo-yetto-complete'}`}
				   onClick={this.markCompleted}>{text}</li>;
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
