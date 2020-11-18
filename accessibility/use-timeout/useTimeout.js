import { useCallback, useEffect, useRef } from 'react'

export function useTimeout({ allowMultipleTimeout } = { allowMultipleTimeout: false }) {
  const tid = useRef()
  const tidArray = useRef([])

  const createTimeout = useCallback((callback, ms) => {
    if (typeof callback === 'function') {
      if (allowMultipleTimeout) {
        tidArray.current.push(window.setTimeout(callback, ms))
      } else {
        window.clearTimeout(tid.current)
        tid.current = window.setTimeout(callback, ms)
      }
    }
  }, [allowMultipleTimeout])

  useEffect(() => () => {
    tidArray.current.forEach(id => {
      window.clearTimeout(id)
    })
    window.clearTimeout(tid.current)
  }, [])

  return createTimeout
}
