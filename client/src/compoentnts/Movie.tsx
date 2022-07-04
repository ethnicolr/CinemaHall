import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface MovieData {
    id: string
    title: string
    vote_average: number
    poster_path: string | null
    release_date: string
    first_air_date: string
    name: string
    media_type: string
}

interface Props {
    data: MovieData
}

export const Movie = ({ data }: Props) => {
    const { poster_path, id } = data
    return (
        <Container>
            <Link to={`/movie/${id}`}>
                <Image src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
            </Link>
        </Container>
    )
}

const Container = styled.div`
    margin: 10px 2% 40px;
    width: 218px;
    height: 320px;
`
const Image = styled.img`
    width: 100%;
`
