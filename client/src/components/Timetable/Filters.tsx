import React from 'react'
import styled from 'styled-components'
import { Filter, FilterChange } from '.'

interface Props {
    onChange: FilterChange
    filterValue: Filter
}

export const Filters = ({ onChange, filterValue }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof Filter
        const value = e.target.defaultValue
        onChange(name, value)
    }
    return (
        <Container>
            <form>
                <Title>Фильтры</Title>
                <Items>
                    <SubTitle>Период</SubTitle>
                    <Item>
                        <Radio
                            name='date'
                            id='date-today'
                            value='today'
                            onChange={handleChange}
                        />
                        <Label htmlFor='date-today'>Сегодня</Label>
                    </Item>
                    <Item>
                        <Radio
                            name='date'
                            id='date-tomorrow'
                            value='tomorrow'
                            onChange={handleChange}
                        />
                        <Label htmlFor='date-tomorrow'>Завтра</Label>
                    </Item>
                    <Item>
                        <Radio
                            name='date'
                            id='date-week'
                            value='week'
                            onChange={handleChange}
                        />
                        <Label htmlFor='date-week'>Неделя</Label>
                    </Item>
                    <Item>
                        <Radio
                            name='date'
                            id='date-month'
                            value='month'
                            onChange={handleChange}
                        />
                        <Label htmlFor='date-month'>Месяц</Label>
                    </Item>
                </Items>
                <Items>
                    <SubTitle>Технология</SubTitle>
                    <Item>
                        <Checkbox
                            name='technology'
                            id='technology-4dx'
                            value='4dx'
                            onChange={handleChange}
                        />
                        <Label htmlFor='technology-4dx'>4DX</Label>
                    </Item>
                    <Item>
                        <Checkbox
                            name='technology'
                            id='technology-imax'
                            value='imax'
                            onChange={handleChange}
                        />
                        <Label htmlFor='technology-imax'>IMAX</Label>
                    </Item>
                    <Item>
                        <Checkbox
                            name='technology'
                            id='technology-cinetech'
                            value='cinetech'
                            onChange={handleChange}
                        />
                        <Label htmlFor='technology-cinetech'>Cinetech</Label>
                    </Item>
                </Items>
                <Items>
                    <SubTitle>Формат</SubTitle>
                    <Item>
                        <Checkbox
                            name='format'
                            id='format-2d'
                            value='2d'
                            onChange={handleChange}
                        ></Checkbox>
                        <Label htmlFor='format-2d'>2D</Label>
                    </Item>
                    <Item>
                        <Checkbox
                            name='format'
                            id='format-3d'
                            value='3d'
                            onChange={handleChange}
                        ></Checkbox>
                        <Label htmlFor='format-3d'>3D</Label>
                    </Item>
                </Items>
            </form>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    width: 12rem;
    height: 100vh;
`

const Title = styled.h3`
    padding: 0 1rem;
    text-align: center;
`
const SubTitle = styled.h4`
    font-size: 1rem;
    --text-opacity: 1;
    color: rgba(160, 174, 192, var(--text-opacity));
    padding: 0.5rem;
    text-align: center;
`

const Items = styled.ul`
    list-style: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
    border-top: 1px solid #cbd5e0;
`

const Item = styled.li`
    padding-left: 5rem;
    padding-top: 0.5rem;
`

const Input = styled.input`
    position: absolute;
    left: -9999px;
    :checked + label:after {
        transform: scale(1);
        opacity: 1;
    }
`

const Label = styled.label`
    position: relative;
    display: inline-block;
    cursor: pointer;
    padding-left: 28px;
    line-height: 20px;
    color: #666;
    :before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #3cb4e7;

        box-sizing: border-box;
    }
    :after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 12px;
        height: 12px;

        transition: all 0.2s ease;
        background-color: #3cb4e7;
        box-sizing: border-box;
        opacity: 0;
        transition: all 0.2s ease;
    }
`

const Radio = styled(Input).attrs({ type: 'radio' })`
    + label:after,
    + label:before {
        border-radius: 100%;
    }
`

const Checkbox = styled(Input).attrs({ type: 'checkbox' })``
