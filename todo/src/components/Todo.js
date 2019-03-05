import React from 'react';
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
                    </li>
                :   <li
                        className="todo"
                        onClick={(event) => props.toggleTodoCompleted(event)}
                    >
                        {props.todo.value}
                    </li>
            }
        </React.Fragment>
    );
}

export default Todo;