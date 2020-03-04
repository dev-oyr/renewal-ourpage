import React, { useReducer, createContext, useContext, useRef } from 'react';

function todoReducer(state, action) {
    switch (action.type) {
        case 'URL':
            return state.url;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const urlStateContext = createContext();
const urlDispatchContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, '/');

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
