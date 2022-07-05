import React, {createContext, useState} from "react";

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

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}