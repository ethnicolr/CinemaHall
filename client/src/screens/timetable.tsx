import React, { useEffect, useMemo, useState } from 'react'
import { groupTimetableShows } from '../utils'
import { CinemaShow, client } from '../components/api'
import { Filter, FilterChange } from '../shared/types'
import { MovieShows } from '../components/MovieShows'
import { useAsync } from '../hooks/useAsync'
import { Filters } from '../components/Filters'
import styled from 'styled-components'

const defaultFilter: Filter = { date: '', technology: [], format: [] }

function Timetable() {
    const [filter, setFilter] = useState<Filter>(defaultFilter)
    const { data: sessions, run } = useAsync<CinemaShow[]>()

    useEffect(() => {
        const { date, technology, format } = filter
        const searchParams = new URLSearchParams()
        technology.forEach((p) => searchParams.append('technology', p))
        format.forEach((p) => searchParams.append('format', p))
        date && searchParams.append('date', date)

        run(client(`cinemaShows?${searchParams.toString()}`))
    }, [filter])

    const handleFilterChange: FilterChange = (key, value) => {
        const changeFilter = filter[key]
        const newValue = Array.isArray(changeFilter)
            ? changeFilter.includes(value)
                ? changeFilter.filter((e) => e !== value)
                : [...changeFilter, value]
            : value

        setFilter({
            ...filter,
            [key]: newValue,
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
                <MovieShows movies={timetableShows} />
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
export { Timetable }
