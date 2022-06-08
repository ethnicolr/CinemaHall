import React, { useEffect } from 'react'

export const useClickOutSide = (
    ref: React.RefObject<HTMLElement>,
    callbackOut: () => void
) => {
    console.log(ref)
    const handleClick = (e: MouseEvent) => {
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
