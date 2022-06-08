import React from 'react'
import { useForm } from '../hooks/useForm'
import { Input, FormGroup, Form, Button } from './lib'

const RE_EMAIL =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const stateScheme = {
    email: { value: '', errors: '' },
    password: { value: '', errors: '' },
    confirmPassword: { value: '', errors: '' },
}

const stateValidators = {
    email: {
        required: true,
        validator: {
            func: (value: string) => !RE_EMAIL.test(value),
            error: 'Некорректный email',
        },
    },
    password: {
        required: true,
    },
    confirmPassword: {
        required: true,
    },
}

export const AuthLogin = () => {
    const { values, handleChange, handleSubmit, disabled } = useForm(
        stateScheme,
        stateValidators
    )

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <label htmlFor='email'>
                    Email
                    <Input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                </label>
            </FormGroup>
            <FormGroup>
                <label htmlFor='password'>
                    Password
                    <Input
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={handleChange}
                    />
                </label>
            </FormGroup>
            <FormGroup>
                <label htmlFor='confirmPassword'>
                    confirmPassword
                    <Input
                        name='confirmPassword'
                        type='password'
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
            </FormGroup>
            <div>
                <Button disabled={disabled}>Login</Button>
            </div>
        </Form>
    )
}
