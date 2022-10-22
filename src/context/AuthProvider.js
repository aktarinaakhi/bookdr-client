import React, { createContext } from 'react';
import useFirebase from '../lib/useFirebase';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;

    const allContexts = useFirebase();

    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;