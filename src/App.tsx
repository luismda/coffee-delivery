import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { OrderContextProvider } from './contexts/OrderContext'
import { ToastContextProvider } from './contexts/ToastContext'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <ToastContextProvider>
            <Router />
          </ToastContextProvider>
        </OrderContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
