import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Details } from './api'
import { MovieDetails } from './MovieDetails'
import { Sessions } from './Sessions'
import { example } from './SessionsExempl'

const API_KEY = '7f68618aa54d9ed1ed130222e4778d53'

interface Props {
    movieId: string
}

interface PropsParams {
    movieId: string
    media_type: string
}

export const MoviePage = () => {
    const [movieData, setMovieData] = useState<Details | null>(null)
    const { movieId } = useParams()
    const [count, setCount] = useState(0)

    useEffect(() => {
        const url = new URL(
            `https://api.themoviedb.org/3/movie/${movieId}&language=en-US`
        )
        url.searchParams.set('api_key', API_KEY)

        // const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?&${API_KEY}&language=en-US`
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovieData(data))
    }, [])
    return (
        <Container>
            <div style={{ flex: '1 1 0%' }}>
                <h2>Сеансы</h2>
                <Sessions data={example} />
                <Sessions data={example} />
            </div>
            {movieData && <MovieDetails data={movieData} />}
        </Container>
    )
}

const Container = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    margin: 0 auto;
`
