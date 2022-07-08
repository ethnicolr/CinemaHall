import React, { createContext, useContext } from 'react'
import { useAsync } from '../../hooks/useAsync'
import * as auth from './../api'

const AuthContext = createContext(null)
AuthContext.displayName = 'AuthContext'

function AuthProvider({ children }: { children: React.ReactNode }) {
    const { data, run, error, status, isError, isSuccess } = useAsync()

    const register = (form: auth.Account) => run(auth.register(form))

    const value = {
        register,
        data,
        error,
        status,
        isError,
        isSuccess,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}

export { AuthProvider, AuthContext }
