import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    list-style: none;
`
const activeClassName = 'active'

const Item = styled(NavLink).attrs({ activeClassName })`
    &.${activeClassName} {
        color: #3cb4e7;
    }
    font-size: 24px;
    margin: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`

export const Navbar = () => {
    return (
        <Nav>
            <Item to='/timetable'>Расsssssssssписание</Item>

            <Item to='/Фильмы'>Фильмы</Item>

            <Item to='/4DX'>4DX</Item>
        </Nav>
    )
}
