import React from 'react'
import { Slide } from './Slide'
import { Slider } from './Slider'

export default function SliderComponent() {
    return (
        <Slider>
            <Slide cover='slideA.jpg' />
            <Slide cover='slideB.jpg' />
            <Slide cover='slideC.jpg' />
            {/* <Slide cover='https://picsum.photos/1400/650' /> */}
            {/* <Slide cover='https://picsum.photos/1400/650' /> */}
        </Slider>
    )
}
