import React, { useState } from 'react'
import styled from 'styled-components'

interface Technology {
    name: string
    time: { isActive: boolean; value: Date }[]
}

interface SessionData {
    date: Date
    movieId: string
    technology: Technology[]
}

interface Props {
    data: SessionData
}

export const Sessions = ({ data }: Props) => {
    const { date, technology } = data

    const timeFormat = (d: Date) =>
        d.toTimeString().split(' ')[0].split(':').slice(0, 2).join(':')
    return (
        <Container>
            <h1>{date.toString()}</h1>
            <List>
                {technology.map((t) => {
                    const { name, time } = t
                    return (
                        <Item>
                            <SubTitle>{name}</SubTitle>
                            <Wrapper>
                                {time.map((t) => (
                                    <Link>{timeFormat(t.value)}</Link>
                                ))}
                            </Wrapper>
                        </Item>
                    )
                })}
            </List>
        </Container>
    )
}

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const Item = styled.li`
    display: flex;
    align-items: center;
`

const SubTitle = styled.h6`
    font-size: 15px;
    font-weight: 400;
`
const Wrapper = styled.div``
const Container = styled.div`
    border-top: 1px solid #4299e1;
`
const Link = styled.a`
    margin: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-width: 2px;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: rgba(203, 213, 224, 1);
    color: rgba(160, 174, 192, 1);
`
