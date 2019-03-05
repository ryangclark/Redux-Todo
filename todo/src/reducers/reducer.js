import { DELETE_TODO } from '../actions/actions';
import { NEW_TODO } from '../actions/actions';
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
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo =>
                    todo.value !== action.todoText)
            }
        case NEW_TODO:
            const newTodo = {
                value: action.todoText,
                completed: false
            };
            return {
                ...state,
                todoList: [...state.todoList, newTodo]
            };
        case TOGGLE_COMPLETED:
            return {
                // spread out the previous state first
                ...state,
                // then, update based on action.type
                todoList: state.todoList.map(todo => {
                    return todo.value === action.todoText
                    ? {...todo, completed: !todo.completed}
                    : todo
                })
            };
        default:
            return state;
    }
}