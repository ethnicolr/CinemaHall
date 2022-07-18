import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Controls } from './Controls'
import { movie } from './movieData'

const Container = styled.section`
    position: relative;

    width: 100%;
`

const ListItems = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
    flex-direction: row;
`

interface Props {
    children: React.ReactNode
}

export const Slider = ({ children }: Props) => {
    const [poster, setPoster] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(2)
    const [slidesCount, setSlidesCount] = useState(
        (children as React.ReactNode[]).length
    )
    const [itervalId, setItervalId] = useState<null | NodeJS.Timer>(null)
    const refContainer = useRef(null)

    const handleSlide = (mode?: 'next' | 'prev') => {
        if (mode === 'next') {
            setCurrentSlide((current) => {
                const next = current + 1
                return next > slidesCount ? 1 : next
            })
        } else if (mode === 'prev') {
            setCurrentSlide((current) => {
                const prev = current - 1
                return prev === 0 ? slidesCount : prev
            })
        }
    }

    const setSlideIterval = () => {
        const id = setInterval(() => handleSlide('next'), 3000)
        setItervalId(id)
    }

    const clearSlideIterval = () => {
        setItervalId((id) => {
            clearInterval(id)
            return null
        })
    }

    useEffect(() => {
        const element = refContainer.current
        element.addEventListener('mouseover', clearSlideIterval)
        element.addEventListener('mouseout', setSlideIterval)

        return () => {
            element.removeEventListener('mouseover', clearSlideIterval)
            element.removeEventListener('mouseout', setSlideIterval)
        }
    }, [])

    useEffect(() => {
        setSlideIterval()
    }, [])

    const wrapperStyles = {
        width: `${window.innerWidth * slidesCount}px`,
        left: `-${window.innerWidth * (currentSlide - 1)}px`,
    }

    const childrenWithProps = React.Children.map(children, (child, index) => {
        // Checking isValidElement is the safe way and avoids a typescript
        // error too.
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                currentSlide: currentSlide,
                index: index + 1,
            })
        }
        return child
    })

    return (
        <Container>
            <div ref={refContainer}>
                <ListItems>{childrenWithProps}</ListItems>
                <Controls slideTransition={handleSlide} />
            </div>
        </Container>
    )
}
