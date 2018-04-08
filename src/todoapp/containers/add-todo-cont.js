import { connect } from 'react-redux';
import {createTodo, onAddTodoTextChange} from "../actions/add-todo";
import AddTodo from "../components/add-todo";

const mapStateToProps = state => ({
	todoText: state.todoText
});

const mapDispatchToProps = dispatch => ({
	createAddTodoItem: text => dispatch(createTodo(text)),
	onAddTodoTextChange: text => dispatch(onAddTodoTextChange(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);