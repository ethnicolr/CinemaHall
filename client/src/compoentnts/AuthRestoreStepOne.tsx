import React from 'react'
import { useForm } from '../hooks/useForm'
import { Input, FormGroup, Form, Button } from './lib'

const RE_EMAIL =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const stateScheme = {
    email: { value: '', errors: '' },
}

const stateValidators = {
    email: {
        required: true,
        validator: {
            func: (value: string) => !RE_EMAIL.test(value),
            error: 'Некорректный email',
        },
    },
}

interface Props {
    confirmEmail: (email: string) => void
}

export const AuthRestoreStepOne = ({ confirmEmail }: Props) => {
    const {
        values,
        errors,
        handleChange,
        handleOnBlur,
        handleSubmit,
        disabled,
        dirty,
    } = useForm(stateScheme, stateValidators)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof typeof values
        handleChange(name, e.target.value)
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const name = e.target.name as keyof typeof values
        handleOnBlur(name)
    }

    const restorePassword = () => {
        return Promise.resolve(true)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await restorePassword()
        confirmEmail(values.email)
    }

    return (
        <>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder='email'
                    />
                    {errors.email && dirty.email ? (
                        <span>{errors.email}</span>
                    ) : null}
                </FormGroup>
                <div>
                    <Button disabled={disabled}>Вход</Button>
                </div>
            </Form>
        </>
    )
}
