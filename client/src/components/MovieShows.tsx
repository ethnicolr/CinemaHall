import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CinemaShows } from '../utils'
import { MovieTimetable } from './MovieTimetable'

interface Props {
    movies: CinemaShows[]
}

function MovieShows({ movies }: Props) {
    return (
        <Section>
            <List>
                {movies.map((e) => {
                    const { name, cinemaId, showDates } = e
                    return (
                        <Movie key={cinemaId}>
                            <Poster>
                                <img src='./img/belzebuth.jpg' />
                            </Poster>
                            <Sessions>
                                <LinkMovie to={`/movie/${cinemaId}`}>
                                    {name}
                                </LinkMovie>
                                <MovieTimetable timetable={showDates} />
                            </Sessions>
                        </Movie>
                    )
                })}
            </List>
        </Section>
    )
}

const Section = styled.section`
    width: 100%;
`
const List = styled.ul`
    padding: 1rem;
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
export { MovieShows }
