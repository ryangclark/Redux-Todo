import { TOGGLE_COMPLETED } from '../actions/actions';

const initialState = {
    todoList: [
        {value: 'Walk the dog.', completed: false},
        {value: 'Feed the dog.', completed: true},
        {value: 'Bathe the dog.', completed: false}
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_COMPLETED:
            return {
                // spread out the previous state first
                ...state,
                // then, update based on action.type
                todoList: state.todoList.map(todo => {
                    return todo.value === action.payload
                    ? {...todo, completed: !todo.completed}
                    : todo
                })
            }
        default:
            return state;
    }
}