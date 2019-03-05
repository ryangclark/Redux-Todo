export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETE';

export const addTodo = todoText => {
    return {
        type: NEW_TODO,
        todoText
    };
};

export const toggleTodoCompleted = todoText => {
    return {
        type: TOGGLE_COMPLETED,
        todoText
    };
};