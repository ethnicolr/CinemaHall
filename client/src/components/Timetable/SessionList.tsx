import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Session } from '.'

interface Props {
    items: Session[] | []
}

export const SessionList = ({ items }: Props) => {
    return <div>MovieList</div>
}

const Section = styled.section``

const ListMovie = styled.ul`
    display: flex;
    padding: 1rem;
    margin: 1rem 0;
`

const Poster = styled.div`
    align-self: auto;
    width: 12rem;
    flex-shrink: 0;
    img {
        max-width: 100%;
    }
`
const Session = styled.div`
    padding: 0.5rem;
    margin: 0.5rem;
`

const LinkMovie = styled(Link)`
    color: #4299e1;
    font-size: 1.5rem;
`

const SessionItems = styled.ul``
const SessionItem = styled.li``

const SessionDate = styled.h5`
    font-size: 1.25rem;
`

const TimeList = styled.ul``
const SessionTime = styled.li``
const Technology = styled.h6``
const Time = styled(Link)`
    margin: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-width: 2px;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: rgba(203, 213, 224, 1);
    color: rgba(160, 174, 192, 1);
`
const Movie = styled.li``
