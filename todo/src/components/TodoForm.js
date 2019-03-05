import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const TodoForm = ({ dispatch }) => {
    // variable for Ref
    let input;

    return (
        <form
            className="todo-form"
            // the function below uses the `input` Ref
            onSubmit={event => {
                event.preventDefault();
                if (!input.value.trim()) {return;}
                dispatch(addTodo(input.value));
                input.value = '';
            }}
        >
            <label>
                Todo:<br></br>
                <input
                    placeholder="something need doing?"
                    name="todo"
                    ref={node => (input = node)}
                    type="text"
                />
            </label><br></br>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default connect()(TodoForm);