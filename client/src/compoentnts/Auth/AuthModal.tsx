import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useClickOutSide } from '../../hooks/useClickOutSide'
import { useCloseByKey } from '../../hooks/useCloseByKey'
import { StateModal, ToggleModal } from './Auth'

type ModalName = keyof StateModal
interface Props {
    isOpen: boolean
    modalName: ModalName
    toggleModal: ToggleModal
    children?: React.ReactNode
    title: string
    redirect?: ModalName
}

export const AuthModal = ({
    isOpen,
    modalName,
    title,
    children,
    toggleModal,
    redirect,
}: Props) => {
    if (!isOpen) return null

    const refContainer = useRef<HTMLDivElement>(null)

    const closeModal = () => toggleModal(modalName, false)
    const redirectModal = () => {
        toggleModal(modalName, false)
        toggleModal(redirect, true)
    }

    useCloseByKey(closeModal)
    useClickOutSide(refContainer, closeModal)

    return (
        <Modal>
            <InnerModal ref={refContainer}>
                <Container>
                    <Button onClick={closeModal}>X</Button>
                </Container>
                <Img src='./img/g12.png' />
                <h2>{title}</h2>

                {redirect && (
                    <span onClick={redirectModal}>Забыли пароль?</span>
                )}
                {children}
            </InnerModal>
        </Modal>
    )
}

const Container = styled.div`
    position: absolute;
    right: 20px;
`

const Button = styled.button`
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    :hover {
        background-color: #ededed;
    }
`

const Img = styled.img`
    height: 6rem;
    width: max-content;
`
const Modal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgb(160, 174, 192, 0.6);
    z-index: 100;
`

const InnerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    width: 350px;
    height: fit-content;
    background: #ffffff;
    border-radius: 2%;
    padding: 25px 40px;
`
