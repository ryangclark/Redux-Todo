import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/actions';
import './Todo.css';

const Todo = props => {
    return (
        <React.Fragment>
            {props.todo.completed
                ?   <li
                        className="todo completed"
                        onClick={(event) => props.toggleTodoCompleted(event)}
                    >
                        {props.todo.value}
                        <button 
                            class="remove-todo"
                            onClick={event =>{
                                event.preventDefault();
                                props.dispatch(deleteTodo(props.todo.value));
                            }}
                        >
                            Remove
                        </button>
                    </li>
                :   <li
                        className="todo"
                        onClick={(event) => props.toggleTodoCompleted(event)}
                    >
                        {props.todo.value}
                        <button 
                            class="remove-todo"
                            onClick={event =>{
                                event.preventDefault();
                                props.dispatch(deleteTodo(props.todo.value));
                            }}
                        >
                            Remove
                        </button>
                    </li>
            }
        </React.Fragment>
    );
}

export default connect()(Todo);