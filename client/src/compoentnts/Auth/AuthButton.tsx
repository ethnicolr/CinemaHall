import React, { useState } from 'react'
import { AuthModal } from './AuthModal'
import { AuthLogin } from './AuthLogin'
import { AuthSignUp } from './AuthSignUp'
import { AuthRestoreStepOne } from './AuthRestoreStepOne'
import { AuthRestoreStepTwo } from './AuthRestoreStepTwo'
import { useAuth } from '../../hooks/useAuth'

interface StateModal {
    signIn: boolean
    signUp: boolean
    restoreOne: boolean
    restoreTwo: boolean
}

type ToggleModal = (modalName: keyof StateModal, flag?: boolean) => void

type RestoreRedirect = (
    current: keyof StateModal,
    next: keyof StateModal,
    email: string
) => void

const AuthButton = () => {
    const [modalState, setModalState] = useState<StateModal>({
        signIn: false,
        signUp: false,
        restoreOne: false,
        restoreTwo: false,
    })
    const { user, logout, isLoading, isIdle, isSuccess, isError, reset } =
        useAuth()

    const [restoreEmail, setRestoreEmail] = useState('')

    const restoreRedirect: RestoreRedirect = (current, next, email) => {
        setRestoreEmail(email)
        toggleModal(current, false)
        toggleModal(next, true)
    }

    const toggleModal: ToggleModal = (modalName, flag) => {
        setModalState((state) => ({
            ...state,
            [modalName]: flag !== undefined ? flag : !state[modalName],
        }))
        if (isError && !flag) {
            reset()
        }
    }

    const renderButton = () => {
        if (isLoading && !Object.values(modalState).some((open) => open)) {
            return <h2>Loading...</h2>
        }
        if (user && user.email) {
            return <button onClick={logout}>logout</button>
        }
        return (
            <>
                <button onClick={() => toggleModal('signIn')}>Login in</button>
                <button onClick={() => toggleModal('signUp')}>Registr</button>
            </>
        )
    }

    return (
        <div>
            {renderButton()}
            <AuthModal
                isOpen={modalState.signIn}
                modalName={'signIn'}
                toggleModal={toggleModal}
                title='Вход в аккаунт'
                redirect='restoreOne'
            >
                <AuthLogin toggleModal={() => toggleModal('signIn')} />
            </AuthModal>
            <AuthModal
                isOpen={modalState.signUp}
                modalName={'signUp'}
                toggleModal={toggleModal}
                title='Регистрация в системе'
            >
                <AuthSignUp toggleModal={() => toggleModal('signUp')} />
            </AuthModal>
            <AuthModal
                isOpen={modalState.restoreOne}
                modalName={'restoreOne'}
                toggleModal={toggleModal}
                title='Восстановление'
            >
                <AuthRestoreStepOne
                    confirmEmail={(email) =>
                        restoreRedirect('restoreOne', 'restoreTwo', email)
                    }
                />
            </AuthModal>
            <AuthModal
                isOpen={modalState.restoreTwo}
                modalName={'restoreTwo'}
                toggleModal={toggleModal}
                title='Введите новый пароль'
            >
                <AuthRestoreStepTwo email={restoreEmail} />
            </AuthModal>
        </div>
    )
}

export { StateModal, ToggleModal, AuthButton }
