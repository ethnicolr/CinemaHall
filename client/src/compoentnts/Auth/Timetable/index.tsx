import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAsync } from '../../../hooks/useAsync'
import { client } from '../../api'
import { Filters } from './filters'

interface Filter {
    date: string
    technology: string[]
    format: string[]
}

type FilterChange = <K extends keyof Filter>(key: K, value: string) => void

const defaultFilter: Filter = { date: '', technology: [], format: [] }

export const Timetable = () => {
    const [filter, setFilter] = useState<Filter>(defaultFilter)
    const { data: movies, run } = useAsync()

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
    return (
        <Main>
            <Titile>Расписание сеансов</Titile>
            <Filters onChange={handleFilterChange} filterValue={filter} />
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
export { FilterChange, Filter }
