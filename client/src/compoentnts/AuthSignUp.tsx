import React from 'react'
import styled from 'styled-components'
import { Input, FormGroup, Form, Button } from './lib'

export const AuthSignUp = () => {
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <label htmlFor='email'>Email</label>
                <Input id='email' type='text' />
            </FormGroup>
            <FormGroup>
                <label htmlFor='password'>пароль</label>
                <Input id='password' type='password' />
            </FormGroup>
            <FormGroup>
                <label htmlFor='password'>повторите пароль</label>
                <Input id='password' type='password' />
            </FormGroup>
            <Button>Регистрация</Button>
        </Form>
    )
}
