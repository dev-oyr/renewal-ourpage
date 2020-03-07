import React, { useReducer, useContext, createContext } from 'react';

const initialApply = {
    textInputs: {
        name: '',
        phonenumber: '',
        email: '',
        studentnumber: '',
        department: '',
        grade: '',
        project_name: '',
        project_summary: '',
        tech: '',
        github: '',
        subdata: '',
    },
    fieldInputs: {
        form0: '',
        form1: '',
        form2: '',
        desc: '',
    },
    selects: {
        gender: '',
        duty: '',
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
        case 'CHANGE_FIELD':
            return {
                ...state,
                fieldInputs: {
                    ...state.fieldInputs,
                    [action.name]: action.value,
                },
            };
        case 'SELECT':
            return {
                ...state,
                selects: {
                    ...state.selects,
                    [action.name]: action.value,
                },
            };
        case 'FIREBASE_PATCH':
            return {};
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
