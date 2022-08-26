import React, {createContext, useReducer, useEffect} from "react";
import {createUserProfileDocument, onAuthStateChangedListener} from "../firebase/Firebase.Utils";
import {createAction} from "../reducer/Reducer.utils";

// as the actual value you want to access
// default value of context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const {type, payload} = action;

    switch (USER_ACTION_TYPES.SET_CURRENT_USER) {
        case 'SET_CURRENT_USER':
            // returns an object with the previous state spread and the new value (payload)
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}

// Provider that will wrap up other components and allow us to use the user context
export const UserProvide = ({children}) => {

    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            setCurrentUser(user);
            if (user) {
                await createUserProfileDocument(user);
            }
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}