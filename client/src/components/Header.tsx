import React from 'react'
import { AuthButton } from './Auth/AuthButton'
import { Logo } from './Logo'
import { Navbar } from './NavBar'
import styled from 'styled-components'
import { AuthSuccessBaner } from './Auth/AuthSuccessBaner'

const Header = styled.header`
    position: fixed;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    background-color: #0b0b0b;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.25rem;
`

export const HeaderComponment = () => {
    return (
        <Header>
            <Logo />
            <Container>
                <Navbar />
                <AuthButton />
                <AuthSuccessBaner />
            </Container>
        </Header>
    )
}
