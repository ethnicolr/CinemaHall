import React from 'react'
import styled from 'styled-components'

interface Props {
    cover: string
    index?: number
    currentSlide?: number
}

const Container = styled.li<ContainerProps>`
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center;
    display: ${(props) => (props.isShow ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-end;
    flex-shrink: 0;
    height: 70vh;
    width: 100%;
`
const Article = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
`

const Title = styled.h2`
    font-size: 1.875rem;
    font-weight: 700;
`
const Description = styled.h3`
    font-size: 1.5rem;
`

interface ContainerProps {
    url: string
    isShow: boolean
}

export const Slide = ({ cover, index, currentSlide }: Props) => {
    const isShow = index == currentSlide
    return (
        <Container
            url={cover}
            isShow={isShow}
            className={isShow ? 'active' : ''}
        >
            <Article>
                <div>
                    <h2>Заголовок фильма (0+)</h2>
                    <h3>Описание</h3>
                </div>
                <button>Купить билет</button>
            </Article>
        </Container>
    )
}
