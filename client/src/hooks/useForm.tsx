import React, { useEffect, useState } from 'react'

type StateScheme = {
    [key: string]: {
        value: string
        errors: string
    }
}

type StateValidators = {
    [key: string]: {
        required: boolean
        validator?: {
            func: (value: string) => boolean
            error: string
        }
    }
}
function get_prop(
    state: StateScheme,
    prop: 'value' | 'errors'
): { [K in keyof StateScheme]: string }
function get_prop(state: StateScheme): { [K in keyof StateScheme]: false }
function get_prop(state: StateScheme, prop?: 'value' | 'errors') {
    return Object.keys(state).reduce((field, key) => {
        field[key] = !prop ? false : state[key][prop]
        return field
    }, {} as { [K in keyof StateScheme]: string | false })
}

export const useForm = (
    stateScheme: StateScheme,
    stateValidator: StateValidators
) => {
    const [values, setValues] = useState(get_prop(stateScheme, 'value'))
    const [errors, setErrors] = useState(get_prop(stateScheme, 'errors'))
    const [dirty, setDirty] = useState(get_prop(stateScheme))
    const [isDirty, setIsDirty] = useState(false)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (isDirty) {
            setDisabled(Object.values(errors).some((e) => e))
        }
    }, [errors, isDirty])

    const validateField = (name: keyof StateScheme, value: string) => {
        const field = stateValidator[name]
        let error = ''
        if (!value && field.required) {
            error = 'Поле обязательное'
        }

        if (field.validator?.func(value)) {
            error = field.validator.error
        }
        return error
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const error = validateField(name, value)

        setIsDirty(true)
        setErrors((prevState) => ({ ...prevState, [name]: error }))
        setValues((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    return { values, handleChange, handleSubmit, disabled }
}
