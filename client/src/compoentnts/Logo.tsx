import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled(Link)`
    transform: translate(12px, 10px);
    img {
        width: 4rem;
    }
`

export const LogoComponent = () => {
    return (
        <Logo to='/'>
            <img src='./img/g12.png' />
        </Logo>
    )
}
