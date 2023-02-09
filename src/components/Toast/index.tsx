import { XCircle, CheckCircle } from 'phosphor-react'

import { ToastContainer } from './style'

interface ToastOptions {
  type: 'success' | 'error'
  message: string
  isShouldBeVisible: boolean
}

export function Toast({ type, message, isShouldBeVisible }: ToastOptions) {
  return (
    <ToastContainer
      type={type ?? 'error'}
      isShouldBeVisible={isShouldBeVisible}
    >
      {type === 'success' ? <CheckCircle size={22} /> : <XCircle size={22} />}

      <span role="alert">{message}</span>
    </ToastContainer>
  )
}
