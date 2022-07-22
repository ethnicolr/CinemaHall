import React from 'react'
import styled from 'styled-components'
import { MovieData } from './api'

interface Props {
    movieData: MovieData
}
export const MovieDetails = ({ movieData }: Props) => {
    console.log(movieData)
    const {
        cinemaId,
        name,
        poster,
        preview,
        description,
        imdbRating,
        yearOfCreation,
        country,
        language,
        genre,
        mainCrew,
        director,
        screenwriter,
        duration,
        ageRestriction,
        rentalStart,
    } = movieData
    return (
        <Container>
            <Image src={poster} />
            <dl>
                <dt>Год</dt>
                <dd>{yearOfCreation}</dd>

                <dt>Страна</dt>
                <dd>{country}</dd>

                <dt>Язык</dt>
                <dd>{language}</dd>

                <dt>Жанр</dt>
                <dd>{genre}</dd>

                <dt>В главных ролях</dt>
                <dd>{mainCrew}</dd>

                <dt>Режиссёр</dt>
                <dd>{director}</dd>

                <dt>Сценарист</dt>
                <dd>{screenwriter}</dd>

                <dt>Продолжительность</dt>
                <dd>{duration}</dd>

                <dt>Возрастное ограничение</dt>
                <dd>{ageRestriction}</dd>
            </dl>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 12rem;
    dd {
        margin: 0;
        margin-bottom: 1.25rem;
        font-size: 0.9rem;
    }

    dt {
        color: #a0aec0;
        font-size: 0.75rem;
    }
`
const Image = styled.img``
