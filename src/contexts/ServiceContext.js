import React, { useState, useCallback } from 'react';

export const ServiceContext = React.createContext();

export default ({children}) => {
    const [service, setService] = useState({});

    const setServiceContext = useCallback(value => {
        setService(value);
    },[]);

    return (
        <ServiceContext.Provider 
        value={{
            setServiceContext,
            getServiceContext: service
        }}>
            {children}
        </ServiceContext.Provider>
    )
}

export const useServiceContext = () => React.useContext(ServiceContext);
