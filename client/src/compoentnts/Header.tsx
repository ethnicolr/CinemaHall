import React from 'react'
import { AuthComponent } from './Auth'
import { LogoComponent } from './Logo'
import { NavbarComponent } from './NavBar'
import styled from 'styled-components'

const Header = styled.header`
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
            <LogoComponent />
            <Container>
                <NavbarComponent />
                <AuthComponent />
            </Container>
        </Header>
    )
}
