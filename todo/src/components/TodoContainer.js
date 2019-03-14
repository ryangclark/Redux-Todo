import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import TodoForm from './TodoForm';
import { toggleTodoCompleted } from '../actions/actions';

class TodoContainer extends Component {

    // handleTodoSubmit(event) {
    //     event.preventDefault();
    //     console.log('handleTodoSubmit value: ', event.target[0].value);
    //     this.props.handleTodoSubmit(event.target[0].value);
    // }

    toggleTodoCompleted = event => {
        // event.preventDefault(); // Not sure I need this...
        console.log('toggleTodoCompleted() event: ', event.target.textContent);
        this.props.toggleTodoCompleted(event.target.textContent);
    };

    render() {
        return (
            <>
                <TodoForm /> {/* handleTodoSubmit={this.handleTodoSubmit} */}
                <ul className="todo-list">
                    {/* Map through the list of todos */}
                    {this.props.todoList.map((todo, index) => 
                        <Todo
                            key={index}
                            todo={todo}
                            toggleTodoCompleted={this.toggleTodoCompleted}
                        />
                    )}
                </ul>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return { todoList: state.todoList }
};

export default connect(mapStateToProps, { toggleTodoCompleted })(TodoContainer);