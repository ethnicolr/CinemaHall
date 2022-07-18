import React, { createContext, useContext, useEffect } from 'react'
import { useAsync } from '../../hooks/useAsync'
import * as auth from '../api'

interface AuthContextType {
    user: auth.UserResponse
    login: (form: auth.Account) => void
    register: (form: auth.Account) => void
    logout: () => void
    reset: () => void
    error: string
    status: string
    isError: boolean
    isSuccess: boolean
    isIdle: boolean
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)
AuthContext.displayName = 'AuthContext'

async function bootstrapAppData() {
    const token = auth.getToken()
    if (token) {
        return await auth.client('profile', { token })
    } else {
        return Promise.reject(null)
    }
}

function AuthProvider({ children }: { children: React.ReactNode }) {
    const {
        data: user,
        run,
        error,
        status,
        isError,
        isSuccess,
        setData,
        isIdle,
        isLoading,
        reset,
    } = useAsync<auth.UserResponse>()

    useEffect(() => {
        run(bootstrapAppData())
    }, [])

    const register = (form: auth.Account) => run(auth.register(form))

    const login = (form: auth.Account) => run(auth.login(form))

    const logout = () => {
        auth.logout()
        setData(null)
    }

    const value = {
        register,
        login,
        logout,
        reset,
        user,
        error,
        status,
        isError,
        isSuccess,
        isIdle,
        isLoading,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
