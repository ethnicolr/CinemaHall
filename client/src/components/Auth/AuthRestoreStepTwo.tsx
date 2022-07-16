import React from 'react'
import { StateValidators, useForm } from '../../hooks/useForm'
import { Input, FormGroup, Form, Button } from '../lib'

const stateScheme = {
    password: { value: '', errors: '' },
    confirmPassword: { value: '', errors: '' },
}

const stateValidators: StateValidators<typeof stateScheme> = {
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
    email: string
}

export const AuthRestoreStepTwo = ({ email }: Props) => {
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

    return (
        <Form onSubmit={handleSubmit}>
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
            <div>
                <Button disabled={disabled}>Регистрация</Button>
            </div>
        </Form>
    )
}
