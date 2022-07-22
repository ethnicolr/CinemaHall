import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
    cinemaShowId: number
    time: string
}

export const Session = ({ data }: { data: Props }) => {
    const { cinemaShowId, time } = data
    return <Time to={`/buy-tickets/${cinemaShowId}`}>{time}</Time>
}

const Time = styled(Link)`
    margin: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-width: 2px;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: rgba(203, 213, 224, 1);
    color: rgba(160, 174, 192, 1);
`
