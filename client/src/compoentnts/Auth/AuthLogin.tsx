import React, { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm'
import { Input, FormGroup, Form, Button } from '../lib'

const RE_EMAIL =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const stateScheme = {
    email: { value: '', errors: '' },
    password: { value: '', errors: '' },
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
}

interface Props {
    toggleModal: () => void
}

export const AuthLogin = ({ toggleModal }: Props) => {
    const { user, login, isError, isSuccess, error } = useAuth()

    const {
        values,
        errors,
        handleChange,
        handleOnBlur,
        handleSubmit,
        disabled,
        dirty,
    } = useForm(stateScheme, stateValidators, login)

    useEffect(() => {
        if (isSuccess && user.email) {
            toggleModal()
        }
    }, [user, isSuccess])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof typeof values
        handleChange(name, e.target.value)
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const name = e.target.name as keyof typeof values
        handleOnBlur(name)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
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
                <FormGroup>
                    <Input
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder='пароль'
                    />
                    {errors.password && dirty.password ? (
                        <span>{errors.password}</span>
                    ) : null}
                </FormGroup>
                {isError && <span>{error}</span>}
                <div>
                    <Button disabled={disabled}>Вход</Button>
                </div>
            </Form>
        </>
    )
}
