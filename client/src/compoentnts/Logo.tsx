import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkLogo = styled(Link)`
    transform: translate(12px, 10px);
    img {
        width: 4rem;
        max-width: 100%;
    }
`

export const Logo = () => {
    return (
        <LinkLogo to='/'>
            <img src='./img/g12.png' />
        </LinkLogo>
    )
}
