import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const TodoForm = ({ dispatch }) => {
    // variable for Ref
    let inputElement = React.createRef();

    return (
        <form
            className="todo-form"
            // the function below uses the `inputElement` Ref
            onSubmit={event => {
                event.preventDefault();
                if (!inputElement.value.trim()) {return;}
                dispatch(addTodo(inputElement.value));
                inputElement.value = '';
            }}
        >
            <label>
                Todo:<br></br>
                <input
                    placeholder="something need doing?"
                    name="todo"
                    ref={node => (inputElement = node)}
                    type="text"
                />
            </label><br></br>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default connect()(TodoForm);