import React, { useReducer, useContext, createContext } from 'react';
import { dbCtrl } from '../database/DBCtrl';

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
        case 'TECH':
            return {};
        case 'CHECK_STEP1':
            const { name, phonenumber, email, studentnumber, department, grade } = initialApply.textInputs;
            return state;
        case 'FIREBASE_PATCH':
            dbCtrl.submitApplication(
                '2020-1',
                {
                    stdNo: state.textInputs.studentnumber,
                    birthday: '199',
                    email: state.textInputs.email,
                    gender: action.gender,
                    grade: state.textInputs.grade,
                    introduce: state.fieldInputs.form1,
                    major: state.textInputs.department,
                    military: action.duty,
                    motive: state.fieldInputs.form0,
                    myWish: state.fieldInputs.form2,
                    name: state.textInputs.name,
                    phone: state.textInputs.phonenumber,
                    projDetail: state.fieldInputs.desc,
                    projGithub: state.textInputs.github,
                    projName: state.textInputs.project_name,
                    projOtherLink: state.textInputs.subdata,
                    projSummary: state.textInputs.project_summary,
                    projTechStacks: '[]',
                },
                {
                    onSuccess(res) {
                        action.onSuccess(res);
                    },
                    onError(err) {
                        action.onError(err);
                    },
                },
            );
            return state;
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
