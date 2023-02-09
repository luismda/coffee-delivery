import { useContext } from 'react'
import { ToastContext } from '../contexts/ToastContext'

export function useToast() {
  const toastContextData = useContext(ToastContext)

  return toastContextData
}
