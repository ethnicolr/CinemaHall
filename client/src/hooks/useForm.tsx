import React, { useEffect, useState } from 'react'
import { get_prop } from '../utils'

interface FieldType {
    value: string
    errors: string
}

interface FieldValidatorType<T> {
    required: boolean
    compareField?: keyof T
    validator?: {
        func: (value: string, compareField?: string) => boolean
        error: string
    }
}

type StateScheme<T> = Record<keyof T, FieldType>
type StateValidators<T> = Record<keyof T, FieldValidatorType<T>>

const useForm = <T,>(
    stateScheme: StateScheme<T>,
    stateValidator: StateValidators<T>,
    onSubmit?: (...args: any[]) => void
) => {
    const [values, setValues] = useState(get_prop(stateScheme, 'value'))
    const [errors, setErrors] = useState(get_prop(stateScheme, 'errors'))
    const [dirty, setDirty] = useState(get_prop(stateScheme))
    const [isDirty, setIsDirty] = useState(false)
    const [disabled, setDisabled] = useState(true)
    type KeysState = keyof typeof stateScheme

    useEffect(() => {
        setInitialErrorState()
    }, [])

    useEffect(() => {
        if (isDirty) {
            setDisabled(Object.values(errors).some((e) => e))
        }
    }, [errors, isDirty])

    const validateField = (name: KeysState, value: string) => {
        const field = stateValidator[name]
        const compareField = values[field.compareField]
        let error = ''

        if (!value && field.required) {
            error = 'Поле обязательное'
        }

        if (field.validator?.func(value, compareField)) {
            error = field.validator.error
        }
        return error
    }

    const setInitialErrorState = () => {
        ;(Object.keys(errors) as KeysState[]).forEach((key) => {
            if (stateValidator[key].required) {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: 'Обязательное поле',
                }))
            }
        })
    }

    const handleChange = (name: KeysState, value: string) => {
        const error = validateField(name, value)

        setIsDirty(true)
        setErrors((prevState) => ({ ...prevState, [name]: error }))
        setValues((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        onSubmit(values)
    }

    const handleOnBlur = (name: KeysState) => {
        setDirty((prevState) => ({
            ...prevState,
            [name]: true,
        }))
    }

    return {
        values,
        handleChange,
        handleSubmit,
        disabled,
        errors,
        dirty,
        handleOnBlur,
    }
}

export { useForm, StateValidators }