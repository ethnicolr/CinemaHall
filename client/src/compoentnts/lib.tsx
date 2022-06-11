import styled from 'styled-components'

const Input = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem 0.75rem;
    border-width: 1px;
    border-radius: 0.375rem;
    transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 0.875rem;
    line-height: 1.25rem;
    border: 1px solid #e8e8e8;
    &:focus {
        outline: 0;
        border-color: #90cdf4;
    }
`

const Button = styled.button`
    padding: 7px 15px;
    height: 38px;
    border: none;
    outline: none;
    line-height: 1;
    border-radius: 5px;
    margin: 0 auto;
    width: 100%;
    background-color: #667eea;
    color: #fff;
`

const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    fontSize: '18px',
    width: '100%',
    '> div': {
        margin: '10px auto',
        width: '100%',
    },
})

interface TitleProps {
    size?: string
    color?: string
}

const Title = styled.h2<TitleProps>`
    font-size: ${(props) => props.size || '18px'};
    color: ${(props) => props.color || '#fff'};
    margin-bottom: 15px;
`

interface TextProps {
    size?: string
}

const Text = styled.p<TextProps>`
    font-size: ${(props) => props.size || '18px'};
    color: #dcdcdc;
    font-weight: 400;
`
interface ThumbProps {
    size?: string
}
const Thumb = styled.img<ThumbProps>`
    width: ${(props) => props.width || '10px'};
    margin-left: 5px;
`

const FormGroup = styled.div({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '> span': {
        // position: 'absolute',
        fontSize: '14px',
        color: '#ff7979',
        marginLeft: '0.74rem',
    },
})

const device = {
    mobileM: `(max-width: 400px)`,
    mobileL: `(max-width: 520px)`,
    laptopS: `(max-width: 768px)`,
    laptopM: `(max-width: 1000px)`,
    laptopL: `(max-width: 1380px)`,
}

export { Input, FormGroup, Form, Button, Title, Text, device, Thumb }
