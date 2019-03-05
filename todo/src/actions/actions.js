export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETE';

export const toggleTodoCompleted = todoText => {
    return {
        type: TOGGLE_COMPLETED,
        payload: todoText
    };
};