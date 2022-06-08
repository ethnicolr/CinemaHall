import React, { useEffect } from 'react'

export const useCloseByKey = (callback: () => void) => {
    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            const { key } = e
            if (key === 'Escape') {
                e.preventDefault()
                callback()
            }
        }
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])
}
