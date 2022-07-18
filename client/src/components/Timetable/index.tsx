import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../api'
import { Filters } from './filters'
import { SessionList } from './SessionList'

interface Filter {
    date: string
    technology: string[]
    format: string[]
}

interface Movie {
    cinemaId: number
    name: string
    poster: string
    preview: string
    description: string
    imdbRating: string
    yearOfCreation: string
    country: string
    language: string
    genre: string
    mainCrew: string
    director: string
    screenwriter: string
    duration: string
    ageRestriction: string
    rentalStart: string
}

interface Session {
    cinemaShowId: number
    technology: string
    format: string
    price: number
    startTime: string
    cinema: Movie
}

interface TimeSession {
    cinemaShowId: number
    time: string
}
interface Show {
    technology: string
    timeSessions: TimeSession[]
}

interface ShowDate {
    value: string
    shows: Show[]
}

interface CinemaShows {
    cinemaId: number
    name: string
    showDates: ShowDate[]
}

const groupTimetableShows = (allShows: Session[]): CinemaShows[] => {
    const shows = new Map()
    allShows.forEach((show) => {
        const { cinema, cinemaShowId, startTime, format, technology } = show
        const { cinemaId, name } = cinema
        const [date, time] = startTime.split('T')
        const type = `${technology}, ${format}`

        const existMovie = shows.get(cinema.cinemaId) as CinemaShows | undefined
        if (existMovie) {
            const existDate = existMovie.showDates.find((e) => e.value === date)
            if (existDate) {
                const existShow = existDate.shows.find(
                    (e) => e.technology === type
                )
                if (existShow) {
                    const timeSession: TimeSession = { cinemaShowId, time }

                    existShow.timeSessions.push(timeSession)
                } else {
                    const timeSession: TimeSession = { cinemaShowId, time }
                    const show: Show = {
                        technology: type,
                        timeSessions: [timeSession],
                    }
                    existDate.shows.push(show)
                }
            } else {
                const timeSession: TimeSession = { cinemaShowId, time }
                const show: Show = {
                    technology: type,
                    timeSessions: [timeSession],
                }
                const showDate: ShowDate = { value: date, shows: [show] }
                existMovie.showDates.push(showDate)
            }
        } else {
            const timeSession: TimeSession = { cinemaShowId, time }
            const show: Show = { technology: type, timeSessions: [timeSession] }
            const showDate: ShowDate = { value: date, shows: [show] }
            const cimemaShow: CinemaShows = {
                cinemaId,
                name,
                showDates: [showDate],
            }
            shows.set(cinema.cinemaId, cimemaShow)
        }
    })
    return [...shows.values()]
}

type FilterChange = <K extends keyof Filter>(key: K, value: string) => void

const defaultFilter: Filter = { date: '', technology: [], format: [] }

export const Timetable = () => {
    const [filter, setFilter] = useState<Filter>(defaultFilter)
    const { data: sessions, run } = useAsync<Session[]>()

    useEffect(() => {
        const { date, technology, format } = filter

        const searchParams = new URLSearchParams()

        technology.forEach((p) => searchParams.append('technology', p))
        format.forEach((p) => searchParams.append('format', p))
        date && searchParams.append('date', date)

        run(client(`cinemaShows?${searchParams.toString()}`))
    }, [filter])

    const handleFilterChange = <K extends keyof Filter>(
        key: K,
        value: string
    ) => {
        setFilter((filters) => {
            let changeFilter = filter[key]
            return {
                ...filters,
                [key]: Array.isArray(changeFilter)
                    ? changeFilter.includes(value)
                        ? changeFilter.filter((e) => e !== value)
                        : [...changeFilter, value]
                    : value,
            }
        })
    }

    const timetableShows = useMemo(
        () => (sessions && groupTimetableShows(sessions)) || [],
        [sessions]
    )
    return (
        <Main>
            <Titile>Расписание сеансов</Titile>
            <Container>
                <Filters onChange={handleFilterChange} filterValue={filter} />
                <SessionList timetableShows={timetableShows} />
            </Container>
        </Main>
    )
}

const Main = styled.main`
    margin-top: 5rem;
`
const Titile = styled.h1`
    padding-top: 2rem;
    padding-left: 3rem;
    font-size: 2.25rem;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
`
export {
    FilterChange,
    Filter,
    Session,
    TimeSession,
    Show,
    ShowDate,
    CinemaShows,
}
