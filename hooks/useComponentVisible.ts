import { useState, useEffect, useRef } from 'react'

export default function useComponentVisible(
  initialIsVisible: boolean,
  closeOnEscape: boolean
) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef(null)

  const handleClickOutside = (event: MouseEvent) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false)
    }
  }

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    if (closeOnEscape) {
      document.addEventListener('keydown', handleHideDropdown, true)
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      if (closeOnEscape) {
        document.removeEventListener('keydown', handleHideDropdown, true)
      }
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [closeOnEscape])

  return { ref, isComponentVisible, setIsComponentVisible }
}
