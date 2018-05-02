import { connect } from 'react-redux';
import TodoText from '../components/todo-text'
import {onEditTodoTextChange} from "../actions/add-todo";

const mapStateToProps = (state, ownProps) => ({
	editTodoText: state.editTodoText,
	text: ownProps.text
});


const mapDispatchToProps = dispatch => ({
	onEditTodoTextChange: text => dispatch(onEditTodoTextChange(text)),
	onEditTodoTextChange: text => dispatch(onEditTodoTextChange(text)),
	onEditTodoTextChange: text => dispatch(onEditTodoTextChange(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoText);
