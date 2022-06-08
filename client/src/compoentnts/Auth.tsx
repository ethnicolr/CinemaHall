import React, { useState } from 'react'
import { AuthModal } from './AuthModal'
import { AuthLogin } from './AuthLogin'
import { AuthSignUp } from './AuthSignUp'

interface StateModal {
    signIn: boolean
    signUp: boolean
}

type ToggleModal = (modalName: keyof StateModal, flag?: boolean) => void

const AuthComponent = () => {
    const [modalState, setModalState] = useState<StateModal>({
        signIn: false,
        signUp: false,
    })

    const toggleModal: ToggleModal = (modalName, flag) => {
        setModalState((state) => ({
            ...state,
            [modalName]: flag !== undefined ? flag : !state[modalName],
        }))
    }

    return (
        <div>
            <button onClick={() => toggleModal('signIn')}>Login in</button>
            <button onClick={() => toggleModal('signUp')}>registr</button>
            <AuthModal
                isOpen={modalState.signIn}
                modalName={'signIn'}
                toggleModal={toggleModal}
            >
                <AuthLogin />
            </AuthModal>
            <AuthModal
                isOpen={modalState.signUp}
                modalName={'signUp'}
                toggleModal={toggleModal}
            >
                <AuthSignUp />
            </AuthModal>
        </div>
    )
}

export { StateModal, ToggleModal, AuthComponent }
