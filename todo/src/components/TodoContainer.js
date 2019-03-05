import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { toggleTodoCompleted } from '../actions/actions';

class TodoContainer extends Component {

    toggleTodoCompleted = event => {
        // event.preventDefault(); // Not sure I need this...
        console.log('toggleTodoCompleted() event: ', event.target.textContent);
        this.props.toggleTodoCompleted(event.target.textContent);
    };

    render() {
        return (
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
        );
    };
};

const mapStateToProps = (state) => {
    return { todoList: state.todoList }
};

export default connect(mapStateToProps, { toggleTodoCompleted })(TodoContainer);