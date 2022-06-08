import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useClickOutSide } from '../hooks/useClickOutSide'
import { useCloseByKey } from '../hooks/useCloseByKey'
import { StateModal, ToggleModal } from './Auth'

const Img = styled.img`
    height: 6rem;
`
const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    width: 350px;
    height: fit-content;
    background: #595959;
    border-radius: 2%;
    padding: 20px 10px;
`

type ModalName = keyof StateModal

interface Props {
    isOpen: boolean
    modalName: ModalName
    toggleModal: ToggleModal
    children?: React.ReactNode
}

export const AuthModal = ({
    isOpen,
    modalName,
    children,
    toggleModal,
}: Props) => {
    if (!isOpen) return null

    const refContainer = useRef()

    const closeModal = () => toggleModal(modalName, false)

    useCloseByKey(closeModal)
    useClickOutSide(refContainer, closeModal)

    return (
        <Modal ref={refContainer}>
            <button onClick={closeModal}>Close</button>
            <Img src='./img/g12.png' />
            <h2>{modalName}</h2>
            {children}
        </Modal>
    )
}
