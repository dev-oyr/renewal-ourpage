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
    tech: ['cccccc'],
    dateFields: {
        birthday: new Date().toLocaleDateString(),
    },
};

function applyReducer(state, action) {
    const { name, phonenumber, email, studentnumber, department, grade } = state.textInputs;
    const { form0, form1 } = state.fieldInputs;
    const { gender, duty } = state.selects;
    const { birthday } = state.dateFields;
    const { ok, err } = action;
    const errFields = {};
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
        case 'DATE':
            return {
                ...state,
                dateFields: {
                    ...state.dateFields,
                    [action.name]: action.value,
                },
            };
        case 'TECH':
            console.log('-----------------------', state.tech.concat(action.value));
            return {
                tech: state.tech.concat(action.value),
            };

        case 'CHECK_STEP1':
            Object.keys(state.textInputs).forEach(key => {
                !state.textInputs[key] ? (errFields[key] = true) : (errFields[key] = false);
            });
            Object.keys(state.selects).forEach(key => {
                !state.selects[key] ? (errFields[key] = true) : (errFields[key] = false);
            });
            Object.keys(state.dateFields).forEach(key => {
                !state.dateFields[key] ? (errFields[key] = true) : (errFields[key] = false);
            });
            if (name && phonenumber && email && birthday && studentnumber && department && grade && gender && duty) {
                ok(errFields);
            } else {
                console.warn('something is empty');
                err(errFields);
            }
            return state;
        case 'CHECK_STEP2':
            Object.keys(state.fieldInputs).forEach(key => {
                !state.fieldInputs[key] ? (errFields[key] = true) : (errFields[key] = false);
            });
            if (form0 && form1) {
                ok(errFields);
            } else {
                console.warn('something is empty');
                err(errFields);
            }
            return state;
        case 'FIREBASE_PATCH':
            console.log('firebase patch');
            dbCtrl.submitApplication(
                '2020-1',
                {
                    stdNo: state.textInputs.studentnumber,
                    birthday: state.dateFields.birthday,
                    email: state.textInputs.email,
                    gender: state.selects.gender,
                    grade: state.textInputs.grade,
                    introduce: state.fieldInputs.form1,
                    major: state.textInputs.department,
                    military: state.selects.duty,
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
                        console.log('Success!');
                        ok(res);
                    },
                    onError(e) {
                        console.log('Failed...');
                        err(e);
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
