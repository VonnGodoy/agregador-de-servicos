import React, { useState, useCallback } from 'react';

export const UserContext = React.createContext({});

export default ({children}) => {
    const [user, setUser] = useState({});

    const setUserContext = useCallback(value => {
        setUser(value);
    },[]);

    return (
        <UserContext.Provider 
        value={{
            setUserContext,
            getUserContext: user
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext);