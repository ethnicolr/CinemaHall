import React from 'react'
import styled from 'styled-components'
import { ShowDate } from '../utils'
import { Session } from './Session'

interface Props {
    timetable: ShowDate[]
}

export const MovieTimetable = ({ timetable }: Props) => {
    return (
        <List>
            {timetable.map((e) => {
                const { date, shows } = e
                const dateFormat = date.split('T')[0]
                return (
                    <Item key={dateFormat}>
                        <MovienDate>{dateFormat}</MovienDate>
                        <TechnologyList>
                            {shows.map((date) => {
                                const { technology, timeSessions } = date
                                return (
                                    <TechnologyItem key={technology}>
                                        <TechnologyTitle>
                                            {technology}
                                        </TechnologyTitle>
                                        <TimeList>
                                            {timeSessions.map((data) => {
                                                return (
                                                    <TimeItem
                                                        key={data.cinemaShowId}
                                                    >
                                                        <Session data={data} />
                                                    </TimeItem>
                                                )
                                            })}
                                        </TimeList>
                                    </TechnologyItem>
                                )
                            })}
                        </TechnologyList>
                    </Item>
                )
            })}
        </List>
    )
}

const List = styled.ul`
    border-top: 1px solid #4299e1;
`
const Item = styled.li``

const MovienDate = styled.h5`
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
`

const TechnologyItem = styled.li`
    padding: 0.5rem;
    margin: 0.5rem;
    display: flex;
    align-items: center;
`
const TechnologyTitle = styled.h6``

const TechnologyList = styled.ul`
    display: flex;
    flex-direction: column;
`

const TimeList = styled.ul`
    display: flex;
`
const TimeItem = styled.li``
