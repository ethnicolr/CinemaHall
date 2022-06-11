import React, { useEffect } from 'react'

export const useClickOutSide = (
    ref: React.RefObject<HTMLElement>,
    callbackOut: () => void
) => {
    const handleClick = (e: MouseEvent) => {
        console.log('click')
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callbackOut()
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClick, true)
        return () => {
            document.removeEventListener('click', handleClick, true)
        }
    })
}
