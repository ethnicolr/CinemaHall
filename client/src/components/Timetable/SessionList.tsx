import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CinemaShows, Show, ShowDate, TimeSession } from '.'

interface Props {
    timetableShows: CinemaShows[]
}

export const SessionList = ({ timetableShows }: Props) => {
    const renderTimes = (items: TimeSession[]) => {
        return (
            <TimeList>
                {items.map((date) => {
                    const { cinemaShowId, time } = date
                    return (
                        <TimeItem>
                            <Time to={`:${cinemaShowId}`}>
                                {time.slice(0, 5)}
                            </Time>
                        </TimeItem>
                    )
                })}
            </TimeList>
        )
    }
    const renderShows = (items: Show[]) => {
        return (
            <TechnologyList>
                {items.map((date) => {
                    const { technology, timeSessions } = date
                    return (
                        <TechnologyItem>
                            <Technology>{technology}</Technology>
                            {renderTimes(timeSessions)}
                        </TechnologyItem>
                    )
                })}
            </TechnologyList>
        )
    }
    const renderDates = (items: ShowDate[]) => {
        return (
            <DateList>
                {items.map((date) => {
                    const { value, shows } = date
                    return (
                        <DateItem>
                            <MovienDate>{value}</MovienDate>
                            {renderShows(shows)}
                        </DateItem>
                    )
                })}
            </DateList>
        )
    }
    const renderMovies = (items: CinemaShows[]) => {
        return items.map((movie) => {
            const { name, cinemaId, showDates } = movie
            return (
                <Movie>
                    <Poster>
                        <img src='./img/belzebuth.jpg' />
                    </Poster>
                    <Sessions>
                        <LinkMovie to={`:${cinemaId}`}>{name}</LinkMovie>
                        {renderDates(showDates)}
                    </Sessions>
                </Movie>
            )
        })
    }
    return (
        <Section>
            <ListMovie>{renderMovies(timetableShows)}</ListMovie>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    width: 100%;
`

const ListMovie = styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;

    padding: 2rem;
    margin: 1rem 0;
`

const Movie = styled.li`
    display: flex;
    padding: 1rem;
    margin: 1rem 0;
    flex-direction: row;
    background: #e2e8f0;
`

const Poster = styled.div`
    align-self: auto;
    width: 12rem;
    flex-shrink: 0;
    img {
        max-width: 100%;
    }
`
const Sessions = styled.div`
    flex: 1 1 0%;
    padding: 0.5rem;
    margin: 0.5rem;
`

const LinkMovie = styled(Link)`
    color: #4299e1;
    font-size: 1.5rem;
`

const DateList = styled.ul``
const DateItem = styled.li`
    border-top: 1px solid #4299e1;
`
const MovienDate = styled.h5`
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
`

const TechnologyList = styled.ul`
    display: flex;
`
const TechnologyItem = styled.li`
    padding: 0.5rem;
    margin: 0.5rem;
    display: flex;
    align-items: center;
`
const Technology = styled.h6``

const TimeList = styled.ul``
const TimeItem = styled.li``

const Time = styled(Link)`
    margin: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-width: 2px;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: rgba(203, 213, 224, 1);
    color: rgba(160, 174, 192, 1);
`
