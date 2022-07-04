import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Movie } from './Movie'

const API_KEY = '7f68618aa54d9ed1ed130222e4778d53'

const Container = styled.div`
    padding: 20px 60px;
`
const Title = styled.div`
    margin: auto 25px;
    font-size: 25px;
`

const Grid = styled.div`
    display: grid;
    grid-gap: 0 4%;
    grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));
    grid-template-rows: auto;
`

export const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const url = new URL(
            'https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1'
        )
        url.searchParams.set('api_key', API_KEY)
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMoviesList(data.results))
    }, [])
    return (
        <Container>
            <Title>
                <h1>Скоро в кино</h1>
            </Title>
            <Grid>
                {moviesList.map((data) => {
                    return (
                        <div key={data.id}>
                            <Movie data={data} />
                        </div>
                    )
                })}
            </Grid>
        </Container>
    )
}
