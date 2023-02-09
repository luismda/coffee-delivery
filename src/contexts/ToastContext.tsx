import { createContext, ReactNode, useState } from 'react'
import { Toast } from '../components/Toast'

interface ToastOptions {
  type: 'success' | 'error'
  message: string
}

interface ToastOptionsState extends ToastOptions {
  isShouldBeVisible: boolean
}

interface ToastContextProps {
  show: (options: ToastOptions) => void
}

export const ToastContext = createContext({} as ToastContextProps)

interface ToastContextProviderProps {
  children: ReactNode
}

export function ToastContextProvider({ children }: ToastContextProviderProps) {
  const [options, setOptions] = useState<ToastOptionsState>(
    {} as ToastOptionsState,
  )

  function show({ type, message }: ToastOptions) {
    setOptions({
      type,
      message,
      isShouldBeVisible: true,
    })

    setTimeout(() => {
      setOptions({
        ...options,
        isShouldBeVisible: false,
      })
    }, 6000)
  }

  return (
    <ToastContext.Provider value={{ show }}>
      {children}

      <Toast
        type={options.type}
        message={options.message}
        isShouldBeVisible={options.isShouldBeVisible}
      />
    </ToastContext.Provider>
  )
}
