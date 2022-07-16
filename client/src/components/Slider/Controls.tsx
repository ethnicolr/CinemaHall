import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
    slideTransition: (string: 'next' | 'prev') => void
}

const Button = styled.button`
    background: none rgba(30, 161, 220, 0.8);
    position: absolute;
    border: none;
    top: 50%;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
`

const NextButton = styled(Button)`
    left: 0;
`
const PrevButton = styled(Button)`
    right: 0;
`

export const Controls = ({ slideTransition }: Props) => {
    return (
        <>
            <NextButton onClick={(e) => slideTransition('next')}>
                Next
            </NextButton>
            <PrevButton onClick={(e) => slideTransition('prev')}>
                Prev
            </PrevButton>
        </>
    )
}
