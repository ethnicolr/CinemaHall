import React, { useEffect } from 'react'
import { Input, FormGroup, Form, Button } from '../lib'
import { useAuth } from '../../hooks/useAuth'
import { StateValidators, useForm } from '../../hooks/useForm'

const RE_EMAIL =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const stateScheme = {
    email: { value: '', errors: '' },
    password: { value: '', errors: '' },
    confirmPassword: { value: '', errors: '' },
}

const stateValidators: StateValidators<typeof stateScheme> = {
    email: {
        required: true,
        validator: {
            func: (value: string) => !RE_EMAIL.test(value),
            error: 'Некорректный email',
        },
    },
    password: {
        required: true,
        validator: {
            func(value: string) {
                if (value.length < 6) {
                    this.error =
                        'Слишком короткий пароль. Минимальная длина - 6 символов'
                    return true
                }
                return false
            },
            error: 'Некорректный email',
        },
    },
    confirmPassword: {
        required: true,
        compareField: 'password',
        validator: {
            func(value: string, compare?: string | null) {
                if (value !== compare) {
                    this.error = 'Пароли не совпадают'
                    return true
                }
                return false
            },
            error: 'Некорректный email',
        },
    },
}

interface Props {
    toggleModal: () => void
}
export const AuthSignUp = ({ toggleModal }: Props) => {
    const { register, isError, isSuccess, error } = useAuth()
    const {
        values,
        errors,
        handleChange,
        handleOnBlur,
        handleSubmit,
        disabled,
        dirty,
    } = useForm(stateScheme, stateValidators, register)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof typeof values
        handleChange(name, e.target.value)
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const name = e.target.name as keyof typeof values
        handleOnBlur(name)
    }

    useEffect(() => {
        if (isSuccess) {
            toggleModal()
        }
    }, [isSuccess])

    return (
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
            <FormGroup>
                <Input
                    name='confirmPassword'
                    type='password'
                    value={values.confirmPassword}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder='повторите пароль'
                />
                {errors.confirmPassword && dirty.confirmPassword ? (
                    <span>{errors.confirmPassword}</span>
                ) : null}
            </FormGroup>
            {isError && <span>{error}</span>}
            <div>
                <Button disabled={disabled}>Регистрация</Button>
            </div>
        </Form>
    )
}
