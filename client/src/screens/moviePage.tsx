import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { CinemaShow, client, MovieData } from '../components/api'
import { MovieDetails } from '../components/MovieDetails'
import { useAsync } from '../hooks/useAsync'
import { groupSessionByDate } from '../utils'
import { MovieTimetable } from './../components/MovieTimetable'

export const MoviePage = () => {
    const { movieId } = useParams()
    const {
        data: movieData,
        run,
        isSuccess,
        isError,
        error,
    } = useAsync<MovieData>()

    useEffect(() => {
        run(client(`cinema/${movieId}`))
    }, [movieId])

    const movieTimetable = useMemo(
        () => movieData && groupSessionByDate(movieData.cinemaShows),
        [movieData]
    )

    return (
        <Container>
            <div style={{ flex: '1 1 0%' }}>
                <h2>Сеансы</h2>
                {isSuccess && <MovieTimetable timetable={movieTimetable} />}
            </div>
            {isSuccess && <MovieDetails movieData={movieData} />}
            {isError && <h2>{error}</h2>}
        </Container>
    )
}

const Container = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    margin: 100px auto;
`
