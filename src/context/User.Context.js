import React, {createContext, useState, useEffect} from "react";
import {createUserProfileDocument, onAuthStateChangedListener} from "../firebase/Firebase.Utils";

// as the actual value you want to access
// default value of context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {
    },
});

// Provider that will wrap up other components and allow us to use the user context
export const UserProvide = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
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