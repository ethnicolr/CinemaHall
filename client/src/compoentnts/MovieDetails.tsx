import React from 'react'
import styled from 'styled-components'
import { Details } from './api'

interface Props {
    data: Details
}
export const MovieDetails = ({ data }: Props) => {
    const {
        title,
        vote_average,
        poster_path,
        overview,
        tagline,
        release_date,
        first_air_date,
        genres = [],
        runtime,
        episode_run_time,
        name,
        id,
        production_countries = [],
        budget = 0,
    } = data
    console.log(episode_run_time)
    return (
        <Container>
            <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <dl>
                <dt>Год</dt>
                <dd>{release_date}</dd>
                <dt>Страна</dt>
                <dd>{production_countries.map((i) => i.name).join(', ')}</dd>
                <dt>Язык</dt>
                <dd>Русский</dd>
                <dt>Жанр</dt>
                <dd>{genres.map((i) => i.name).join(', ')}</dd>
                <dt>Продолжительность</dt>
                <dd>{runtime}</dd>
            </dl>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 12rem;
`
const Image = styled.img``
