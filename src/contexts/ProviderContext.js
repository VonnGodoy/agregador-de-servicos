import React, { useState, useCallback } from 'react';

export const ProviderContext = React.createContext({});

export default ({children}) => {
    const [provider, setProvider] = useState({});

    const setProviderContext = useCallback(value => {
        setProvider(value);
    },[]);

    const getProviderContext = () => {
        return provider;
    };

    return (
        <ProviderContext.Provider 
        value={{
            setProviderContext,
            getProviderContext
        }}>
            {children}
        </ProviderContext.Provider>
    )
}

export const useProviderContext = () => React.useContext(ProviderContext);