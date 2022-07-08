import React, { Reducer, useCallback, useEffect, useReducer } from 'react'

interface State<T = null> {
    data: null | T
    status: Status
    error: Error | null
}

type Status = 'idle' | 'pending' | 'resolved' | 'rejected'

interface Action<T> {
    status: Status
    data?: T
    error?: Error
}

const defaultInitialState: State = { status: 'idle', data: null, error: null }

function useAsync<T>(initialState?: State<T>) {
    const [{ status, data, error }, dispatch] = useReducer<
        Reducer<State<T>, Action<T>>
    >((s, a) => ({ ...s, ...a }), { ...defaultInitialState, ...initialState })

    const run = useCallback((promise: Promise<T>) => {
        if (!promise || !promise.then) {
            throw new Error(
                `The argument passed to useAsync().run must be a promise.`
            )
        }
        dispatch({ status: 'pending' })
        promise
            .then((data) => {
                dispatch({ status: 'resolved', data, error: null })
            })
            .catch((error: Error) => {
                dispatch({ status: 'rejected', error })
            })
    }, [])
    return {
        isIdle: status === 'idle',
        isLoading: status === 'pending',
        isError: status === 'rejected',
        isSuccess: status === 'resolved',
        error,
        status,
        data,
        run,
    }
}

export { useAsync }
