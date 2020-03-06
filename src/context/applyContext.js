import React, { useReducer, useContext, createContext } from 'react';

const initialApply = {
    textInputs: {
        name: '',
        phonenumber: '',
        email: '',
        studentnumber: '',
        department: '',
        grade: '',
    },
};

function applyReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                textInputs: {
                    ...state.textInputs,
                    [action.name]: action.value,
                },
            };
        default:
            return state;
    }
}

const applyStateContext = createContext();
const applyDispatchContext = createContext();

export function ApplyProvider({ children }) {
    const [state, dispatch] = useReducer(applyReducer, initialApply);

    return (
        <applyStateContext.Provider value={state}>
            <applyDispatchContext.Provider value={dispatch}>{children}</applyDispatchContext.Provider>
        </applyStateContext.Provider>
    );
}

export function useApplyState() {
    const context = useContext(applyStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useApplyDispatch() {
    const context = useContext(applyDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
