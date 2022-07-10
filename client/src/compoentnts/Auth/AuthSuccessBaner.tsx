import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'

const AuthSuccessBaner = () => {
    const { user, login, isError, isSuccess, error } = useAuth()

    return (
        <Banner>
            <Wrapper>
                <Message>Вы вошли как {user?.email}</Message>
                <Button>X</Button>
            </Wrapper>
        </Banner>
    )
}

const Banner = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    font-size: 1rem;
    margin: 0 !important;
    top: 5rem;
    left: 0;
    position: fixed;
    background: #38a169;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0.75rem 2rem;
`

const Message = styled.p`
    font-size: 1rem;
    margin-left: 0.75rem;
    font-weight: 500;
    color: #fff;
`

const Button = styled.button`
    background-color: transparent;
    border: none;
`

export { AuthSuccessBaner }
