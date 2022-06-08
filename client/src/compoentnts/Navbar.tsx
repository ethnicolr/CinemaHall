import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    list-style: none;
`

const Item = styled(Link)`
    margin: 0.5rem 1rem;
    color: white;
    text-decoration: none;
`

export const NavbarComponent = () => {
    return (
        <Nav>
            <Item to='/Расписаниеи'>Расписаниеи</Item>

            <Item to='/Фильмы'>Фильмы</Item>

            <Item to='/4DX'>4DX</Item>
        </Nav>
    )
}
